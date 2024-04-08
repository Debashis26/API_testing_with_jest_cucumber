### Steps to setup Jest Cucumber for testing API's

Step 1: **Initialize a project\***

```javascript
npm init -y
```

Step 2: **_install required dependency_**

```
npm install --save-dev
@babel/core
@babel/preset-env
@babel/preset-typescript
@jest/globals
@types/jest
@types/jest
@types/node
jest
jest-cucumber
ts-jest
babel-jest
```

Step 3 : **_Initialize a_** `tsconfig.ts` **_file by using command_** ```npx tsc --init```


add 'include' and 'exclude' to ```tsconfig.ts``` file
    
```
"include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
```

steps 4:  ***add jest configuration to*** ```package.json``` ***file***  

```
"jest": {
    "testMatch": [
      <path_for_steps_file>
    ],
    "moduleFileExtensions": [
      "ts",
      "js"
    ]
  },
```

steps 5: ***create*** ```babel.config.js``` ***file and add the following configs***  

```
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
};
```

**Note:** Before moving forward with step 3, 4, 5 create feature files and steps file in respective folders.

step 6: ***add test command in*** ```package.json``` 

```
"scripts": {
    // other command
    "test:api": "jest --verbose"
  },
```
