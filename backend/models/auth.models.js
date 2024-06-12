import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
			validate: {
				validator: function(v) {
					return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(v);
				},
				message: props => `${props.value} is not a valid email address!`
			}
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model("Auth", authSchema);

export default User