#!/bin/bash

DEREQUIRE=./node_modules/.bin/derequire
BROWSERIFY=./node_modules/.bin/browserify
POUCHDB=./node_modules/.bin/pouchdb
MKDIRP=./node_modules/.bin/mkdirp

$MKDIRP dist

$BROWSERIFY index.js \
    -x pouchdb \
    | ./bin/es3ify.js \
    | $DEREQUIRE > ./dist/pouchdb.asyncstorage.js
