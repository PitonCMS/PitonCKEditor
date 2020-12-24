# PitonCMS CKEditor5 Custom Build

Forked ckeditor/ckeditor5 to PitonCMS/ckeditor5 on GitHub

Cloned fork to local
    git clone -b stable git@github.com:PitonCMS/ckeditor5.git

Added original ckeditor as upstream remote to get future updates
    cd ckeditor5
    git remote add cke-upstream https://github.com/ckeditor/ckeditor5.git

Using the classic build as a start, copied ckeditor5-build-classic to piton-build using Finder

Navigate into Piton Build of CKEditor
    cd packages/piton-build/

Initialize NPM so that package.json is updated automatically when adding package dependencies, just accept prompts
    npm init

Install node dependencies
    npm install

To add a CKEditor plugin, request it within piton-build with
    npm install --save <package-name>

To build a new version of Piton CKEditor, from the piton-build directory run
    npm run build

Then copy the `build` directory (compiled JS source) into PitonCMS/Engine/assets/ckeditor5/ and commit.
