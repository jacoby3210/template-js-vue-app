### Stage 00
  - init Vite-Vue-JavaScript project.
  - npm install.

### Stage 01
  - adding '.\docs' folder for storing project supporting documentation.
  - -> add "CHANGELOG.md" and "ROADMAP.md" files into '.\docs' folder.

### Stage 02
  - support FontAwesome library.
  - install dependencies: prop-types, react-aria, react-redux, 
      react-router-dom, @reduxjs/toolkit.

### Stage 03
  - install dependencies: sass, msw.
  - update README.md

### Stage 04
  - setup msw workflow.
  - update react-template-app/src/app.jsx
  - update react-template-app/README.md

### Stage 05
  - create dev branch.
  - add changes by next logic: 
    -> create temp branch;
    -> add  temp branch into dev by new commit; 
    -> auto merge release branch;

### Stage 06
  - install 'vite-plugin-advanced-console-log'. Simplifies work with index.js files;
  - install 'vite-plugin-static-copy'. Simplifies transfer files into a release;

### Stage 07
  - add folder ./utils - place here the files needed to build the application depending on the target platform;
  - add vite-plugin-static-copy - use is used to build the application;
  - moved app.js to 'utils/';
  - redistribute functionality between main.jsx and app.jsx. Renaming Main.jsx to router.jsx;

### Stage 08
  - replace 'vite-plugin-console-pro' instead of 'vite-plugin-advanced-console-log';
  - update .gitignore;

### Stage 09
  - using the Jest Framework to run tests;
  - install packages: jest @babel/preset-env @babel/preset-react @testing-library/react @testing-library/jest-dom jest-environment-jsdom babel-jest identity-obj-proxy;
  - project settings: babel.config.cjs and jest.config.cjs; 

### Stage 10
  - initial stage for startup projects;
  - rewritten readme.md;