import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const mailtoLink = `mailto:santhoshn315com??body=${message}`;
    window.location.href = mailtoLink;
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 w-[98vw] justify-center">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl  text-center text-[#ffbb00]">Contact Me</h1>
            <p className="py-10 font-mono">
              <br></br>
              Thank you for visiting my website!<br></br>
              <br></br>If you have any questions or would like to get in touch,
              please feel free to send me an email. I am always open to new
              opportunities and collaborations, and I would love to hear from
              you.Whether you have a project in mind or just want to connect, I
              am happy to chat.I will do my best to respond to all emails in a
              timely manner, and I look forward to hearing from you.Thank you
              again for visiting my website!
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
    </div>
  );
};

export default Contact;
