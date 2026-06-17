---
title: "Tourment"
slug: "tourment"
locale: "en"
accentColor: "#E5394B"
tagline: "Full-stack platform for running amateur VALORANT tournaments in Spain: sign-ups, single-elimination brackets, player stats and an admin panel."
role: "Fullstack development · final degree project"
year: 2025
stack: ["React", "Vite", "Python · Flask", "MySQL", "JWT", "Docker"]
demoUrl: "https://tourment.vercel.app"
repoUrl: "https://github.com/AlvaroMP01/Tourment"
cover: "../../assets/projects/tourment/cover.png"
screenshots:
  - "../../assets/projects/tourment/bracket.png"
  - "../../assets/projects/tourment/tournament-detail.png"
  - "../../assets/projects/tourment/players-ranking.png"
  - "../../assets/projects/tourment/teams-ranking.png"
  - "../../assets/projects/tourment/admin-panel.png"
  - "../../assets/projects/tourment/news.png"
featured: true
order: 1
---

## Context

Spain's amateur VALORANT scene runs its tournaments on Discord and
spreadsheets: scattered sign-ups, hand-built brackets and stats that get lost
between matches. Tourment centralizes all of that in a single tool: team
registration (squads of up to 7 players), an organizer approval flow,
single-elimination brackets, match reporting with per-player stats, public
player and team rankings, an events calendar, and ecosystem news pulled from
VLR.gg's RSS feed — all behind a role-separated admin panel.

It's my final degree project, built end to end: the data model, the Flask
API, the React frontend and the bracket pairing logic.

## Technical decisions

The project's real differentiator isn't the interface — it's the backend
decisions holding it up.

- **Passwords hashed with PBKDF2.** Stored with `pbkdf2_sha256` (Werkzeug),
  never in clear text.
- **Short-lived JWTs.** They expire after 12 hours and are signed with a
  32+ character secret; the app refuses to boot if that secret isn't set.
- **Login hardened against brute force and enumeration.** Rate-limited to
  5 attempts per minute and 20 per hour per IP, and it returns the same cost
  and the same error message whether or not the user actually exists, so it
  gives no hint about which accounts are real.
- **Restrictive CORS.** An env-driven origin whitelist, not "any origin".
- **Single-elimination bracket algorithm** for strict sizes of 4, 8 or 16
  teams: the winner automatically advances to the right slot of the next
  round. Once generated, the tree can't be hand-edited — any change
  regenerates the whole bracket, so it never lands in an inconsistent state.
- **Images processed in memory with Pillow**: type is validated
  (JPEG/PNG/WEBP), images are resized to 256×256 and recompressed under
  500 KB before being stored internally, with no external URLs. If the
  database commit fails, the just-uploaded file is deleted so nothing is
  left orphaned.
- **Flask blueprints organized by domain** with chained decorators
  (`@token_required` followed by `@role_required` or `@admin_required`), so
  authorization logic doesn't get repeated in every endpoint.

## Process & learnings

The hard part wasn't the UI but the bracket's edge cases — odd advancement,
keeping the tree coherent — and that logic got written before the interface,
not after. The security layer was designed around one concrete question:
"what if the database leaks?" Strong hashing with per-user salts means a
dump of that table isn't, on its own, a password.
