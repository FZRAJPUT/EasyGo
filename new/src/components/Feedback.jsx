import { useState } from 'react';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import FeedbackList from './Exeperience';

const Feedback = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onValue = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const newUrl = "http://localhost:4000/api/feedback/addFeedback";
        try {
            const response = await axios.post(newUrl, data);
            if (response.data.success) {
                toast.success(response.data.message);
                setData({ name: "", email: "", message: "" });
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("An error occurred while submitting your feedback.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="contact" className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex flex-col items-center justify-center px-4 py-16">
            <div className="max-w-4xl w-full text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Share Your Experience and Feedback
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    We value your input! Share your thoughts, suggestions, and experiences to help us enhance our app and serve you better.
                </p>
            </div>

            <div className="w-full max-w-md">
                <form onSubmit={onSubmit} className="bg-white shadow-2xl rounded-lg overflow-hidden">
                    <div className="p-8 space-y-6">
                        {['name', 'email', 'message'].map((field) => (
                            <div key={field} className="relative">
                                {field === 'message' ? (
                                    <textarea
                                        id={field}
                                        name={field}
                                        rows="5"
                                        required
                                        className="peer w-full p-4 border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500 resize-none"
                                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                        value={data[field]}
                                        onChange={onValue}
                                    />
                                ) : (
                                    <input
                                        type={field === 'email' ? 'email' : 'text'}
                                        id={field}
                                        name={field}
                                        required
                                        className="peer w-full p-4 border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500"
                                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                        value={data[field]}
                                        onChange={onValue}
                                    />
                                )}
                                <label
                                    htmlFor={field}
                                    className="absolute left-4 -top-2.5 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500"
                                >
                                    {field.charAt(0).toUpperCase() + field.slice(1)}
                                </label>
                            </div>
                        ))}
                    </div>
                    <div className="px-8 pb-8">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full p-4 rounded-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 ${
                                isSubmitting
                                    ? 'bg-[#000000] cursor-not-allowed'
                                    : 'bg-[#000000]'
                            }`}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                        </button>
                    </div>
                </form>
            </div>

            <div className="mt-16 w-full max-w-4xl">
                <FeedbackList />
            </div>

            <Toaster position="bottom-center" reverseOrder={false} />
        </div>
    );
};

export default Feedback;