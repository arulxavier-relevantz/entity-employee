import { IEmployeeModel } from "./IEmployeeModel";
import * as Mongoose from "mongoose";
let AppPackage = require('../package.json');

class EmployeeSchema {

  static get mongooseSchema () {
       let mongooseSchema =  new Mongoose.Schema({
           entityVersion: {
               type: String,
               required: true,
               unique: true,
               default: AppPackage.version
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
const EmployeeModel = Mongoose.model<IEmployeeModel>("Employee", EmployeeSchema.mongooseSchema);
export { EmployeeModel };
