#! /bin/sh
set -eu

rm -f results/TC_ALL-branch-cover.json
gobco -branch -stats results/TC_ALL-branch-cover.json -test -run="(TestTC1|TestTC2|TestTC3)" coverage
