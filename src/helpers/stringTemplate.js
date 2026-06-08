/**
 * how to bulid string template js the same as string.format() py
 * https://stackoverflow.com/questions/4974238/javascript-equivalent-of-pythons-format-function
 * https://www.geeksforgeeks.org/python/js-equivalent-to-python-format/ (using sprintf-js)
 */

String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
        return typeof args[i] != 'undefined' ? args[i++] : '';
    });
};

import { sprintf } from "sprintf-js";
import logger from "./logger";

var bar1 = 'foobar',
    bar2 = 'jumped',
    bar3 = 'dog';

// let commonMessageFormat = 'The lazy %s %s over the %s';
// console.log(commonMessageFormat, bar1, bar2, bar3)
// logger.info('The lazy {} {} over the {}'.format(bar3, bar2, bar1));

let commonMessageFormat = sprintf('The lazy %s %s over the %s', bar1, bar2, bar3);
logger.info(commonMessageFormat)