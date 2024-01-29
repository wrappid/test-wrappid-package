#!/bin/bash
echo "START OF REPO COMMIT MESSAGE CHECK SCRIPT"
# Function to check if the last commit message contains "bumped version"
isBumpedVersion() {
    local lastCommitMessage=$(git log -1 --pretty=%B)
    [[ "$lastCommitMessage" == *"bumped version"* ]]
}

# Get user input as a single string
inputString="$@"

# Replace commas with spaces
repoString=${inputString//,/ }

# Convert the space-separated string into an array
repoArray=($repoString)

# Initialize arrays for repositories with and without "bumped version" commit
arrRepoWithBump=()
arrRepoWithoutBump=()

# Set comma as the separator
IFS=','

# Loop through each repository
for repo in "${repoArray[@]}"; do
    # Clone the repository (replace 'git clone' with the actual command you use)
    gh repo clone wrappid/"$repo" temp_folder

    # Change into the cloned repository directory
    cd temp_folder

    # Check if the last commit message contains "bumped version"
    if isBumpedVersion; then
        # If yes, add the repository to arrRepoWithBump
        arrRepoWithBump+=("$repo")
    else
        # If not, add the repository to arrRepoWithoutBump
        arrRepoWithoutBump+=("$repo")
    fi

    # Clean up: go back to the original directory and remove the temporary repository
    cd ..
    rm -rf temp_folder
done

# Reset IFS to default (space)
IFS=$' \t\n'

# Repositories with 'bumped version' commit
echo "${arrRepoWithBump[*]}" | tr ' ' ',' > with_bump_version.txt

# Repositories without 'bumped version' commit
echo "${arrRepoWithoutBump[*]}" | tr ' ' ',' > without_bump_version.txt

echo "Process completed. Check 'with_bump_version.txt' and 'without_bump_version.txt' for the results."
