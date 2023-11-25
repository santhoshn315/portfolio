import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = "Message from Website Visitor";
    const mailtoLink = `mailto:santhoshn315@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="hero min-h-screen bg-base-200 w-[100vw] justify-center flex flex-col items-center">
      <h1 className="text-5xl text-[#c48a16] mt-10">Contact Me</h1>
      <div className="hero-content flex flex-col lg:flex-row-reverse w-full max-w-screen-lg">
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <p className="py-10 font-mono">
            Thank you for visiting my website! If you have any questions or would like to get in touch, please feel free to send me an email.<br></br>
            <br></br>I am always open to new opportunities and collaborations, and I would love to hear from you. Whether you have a project in mind or just want to connect, 
            I am happy to chat. I will do my best to respond to all emails in a timely manner, and I look forward to hearing from you. 
            <br></br>Thank you again for visiting my website!
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-control mt-6">
                <textarea
                  className="textarea textarea-warning"
                  placeholder="Enter your message here"
                  id="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning btn-outline" type="submit">
                  Contact Me
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
