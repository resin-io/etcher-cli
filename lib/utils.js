/*
 * Copyright 2016 Resin.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var errors = require('resin-cli-errors');
var chalk = require('chalk');

/**
 * @summary Print an error to stderr
 * @function
 * @public
 *
 * @param {(Error|String)} error - error
 *
 * @example
 * utils.printError(new Error('Oops!'));
 */
exports.printError = function(error) {
  if (typeof error === 'string') {
    error = new Error(error);
  }

  console.error(chalk.red(errors.interpret(error)));
};
