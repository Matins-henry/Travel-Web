#!/bin/sh

# Create necessary directories
mkdir -p dist/css

# Build CSS
./node_modules/.bin/tailwindcss -i ./src/input.css -o ./dist/css/output.css --minify

# Copy HTML files
cp -r src/*.html dist/

# Copy assets
cp -r img dist/
cp -r video dist/
