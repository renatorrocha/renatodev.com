---
title: Automatic Versioning and Releases
description: How I automate versioning and changelogs in my projects using semantic-release
date: 2025-04-17
---

# What is versioning?

Versioning is the process of assigning version numbers to your code, usually following the `vX.Y.Z` pattern (also known as **SemVer** – [Semantic Versioning](https://semver.org/)).

Each part of the version number has a specific meaning:

- **Major (`X`)**: incremented when you introduce breaking changes.
- **Minor (`Y`)**: incremented when you add new features that **don’t break** existing functionality.
- **Patch (`Z`)**: incremented when you make **backwards-compatible bug fixes**.

This kind of versioning helps clearly communicate the impact of a new version to the users of your application or library.

# What is a release?

A **release** is a packaged and published version of your project. It usually includes:

- The new version number
- A changelog with the updates
- Possibly binaries, artifacts, or distribution files (depending on the project)
- A commit and a tag in the repository marking that version

In other words: it’s the official delivery of a new version of your code.

# How to automate versioning and releases?

That’s where [**semantic-release**](https://semantic-release.gitbook.io/semantic-release/) comes in — a tool that automates the entire process of:

- Generating and applying version numbers based on commit messages (using conventions like [Conventional Commits](https://www.conventionalcommits.org/))
- Automatically creating changelogs
- Creating and publishing releases (with tags, messages, and optionally publishing to GitHub, GitLab, NPM, etc.)

All of this without having to manually decide the next version.

> In short: you just focus on writing meaningful commits, and semantic-release handles the rest.

# Is it only for JavaScript projects?

**Not at all!** I’ve tested semantic-release with Golang projects and it worked flawlessly. The trick is creating a `package.json` and a `.releaserc.json`, where I define the scripts and dependencies needed to run semantic-release (and honestly, maybe not even all of that is strictly necessary lol).

Then you just create a GitHub Actions workflow that runs the semantic-release script on the desired branch. You can configure the workflow however you like — for every commit, after a PR is merged, or with any other trigger.

> 💡 **Pro tip:** don’t forget to create a `repository secret` for your PAT (Personal Access Token), and enable **Workflow permissions** under the repository settings to allow read/write access.  
> (It took me waaay too long to figure out that this was the reason my releases weren’t being published hahah)

# Example repositories with semantic-release configured

If you want to see how it works in practice, here are two sample repositories I set up:

- [**semantic-release-boilerplate**](https://github.com/renatorrocha/semantic-release-boilerplate): a basic project using **Bun** in the frontend to demonstrate semantic-release in a JS/TS environment.
- [**semantic-release-golang**](https://github.com/renatorrocha/semantic-release-golang): a **Go** project showing how semantic-release can also be used outside of the Node.js ecosystem (yes, there’s a `package.json` in the repo — ironic, I know hahaha).