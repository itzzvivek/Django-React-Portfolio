import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [response, setResponse] = useState({ message: null, type: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubscribing(true);

    try {
      const response = await fetch("subscribe/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setResponse({ message: "Subscribe successfully!", type: "success" });
        setEmail("");
      } else {
        throw new Error("failed to subscribe");
      }
    } catch (error) {
      setResponse({
        message: "An error occurred. Please try again later.",
        type: "error",
      });
    }
    setTimeout(() => {
      setResponse({ message: null, type: null });
      setSubscribing(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div
      name="newsletter"
      className="w-full text-gray-300 bg-[#14101b] p-4 h-screen md:h-screen"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-teal-600">
            Newsletter
          </p>
          <p className="text-2xl text-gray-300 py-4">
            Welcome to My Portfolio's Newsletter! I'm Vivek, a software
            developer. Join me as we explore the exciting world of technology,
            discussing coding, emerging technologies, and the impact of tech on.
          </p>
        </div>
        <div
          name="newsletter"
          action=""
          class="flex justify-center items-center"
        >
          <form onSubmit={handleSubmit} class="bg-[#14101b] flex text-black">
            <input
              class="my-4 px-6 py-2 bg-[#ccd6f6] rounded-l-lg"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <button
              class="text-white border-2 hover:bg-teal-600 hover:border-teal-600 my-4 px-4 py-1 flex items-center rounded-r-lg style"
              type="submit"
              disabled={subscribing}
            >
              Submit
            </button>
          </form>
        </div>
        {response.message && (
          <div
            className={`p-4 mb-4 text-sm rounded-lg ${
              response.type === "success"
                ? "bg-green-50 text-green-800"
                : "bg-red-50 text-red-800"
            } duration-300`}
            role="alert"
          >
            <p>{response.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
