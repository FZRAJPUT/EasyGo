import feedbackModel from "../models/feedbackModel.js";

// upload feedback

const addFeedback = async (req, res) => {
    const { name, email, message } = req.body;
    try {
        // Check if feedback from this email already exists
        const exist = await feedbackModel.findOne({ email: email });

        if (exist) {
            return res.json({ success: false, message: "You can only send one feedback." });
        }
        
        // Create a new feedback document
        const newFeedback = new feedbackModel({
            name: name,
            email: email,
            message: message
        });

        // Save the new feedback
        await newFeedback.save();
        res.json({ success: true, message: "Feedback submitted" });

    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Failed to submit" });
    }
};


// fetch feedback

const fetchFeedback = async (req, res) => {
    try {
        const allFeedback = await feedbackModel.find()
        res.json({success:true,allFeedback})
    } catch (error) {
        console.error(error)
        res.json({success:false,message:"failed to get feedback"})
    }
}

export { addFeedback, fetchFeedback }