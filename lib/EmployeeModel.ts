///// <reference path="../typings/main.d.ts" />
import {IEmployeeModel} from "./IEmployeeModel";
import * as Mongoose from "mongoose";

class EmployeeSchema {

  static get mongooseSchema () {
       let mongooseSchema =  new Mongoose.Schema({
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

       return mongooseSchema;
   }

}
const EmployeeModel = Mongoose.model<IEmployeeModel>("Employee", EmployeeSchema.mongooseSchema);
export {EmployeeModel};
