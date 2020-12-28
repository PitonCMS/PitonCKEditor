# PitonCMS CKEditor5 Custom Build

Custom build of CKEditor5 for PitonCMS, based on the Classic build. Includes support for PitonCMS media management to select and insert media files into the document editor.

This bundle started with the classic build packge from https://github.com/ckeditor/ckeditor5/tree/master/packages/ckeditor5-build-classic, and was copied to packages/piton-build and modified.

## Installing and Modifying
Clone this repo to your local development environment and navigate into the new build.
```
git clone -b pitonCMS git@github.com:PitonCMS/PitonCKEditor.git
cd packages/piton-build
```

Initialize NPM so that `package.json` is updated automatically when adding package dependencies, just accept default prompts.
```
npm init
```

Install node dependencies, this may take a while...
```
npm install
```

To add a new CKEditor plugin, request it within the project.
```
npm install --save-dev <package-name>
```

When finished, _build_ a new version of Piton CKEditor to compile the source into a single UMD ckeditor.js file with supporting translations.
```
npm run build
```

Then copy the finished `build` directory into PitonCMS/Engine/assets/ckeditor5/ and commit to `PitonCMS/Engine`.
