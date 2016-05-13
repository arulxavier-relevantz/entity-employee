"use strict";
var Mongoose = require("mongoose");
var AppPackage = require('../package.json');
var EmployeeSchema = (function () {
    function EmployeeSchema() {
    }
    Object.defineProperty(EmployeeSchema, "mongooseSchema", {
        get: function () {
            var mongooseSchema = new Mongoose.Schema({
                entityVersion: {
                    type: String,
                    required: true,
                    default: AppPackage.version
                },
                employeeID: {
                    type: String,
                    required: true,
                    unique: true
                },
                name: {
                    first: {
                        type: String,
                        required: true,
                        errMsg: 'Enter First Name',
                        default: ""
                    },
                    last: {
                        type: String,
                        required: true,
                        default: ""
                    }
                },
                address: {
                    lines: {
                        type: [String],
                        default: [""]
                    },
                    city: {
                        type: String,
                        default: ""
                    },
                    state: {
                        type: String,
                        default: ""
                    },
                    zip: {
                        type: Number,
                        default: new Number("00000")
                    }
                }
            });
            return mongooseSchema;
        },
        enumerable: true,
        configurable: true
    });
    return EmployeeSchema;
}());
var EmployeeModel = Mongoose.model("Employee", EmployeeSchema.mongooseSchema);
exports.EmployeeModel = EmployeeModel;
