import { Schema, model } from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'please provide name'],
        minLength: 3,
        maxLength: 20,
        trim: true,
    },
    email: {
        type: String,
        validate: {
            validator: validator.isEmail,
            message: 'please provide a valid email',
        },
        required: [true, 'please provide email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'please provide password'],
        minLength: 6,
        select: false,
    },
    lastName: {
        type: String,
        maxLength: 20,
        trim: true,
        default: 'last name',
    },
    location: {
        type: String,
        maxLength: 20,
        trim: true,
        default: 'my city',
    },
});

UserSchema.pre('save', async function () {
    if (!this.isModified('password')) return;

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods = {
    createJWT: function () {
        return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_LIFETIME,
        });
    },
    comparePassword: async function (password) {
        return await bcrypt.compare(password, this.password);
    },
};

export default model('User', UserSchema);
