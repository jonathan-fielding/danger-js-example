import {fail, danger} from "danger"

// Commits should start with feat, fix, major or chore
danger.git.commits.forEach(commit => {
  if (!commit.message.match(/^(feat:)|(fix:)|(major:)|(chore:)/g)) {
    fail(`Commit message '${commit.message}' does match the correct format`)
  }
})