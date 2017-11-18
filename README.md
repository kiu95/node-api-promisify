# node-api-promisify
Promisify node build-in API with util.promisify.
Since this module is using util.proisify, please use node version >= 8.0.0


## Supported node modules:
* child_process
* fs
* (coming soon)

## TODO
* support other node API
* add unit test

## Installation
```
npm install node-api-promisify
```

# Example
```javascript
// This child_process has the same properties as the build-in one
const {child_process} = require('node-api-promisify')
// Or just import used function(s)
const {exec} = require('node-api-promisify').child_process

exec('pwd')
    .then(result => {
    	console.log(result);
    });
    
// or use with async
const pwdAsync = async () => {
	const pwd = await exec('pwd');
    return pwd;
}
console.log(pwdAsync());
```