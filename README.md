# Autonomous Agentic Monorepo

This repository is a **fully autonomous, agent-driven monorepo**. It serves as a living laboratory for a zero-human-intervention software lifecycle.

---

## 🎯 Intent
The goal is for a single AI Agent to manage the entire codebase. The agent identifies tasks, implements features, validates them via E2E testing, and reports progress to a central dashboard.

---

## 📋 The "File-Drop" Protocol
This is the only interface for human direction:

1. **Human:** Drops a `.md` task file into `/todos` on the `master` branch.
2. **Agent:** Monitors `master`, pulls the task, and implements the logic.
3. **Agent:** Updates `tasks.json` with the new entry (ID, status, timestamp).
4. **Agent:** Pushes code to `master` branch.
5. **Agent:** mentions the task id in the commit messages.
6. **Agent:** Moves the task file from `/todos` to `/archives` once the task is complete.

---

## 🏗️ Constraints
* **Source of Truth:** All work must be driven by `tasks.json`.
* **No-Touch:** Humans do not edit code. Updates are requested via new TODOs.
