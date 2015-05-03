'use strict';

// TODO: this should probably be in the "extras" API
var pluginBase = require('pouchdb/lib/plugins/base');
var adapterConfig = require('./config');
var downAdapter = require('asyncstorage-down');
pluginBase(adapterConfig, downAdapter);
