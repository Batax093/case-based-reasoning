import mongoose from "mongoose";

const diabetesSchema =  new mongoose.Schema({
    Pregnancies: {
        type: Number,
        required: true
    },
    Glucose: {
        type: Number,
        required: true
    },
    BloodPressure: {
        type: Number,
        required: true
    },
    SkinThickness: {
        type: Number,
        required: true
    },
    Insulin: {
        type: Number,
        required: true
    },
    BMI: {
        type: Number,
        required: true
    },
    DiabetesPedigreeFunction: {
        type: Number,
        required: true
    },
})

const Diabetes = mongoose.model("Diabetes", diabetesSchema);

export default Diabetes