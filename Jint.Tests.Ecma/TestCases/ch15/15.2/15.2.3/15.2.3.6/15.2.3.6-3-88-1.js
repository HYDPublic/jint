/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-3-88-1.js
 * @description Object.defineProperty - 'Attributes' is a String object that uses Object's [[Get]] method to access the 'configurable' property (8.10.5 step 4.a)
 */


function testcase() {
        var obj = {};
        try {
            String.prototype.configurable = true;
            var strObj = new String("abc");

            Object.defineProperty(obj, "property", strObj);

            var beforeDeleted = obj.hasOwnProperty("property");

            delete obj.property;

            var afterDeleted = obj.hasOwnProperty("property");

            return beforeDeleted === true && afterDeleted === false;
        } finally {
            delete String.prototype.configurable;
        }
    }
runTestCase(testcase);
