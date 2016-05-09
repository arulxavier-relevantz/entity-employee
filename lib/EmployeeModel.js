"use strict";
const Mongoose = require("mongoose");
class EmployeeSchema {
    static get mongooseSchema() {
        let mongooseSchema = new Mongoose.Schema({
            entiryVersion: {
                type: String,
                required: true,
                unique: true,
                default: process.env.npm_package_version
            },
            employeeID: {
                type: String,
                required: true,
                unique: true,
                default: ""
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
    }
}
const EmployeeModel = Mongoose.model("Employee", EmployeeSchema.mongooseSchema);
exports.EmployeeModel = EmployeeModel;
