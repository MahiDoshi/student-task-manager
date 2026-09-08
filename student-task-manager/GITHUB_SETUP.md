# GitHub Setup Guide

## 1. Repository
Create a public repository named `student-task-manager` and upload/push this folder.

## 2. Branches
Create:
- main
- develop
- feature/task-filter
- feature/ui-improvements

## 3. Issues
Create issues such as:
- [FEATURE] Add task filtering
- [BUG] Task is not saved
- [DOCS] Improve README

Suggested labels: bug, enhancement, documentation, good first issue, priority-high.

## 4. Milestones
Create:
- v1.0 - Core Features
- v1.1 - Testing & Security

## 5. Projects
Create a GitHub Project with columns/views:
Backlog, To Do, In Progress, Review, Testing, Done.

## 6. Discussions
Enable Discussions and create categories:
- General
- Ideas
- Q&A
- Announcements

## 7. Teams and permissions
If working in a group, create teams such as Developers, Testers and Documentation.
Assign least-privilege permissions appropriate to each team.

## 8. Security
In repository Settings/Security:
- Enable CodeQL
- Enable Dependabot alerts
- Enable secret scanning/push protection if available for the repository/plan
- Review dependency graph
- Add repository rulesets
- Add security policy using SECURITY.md if needed

## 9. GitHub Pages
Enable Pages using GitHub Actions. The included deploy workflow publishes the static site.

## 10. Releases
Create tag `v1.0.0` and a GitHub Release with the CHANGELOG content and project screenshots as assets.

## 11. Copilot
Use Copilot for:
- Code completion
- Explaining functions
- Writing/refining tests
- Code review
- Autofix suggestions
- Coding-agent tasks where available

## 12. Codespaces
Open the repository in Codespaces. The `.devcontainer/devcontainer.json` provides a consistent Node.js environment.

## 13. Packages/Container
The `docker/Dockerfile` can be used to build a container image. GitHub Container Registry can host that image.

## 14. APIs
The `api/example.js` demonstrates a REST API client. GitHub REST/GraphQL APIs and webhooks can be used to automate project administration in an expanded version.

## 15. Developer tools
The project can be managed with GitHub CLI, GitHub Desktop, GitHub Mobile, GitHub.dev and VS Code.

## Important
Some GitHub features depend on repository visibility, organization settings, account type, or GitHub plan. Do not claim a feature is enabled until you actually enable/verify it in the repository.
