'use strict';

var pluginBase = require('pouchdb/lib/plugins/base');
var adapterConfig = require('./config');
var downAdapter = require('asyncstorage-down');
pluginBase(adapterConfig, downAdapter);
