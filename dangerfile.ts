import {warn, danger} from "danger"

const bigPRThreshold = 600;
if (danger.github.pr.additions + danger.github.pr.deletions > bigPRThreshold) {
  warn('Big pull request, please keep small to make it easier to review');
}