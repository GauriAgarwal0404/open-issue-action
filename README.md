# Open Issue Action

A GitHub Action to create issues programmatically in your repository.

![test-workflow](https://github.com/GauriAgarwal0404/open-issue-action/actions/workflows/ci.yml/badge.svg?event=push&branch=main)

## Overview

This action allows you to automatically create GitHub issues with customizable
titles, bodies, and assignees. It's perfect for automated workflows, bug
reporting, or creating tasks based on specific triggers.

## ⚠️ Important: Required Permissions

This action **requires** the `issues: write` permission to function properly.
Without this permission, you will encounter the error:

```
Resource not accessible by integration
```

To use this action, you **must** include the required permissions in your
workflow file:

```yaml
name: Create Issue
on:
  workflow_dispatch:

# REQUIRED: This action needs write permissions to create issues
permissions:
  issues: write

jobs:
  create-issue:
    runs-on: ubuntu-latest
    steps:
      - name: Create Issue
        uses: ./
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          title: 'Test Issue'
          body: 'Test issue body'
          assignees: 'gauri'
```

## Required Permissions

This action requires the following permissions in your workflow file:

```yaml
permissions:
  issues: write
```

Without this permission, you'll get the error:

```markdown
## Inputs

| Input       | Description                                       | Required | Default |
| ----------- | ------------------------------------------------- | -------- | ------- |
| `token`     | GitHub token with issues write permission         | Yes      |         |
| `title`     | Issue title                                       | Yes      |         |
| `body`      | Issue body                                        | No       | `''`    |
| `assignees` | Issue assignees (comma-separated or one per line) | No       | `''`    |

## Outputs

| Output  | Description              |
| ------- | ------------------------ |
| `issue` | The created issue object |

## Troubleshooting

### "Resource not accessible by integration" Error

This error occurs when the GitHub token doesn't have sufficient permissions.
Make sure:

1. Your workflow includes `permissions: issues: write`
2. You're using `${{ secrets.GITHUB_TOKEN }}` or a Personal Access Token with
   appropriate permissions
3. The repository allows the action to create issues

### For Organization Repositories

If you're using this in an organization repository, you may need to:

1. Use a Personal Access Token (PAT) instead of `GITHUB_TOKEN`
2. Ensure the PAT has `repo` scope for private repositories or `public_repo`
   scope for public repositories
3. Check organization security settings that might restrict GitHub Actions

## Development

See [CONTRIBUTING.md](CONTRIBUTING.md) for development instructions.
```
