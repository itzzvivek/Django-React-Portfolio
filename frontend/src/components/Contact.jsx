import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponse("Form submitted successfully!");
        setFormData({name: "", email: "", message: ""});
      } else {
        throw new Error("Failed to submit form!");
      }
    } catch (error) {
      setResponse("An error occurred. Please try again later.");
    }

    setSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.message]: e.target.value,
    });
  };
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#14101b] flex justify-center items-center p-4"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="text-center">
          <p className="text-4xl font-bold inline border-b-4 border-teal-600 text-gray-300">
            Contact
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 mt-6"
          type="text"
          name="name"
          id=""
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="my-4 p-2 bg-[#ccd6f6]"
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button
          className="text-white border-2 hover:bg-teal-600 hover:border-teal-600 px-4 py-3 my-8 mx-auto flex items-center"
          type="submit"
          disabled={submitting}
        >
          Let's Connect
        </button>
        {response && <p>{response}</p>}
      </form>
    </div>
  );
};

export default Contact;
