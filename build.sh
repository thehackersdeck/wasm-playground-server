#!/usr/bin/env bash

set -e

echo "Installing WABG"

#clone the wabt repo
git clone --recursive https://github.com/WebAssembly/wabt

#cd into the cloned directory
cd wabt

#we want to build
make

