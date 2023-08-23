#! /bin/sh
set -eu

gobco .
rm -f results/TC-ALL-branch-cover.json
gobco -branch -stats results/TC-ALL-branch-cover.json coverage
