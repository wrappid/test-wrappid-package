#!/bin/bash

# Repo Name
REPO_NAME="components"

# Create the release notes file
release_notes_file="RELEASE_NOTES.md"
touch "$release_notes_file"

# Add a header to the release notes file
echo "# Release Notes" > "$release_notes_file"
echo >> "$release_notes_file"

# Get the latest two tags sorted in descending order
tags=$(git tag --list --sort=version:refname | tail -n 2)
reversed_tags=$(echo "$tags" | awk '{a[i++]=$0} END {for (j=i-1; j>=0;) print a[j--] }')
# Split the tags into an array
tag_array=($reversed_tags)

# Check if there are at least two tags
if [ ${#tag_array[@]} -ge 2 ]; then
  current_tag="${tag_array[0]}"
  previous_tag="${tag_array[1]}"

  # Get the commit messages between the previous tag and the current tag
  echo "## Version $current_tag" >> "$release_notes_file"

  # Extract fix, bug, feat, features commits
  fix_log=$(git log --pretty=format:"* [%s](https://github.com/wrappid/$REPO_NAME/commit/%H)" "$current_tag...$previous_tag" --grep "^fix")
  bug_log=$(git log --pretty=format:"* [%s](https://github.com/wrappid/$REPO_NAME/commit/%H)" "$current_tag...$previous_tag" --grep "^bug")
  feat_log=$(git log --pretty=format:"* [%s](https://github.com/wrappid/$REPO_NAME/commit/%H)" "$current_tag...$previous_tag" --grep "^feat")
  features_log=$(git log --pretty=format:"* [%s](https://github.com/wrappid/$REPO_NAME/commit/%H)" "$current_tag...$previous_tag" --grep "^features")
  refactors_log=$(git log --pretty=format:"* [%s](https://github.com/wrappid/$REPO_NAME/commit/%H)" "$current_tag...$previous_tag" --grep "^refactor")

  if [[ -n $fix_log ]]; then
    echo "### Fixes" >> "$release_notes_file"
    echo "$fix_log" >> "$release_notes_file"
  fi

  if [[ -n $bug_log ]]; then
    echo "### Bugs" >> "$release_notes_file"
    echo "$bug_log" >> "$release_notes_file"
  fi

  if [[ -n $feat_log ]]; then
    echo "### Features" >> "$release_notes_file"
    echo "$feat_log" >> "$release_notes_file"
  fi

  if [[ -n $features_log ]]; then
    echo "### Features" >> "$release_notes_file"
    echo "$features_log" >> "$release_notes_file"
  fi

    if [[ -n $refactors_log ]]; then
    echo "### Refactorings" >> "$release_notes_file"
    echo "$refactors_log" >> "$release_notes_file"
  fi

else
  echo "Not enough tags found for comparison."
fi

echo "Created $release_notes_file."
