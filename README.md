pouchdb-async-storage
====

Work in progress - get PouchDB working with React Native's AsyncStorage as a backend.

Usage
---

You should be able to just do:

    npm install --save pouchdb-async-storage
    
Then require it after PouchDB:

```js
var PouchDB = require('pouchdb');
require('pouchdb-async-storage');

var db = new PouchDB('mydb', {adapter: 'asyncstorage'});
```

Build
----

    npm install && npm run build
