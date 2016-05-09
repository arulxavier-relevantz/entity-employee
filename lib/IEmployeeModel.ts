import * as mongoose from "mongoose";

interface IEmployeeModel extends mongoose.Document {
    entiryVersion: string,
    employeeID: string,
    name: {
        first: string,
        last: string
    },
    address: {
        lines: [string],
        city: string,
        state: string,
        zip: number
    }
}

export { IEmployeeModel };