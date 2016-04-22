"use strict";
var Mongoose = require("mongoose");
var EmployeeSchema = (function () {
    function EmployeeSchema() {
    }
    Object.defineProperty(EmployeeSchema, "employeeSchema", {
        get: function () {
            var employeeSchema = new Mongoose.Schema({
                employeeID: {
                    type: String,
                    required: true,
                    unique: true
                },
                name: {
                    first: {
                        type: String,
                        required: true,
                        errMsg: 'Enter First Name'
                    },
                    last: {
                        type: String,
                        required: true
                    }
                },
                address: {
                    lines: {
                        type: [String]
                    },
                    city: {
                        type: String
                    },
                    state: {
                        type: String
                    },
                    zip: {
                        type: Number
                    }
                }
            });
            return employeeSchema;
        },
        enumerable: true,
        configurable: true
    });
    return EmployeeSchema;
}());
var EmployeeModel = Mongoose.model("IEmployeeModel", EmployeeSchema.employeeSchema);
exports.EmployeeModel = EmployeeModel;
