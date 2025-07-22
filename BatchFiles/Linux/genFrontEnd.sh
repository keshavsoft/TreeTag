#!/bin/bash

set -e  # Exit on error
shopt -s nullglob  # To avoid issues if no files match

# --- STEP 1: Get next version folder ---
get_next_version() {
    max=0
    for dir in Public/V*; do
        [[ -d "$dir" ]] || continue
        folder=$(basename "$dir")
        ver=${folder#V}
        if [[ "$ver" =~ ^[0-9]+$ ]]; then
            if (( ver > max )); then
                max=$ver
            fi
        fi
    done
    NEXT_VERSION="V$((max + 1))"
}

get_next_version
echo "Next Version: $NEXT_VERSION"
mkdir -p "Public/$NEXT_VERSION"

# Clone GulpHbs if it doesn't exist
if [ ! -d "../GulpHbs" ]; then
    echo "GulpHbs folder not found. Cloning..."
    git clone https://github.com/keshavsoft/GulpHbs ../GulpHbs
fi

# Run npm install if node_modules is missing
if [ ! -d "../GulpHbs/node_modules" ]; then
    echo "node_modules folder not found. Running npm install..."
    pushd ../GulpHbs > /dev/null
    npm install
    popd > /dev/null
fi

# Copy .env
cp -f ".env" "../GulpHbs/.env"

# --- STEP 2: Iterate over JSON files in Schemas folder ---
for file in Schemas/*.json; do
    filename=$(basename "$file")
    name="${filename%.*}"

    echo "Processing $filename"

    # Copy schema to GulpHbs
    cp -f "$file" "../GulpHbs/schema.json"

    # Build with npm
    pushd ../GulpHbs > /dev/null
    npm run dist
    popd > /dev/null

    # Create target folder and copy built files
    mkdir -p "Public/$NEXT_VERSION/$name"
    cp -r ../GulpHbs/dist/* "Public/$NEXT_VERSION/$name/"

    echo "Done with $filename"
done