import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl  text-center text-secondary">
              Contact Me!
            </h1>
            <p className="py-10">
              <br></br>
              Thank you for visiting my website!<br></br>
              <br></br>If you have any questions or would like to get in touch,
              please feel free to send me an email . I am always open to new
              opportunities and collaborations, and I would love to hear from
              you. Whether you have a project in mind or just want to connect, I
              am happy to chat. I will do my best to respond to all emails in a
              timely manner, and I look forward to hearing from you. Thank you
              again for visiting my website!
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered textarea-warning"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  className="textarea textarea-warning"
                  placeholder="Enter your message here"
                >
                  Message
                </textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-secondary btn-outline">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
