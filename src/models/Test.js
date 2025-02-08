import mongoose from "mongoose";

const TestSchema = new mongoose.Schema({
    name: { type: String, required: true },
    duration: { type: Number, required: true },
    sections: [
        {
            name: String,
            questions: [
                {
                    questionText: String,
                    options: [String],
                    correctAnswer: String,
                },
            ],
        },
    ],
});

export default mongoose.models.Test || mongoose.model("Test", TestSchema);
