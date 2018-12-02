#!/bin/bash

TEMP_DIR=".aby0.github.io";
REPO="git@github.com:aby0/aby0.github.io";
RELEASE=$(date)

if [ -d ${TEMP_DIR} ]; then
  rm -rf ${TEMP_DIR};
fi;

# Download latest code.
git clone --depth 1 --branch master ${REPO} ${TEMP_DIR};

# Update all files.
rm -rf ${TEMP_DIR}/*;
cp -r dist/* ${TEMP_DIR};
cp README.md ${TEMP_DIR};
[ ! -f "${TEMP_DIR}/.nojekyll" ] && touch "${TEMP_DIR}/.nojekyll";

# Commit and push.
cd ${TEMP_DIR};
git add -A;
git commit -m "Deployed at ${RELEASE}" --author "Somya Anand <somyaanand214@gmail.com>";
git push origin master;

cd ..
rm -rf ${TEMP_DIR};

echo 'Deployed to github pages.';