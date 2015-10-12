# assert-rejected
Assert that a promise has been rejected, optionally with a message

Test APIs that are expected to return rejected promises given certain errors.

```
npm install --save-dev assert-rejected
```

## Example

```javascript
var assertRejected = require("assert-rejected");

var rejected = Promise.reject(new Error("Whoops!"));

assertRejected(rejected).then(function(){
    console.log("Yup! It rejected!")
});

var resolved = Promise.resolve("All Good!");

assertRejected(resolved).catch(function(){
    console.log("Oh no, it wasn't rejected!");
});

var rejectedWithMessage = Promise.reject(new Error("Whoopsies"));

assertRejected(rejectedWithMessage, "Whoopsies").then(function () {
    console.log("Rejected with the expected message!");
});
```

## API
### `assertRejected(promise, message)`
Checks whether a given promise has been rejected
- `promise` : The promise to check
- `message` : Optionally specify what error the message should contain

Returns a promise which resolves if everything is OK
