import { connect } from "mongoose";

const dbConnect = async () => {
    try {
        const db = await connect(process.env.CONNECTION_STRING)
        console.log(`Database connection is successful : ${db.connection.host}, ${db.connection.name}`)
    } catch (error) {
        console.log(`Database failed : ${error}`)
        process.exit(1)
    }
}

export default dbConnect;