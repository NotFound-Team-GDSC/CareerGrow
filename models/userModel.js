import mongoose from "mongoose";

// Create schema
const Users = mongoose.model('user_account', {
	uuid: {
		type: String,
		required: true,
        unique: true
	},
	email: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	password: {
        type: String,
        required: true
    }
});

export default Users;