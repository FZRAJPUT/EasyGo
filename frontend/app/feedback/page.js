"use client";
import React, { useState } from "react";
import NavBar from "../components/NavBar";

const FeedbackSection = () => {
  const [rating, setRating] = useState(0);
  const [feedbackType, setFeedbackType] = useState("General Feedback");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending data to a backend)
    console.log({
      name,
      email,
      feedbackType,
      rating,
      message,
    });
    // Reset form
    setName("");
    setEmail("");
    setFeedbackType("General Feedback");
    setRating(0);
    setMessage("");
  };

  return (
    <div className='w-full bg-[#b2d5fa] h-[100vh]'>
        <NavBar />
    <section className="w-full max-w-2xl mx-auto my-10 p-6 bg-[#8aa2bbc4] rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">We’d Love to Hear From You!</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 outline-none"
            placeholder="Enter your email"
            required
            />
        </div>
        <div className="mb-4">
          <label htmlFor="feedbackType" className="block text-gray-700 font-medium">
            Feedback Type
          </label>
          <select
            id="feedbackType"
            value={feedbackType}
            onChange={(e) => setFeedbackType(e.target.value)}
            className="w-full p-2 border outline-none border-gray-300 rounded mt-1"
          >
            <option value="General Feedback">General Feedback</option>
            <option value="Report a Bug">Report a Bug</option>
            <option value="Feature Request">Feature Request</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Rate Us</label>
          <div className="flex space-x-2 mt-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  rating >= star ? "bg-yellow-400" : "bg-gray-300"
                }`}
              >
                ⭐
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-medium">
            Your Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="outline-none w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Tell us what you think"
            rows="4"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
            >
            Submit Your Feedback
          </button>
        </div>
      </form>
    </section>
              </div>
  );
};

export default FeedbackSection;
