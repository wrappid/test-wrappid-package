#!/bin/bash

VERSION_TYPE=$1
INCLUDE_BUILD_NUMBER=true

# Specify the dependency to bump
DEPENDENCY="version"

# Specify the paths to the package.json files
PACKAGE_JSON_PATHS=("package.json" "package/package.json")

for PACKAGE_JSON_PATH in "${PACKAGE_JSON_PATHS[@]}"; do
  # Get the current version of the dependency
  CURRENT_VERSION=$(jq -r ".$DEPENDENCY" "$PACKAGE_JSON_PATH")

  # Extract major, minor, patch, hotfix, and build number components
  IFS='.' read -r -a VERSION_PARTS <<< "$CURRENT_VERSION"
  MAJOR="${VERSION_PARTS[0]}"
  MINOR="${VERSION_PARTS[1]}"
  PATCH="${VERSION_PARTS[2]}"
  HOTFIX="${VERSION_PARTS[3]}"
  BUILD_NUMBER="${VERSION_PARTS[4]}"

  # Increment the specified version type
  case "$VERSION_TYPE" in
    "major") MAJOR=$((MAJOR + 1)); MINOR=0; PATCH=0; HOTFIX=0; [ "$INCLUDE_BUILD_NUMBER" == true ] && BUILD_NUMBER=0 ;;
    "minor") MINOR=$((MINOR + 1)); PATCH=0; HOTFIX=0; [ "$INCLUDE_BUILD_NUMBER" == true ] && BUILD_NUMBER=0 ;;
    "patch") PATCH=$((PATCH + 1)); HOTFIX=0; [ "$INCLUDE_BUILD_NUMBER" == true ] && BUILD_NUMBER=0 ;;
    "hotfix") HOTFIX=$((HOTFIX + 1)); [ "$INCLUDE_BUILD_NUMBER" == true ] && BUILD_NUMBER=0 ;;
    "build") [ "$INCLUDE_BUILD_NUMBER" == true ] && BUILD_NUMBER=$((BUILD_NUMBER + 1)) ;;
    *) echo "Invalid VERSION_TYPE"; exit 1 ;;
  esac

  NEW_VERSION="$MAJOR.$MINOR.$PATCH.$HOTFIX"
  [ "$INCLUDE_BUILD_NUMBER" == true ] && NEW_VERSION="$NEW_VERSION.$BUILD_NUMBER"

  # Update the version in package.json
  jq ".$DEPENDENCY = \"$NEW_VERSION\"" "$PACKAGE_JSON_PATH" > tmpfile && mv tmpfile "$PACKAGE_JSON_PATH"

  echo "$VERSION_TYPE bumped $DEPENDENCY from $CURRENT_VERSION to $NEW_VERSION in $PACKAGE_JSON_PATH"
done
