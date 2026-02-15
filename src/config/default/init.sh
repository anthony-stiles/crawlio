#!/bin/bash
CURRENT_DIR=$(pwd)
for dir in "$@"
do
  echo "Installing Library: $dir";
  cd $dir || { echo "Directory not found."; exit 1; };
  npm install
  npm run build
  # Removing previous packed files
  rm -f *.tgz;
  library_name=$(npm pack | tail -n 1 || { echo "NPM Pack Failed."; exit 1; };);
  cd $CURRENT_DIR
  npm install $dir/$library_name
done