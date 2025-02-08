import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

const dbConnect = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
    }
};

export default dbConnect;
