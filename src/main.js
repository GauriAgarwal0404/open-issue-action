import * as core from '@actions/core'
import * as github from '@actions/github'

/**
 * The main function for the action.
 *
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run() {
  try {
    // Get inputs from action.yml
    const token = core.getInput('token', { required: true })
    const title = core.getInput('title', { required: true })
    const body = core.getInput('body') || ''
    const assigneesInput = core.getInput('assignees') || ''

    // Parse assignees (can be comma-separated or newline-separated)
    const assignees = assigneesInput
      .split(/[,\n]/)
      .map((assignee) => assignee.trim())
      .filter((assignee) => assignee.length > 0)

    // Get the repository context
    const { context } = github
    const { owner, repo } = context.repo

    // Create GitHub client
    const octokit = github.getOctokit(token)

    // Create the issue
    const response = await octokit.rest.issues.create({
      owner,
      repo,
      title,
      body,
      assignees: assignees.length > 0 ? assignees : undefined
    })

    // Set outputs
    core.setOutput('issue', JSON.stringify(response.data))

    core.info(`Created issue #${response.data.number}: ${response.data.title}`)
    core.info(`Issue URL: ${response.data.html_url}`)
  } catch (error) {
    core.setFailed(`Action failed: ${error.message}`)
  }
}
