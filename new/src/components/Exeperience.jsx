import { useEffect, useState } from 'react';
import axios from 'axios';
import { Loader2, MessageSquare, AlertCircle } from 'lucide-react';

const FeedbackList = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/feedback/fetchFeedback');
                if (response.data.success) {
                    setFeedbacks(response.data.allFeedback);
                    console.log(response.data.allFeedback);
                    
                } else {
                    setFeedbacks([]);
                    console.log("No feedbacks received");
                }
            } catch (err) {
                setError('Failed to fetch feedbacks');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchFeedbacks();
    }, []);

    if (loading) return (
        <div className="flex justify-center items-center h-64">
            <Loader2 className="animate-spin text-blue-500" size={48} />
        </div>
    );

    if (error) return (
        <div className="flex justify-center items-center h-64 text-red-500">
            <AlertCircle className="mr-2" size={24} />
            <span>{error}</span>
        </div>
    );

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8 overflow-hidden">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">User Feedbacks</h2>
            {feedbacks.length > 0 ? (
                <div className="feedback-slider flex space-x-4">
                    {feedbacks.concat(feedbacks).map((feedback, index) => (
                        <div key={index} className="min-w-[300px] max-w-xs bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
                                        {feedback.name.charAt(0).toUpperCase()}
                                    </div>
                                    <h3 className="ml-3 font-semibold text-lg capitalize text-gray-800">{feedback.name}</h3>
                                </div>
                                <div className="mb-4">
                                    <p className="text-gray-600">{feedback.message}</p>
                                </div>
                                <div className="flex items-center text-sm text-gray-500">
                                    <MessageSquare size={16} className="mr-2" />
                                    <time dateTime={feedback.date}>
                                        {new Date(feedback.date).toLocaleDateString(undefined, { 
                                            year: 'numeric', 
                                            month: 'long', 
                                            day: 'numeric' 
                                        })}
                                    </time>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center text-gray-600">
                    <MessageSquare size={48} className="mx-auto mb-4 text-gray-400" />
                    <p>No feedbacks available at the moment.</p>
                </div>
            )}
        </div>
    );
};

export default FeedbackList;
