import mongoose, { Schema } from "mongoose";

const schemaTarea = new Schema ({
    tarea:{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100
    }
})

const Tarea = mongoose.model('tarea', schemaTarea)

export default Tarea