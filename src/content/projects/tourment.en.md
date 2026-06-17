---
title: "Tourment"
slug: "tourment"
locale: "en"
accentColor: "#E5394B"
tagline: "Platform to organize and follow Valorant tournaments: live brackets, team sign-ups and an admin panel."
role: "Fullstack (solo)"
year: 2024
stack: ["Python", "Flask", "MySQL", "React", "JWT"]
cover: "../../assets/projects/tourment/cover.png"
screenshots:
  - "../../assets/projects/tourment/shot-1.png"
  - "../../assets/projects/tourment/shot-2.png"
  - "../../assets/projects/tourment/shot-3.png"
featured: true
order: 1
---

<!-- DRAFT: provisional copy, finalized in phase 6 together with real screenshots. -->

## Context

Valorant communities run tournaments over Discord and spreadsheets: messy
sign-ups, hand-drawn brackets and results that get lost. Tourment exists to fix
that with a single tool: an organizer sets up a tournament in minutes and teams
follow their progress in real time.

I built all of it myself: database design, the Flask API, the React frontend
and the bracket matchmaking logic.

## Technical decisions

The project's real differentiator isn't the interface — it's the backend
decisions holding it up.

**Hardened authentication.** Access uses JWT with short expiration and
controlled renewal, and passwords are stored with **PBKDF2** (key derivation
with salt and iterations), not a plain hash. For a tournament manager with
admin, team captain and player roles, weak authentication would have been the
most expensive failure point in the whole system.

**Relational model in MySQL.** Tournaments, teams, players and matches are pure
relations with real constraints (a player can't be on two teams in the same
tournament, a match can't close without a result). A relational schema with
foreign keys prevents impossible states that a document store would have
allowed without extra discipline in application code.

**Flask over a heavier framework.** The API didn't need a CMS or server-side
view rendering — it needed clear routes and full control over the
request/response cycle to serve a React frontend.

## Process & learnings

Generating correct brackets with odd team counts and byes pushed me to write
the edge cases first and the UI second, not the other way around. It's where
the gap between "works in the happy path" and "always works" showed up the
most.

The authentication layer was built around a simple question: what happens if
the database leaks? With PBKDF2 and per-user salts, a dump of the password
table is not, on its own, a plaintext password.
