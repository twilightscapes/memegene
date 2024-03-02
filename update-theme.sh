#!/bin/bash

# Set the URL of your central repository
THEME_REPO_URL="https://github.com/twilightscapes/pirateplus"

# Set the branch or tag you want to pull updates from
BRANCH_OR_TAG="main"

# Backup user changes
mv src user_src_backup

# Clone the central repository
git clone --branch $BRANCH_OR_TAG --depth 1 $THEME_REPO_URL tmp_theme

# Replace the src folder, excluding index.js files in pages directory
find tmp_theme/src -type f -not -path "*/pages/index.js" -exec cp --parents {} ./src \;

# Replace the gatsby-config.js file
cp tmp_theme/gatsby-config.js .

# Replace the gatsby-node.js file
cp tmp_theme/gatsby-node.js .

# Replace the netlify.toml file
cp tmp_theme/netlify.toml .

# Update the admin/config.yml file
cp tmp_theme/static/admin/config.yml static/admin/

# Copy the package.json file
cp tmp_theme/package.json .

# Clean up
rm -rf tmp_theme

echo "PIRATE Plus updated successfully!"
