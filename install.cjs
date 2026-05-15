#!/usr/bin/env node
/**
 * Postinstall: copy SKILL.md into the user's Claude Code skills directory.
 * Cross-platform. Idempotent. SHA-256 verified.
 *
 * Guards:
 *  - Refuses to run inside the source repo (presence of .git directory)
 *    unless DECISIONCOUNCIL_FORCE_INSTALL=1 is set.
 *  - Verifies post-copy SHA-256 against source; exits non-zero on mismatch.
 */

'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const crypto = require('crypto');

const SKILL_NAME = 'decisioncouncil';
const SOURCE_FILE = path.join(__dirname, 'SKILL.md');
const TARGET_DIR = path.join(os.homedir(), '.claude', 'skills', SKILL_NAME);
const TARGET_FILE = path.join(TARGET_DIR, 'SKILL.md');

function sha256(filePath) {
  const buf = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(buf).digest('hex');
}

function log(msg) {
  process.stdout.write(`[install] ${msg}\n`);
}

function warn(msg) {
  process.stderr.write(`[install] ${msg}\n`);
}

(function main() {
  const gitDir = path.join(__dirname, '.git');
  if (fs.existsSync(gitDir) && process.env.DECISIONCOUNCIL_FORCE_INSTALL !== '1') {
    log('source repo detected (.git present); skipping install. Set DECISIONCOUNCIL_FORCE_INSTALL=1 to override.');
    return;
  }

  if (!fs.existsSync(SOURCE_FILE)) {
    warn(`source SKILL.md not found at ${SOURCE_FILE}`);
    process.exit(1);
  }

  try {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
  } catch (err) {
    warn(`could not create target dir ${TARGET_DIR}: ${err.message}`);
    process.exit(1);
  }

  try {
    fs.copyFileSync(SOURCE_FILE, TARGET_FILE);
  } catch (err) {
    warn(`copy failed: ${err.message}`);
    process.exit(1);
  }

  const sourceHash = sha256(SOURCE_FILE);
  const targetHash = sha256(TARGET_FILE);

  if (sourceHash !== targetHash) {
    warn(`SHA-256 mismatch after copy. source=${sourceHash} target=${targetHash}`);
    process.exit(1);
  }

  log(`copied ${SOURCE_FILE} -> ${TARGET_FILE} (sha256=${targetHash})`);
})();
