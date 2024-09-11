import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config();
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    const { mobile , name , password } = req.body;
    // console.log(mobile , name , password);

    if (!name || !mobile || !password ) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobile)) {
        return res.status(400).json({ error: "Invalid mobile number" });
    }

    try {
        const existingUser = await User.findOne({ mobile });
        if (existingUser) {
            // console.log(existingUser)
            return res.status(400).json({ error: "Mobile number already in use" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            mobile,
            name,
            password: hashedPassword,
        });

        // console.log("newUser",newUser)

        await newUser.save();

        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.cookie("zerodha", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'none',
        });

        res.status(201).json({ message: "User registered successfully", user: newUser ,token , success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" , success: false });
    }
};

export const signin = async (req, res) => {
    const { mobile, password } = req.body;

    if (!mobile || !password || mobile.trim() === '' || password.trim() === '') {
        return res.status(400).json({ error: "All fields are required"  , success: false });
    }

    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobile)) {
        return res.status(400).json({ error: "Invalid mobile number"  , success: false });
    }

    try {
        const user = await User.findOne({ mobile });
        if (!user) {
            return res.status(400).json({ error: "Invalid credentials" , success: false });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials"  , success: false });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        
        res.cookie("zerodha", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'none',
        });

        res.status(200).json({ message: "Logged in successfully", user, token  , success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error"  , success: false });
    }
};

export const logout = async (req, res) => {
    // Assuming you're using cookies to store the token
    res.cookie('zerodha', '', { expires: new Date(0) });
    res.status(200).json({ message: "Logged out successfully"  , success: true });
};

