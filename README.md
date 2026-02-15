# Welcome
#### Requirements

* Draw.io Integration
* Python
* Node
    * Aws Cdk
    * Aws Cli
    * Jest

``` cd my-package
npm run build
cp package.json dist/package.json
cd dist
npm link

cd my-project
npm link my-package-name
// Once you check your node_modules you should now see the correct dist files
```
