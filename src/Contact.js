import "../src/Component/Style.css";
import React from "react";

const Contact = () => {
  const validateForm = (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (name === "" || email === "") {
      alert("Please enter your name and email");
      return false;
    }

    // Xử lý gửi tin nhắn khi dữ liệu hợp lệ
    alert("Message sent successfully!");

    // Reset form sau khi gửi tin nhắn
    nameInput.value = "";
    emailInput.value = "";
    document.getElementById("message").value = "";
  };

  return (
    <>
      <div className="container">
        <div className="main-content-right">
          <p className="title-main">Contact</p>
          <h1 className="title-main-contact">Contact</h1>
          <span className="sayings">
            I would love to hear from the company about my CV. However, I
            noticed that my CV still has many flaws. I hope you can help me
            improve my CV to increase my chances of getting a positive response.
          </span>
          <form className="contact-form">
            <div className="ip-name">
              <label htmlFor="name" className="name-input">
                Name
              </label>
              <input type="text" id="name" className="input-name" />
            </div>
            <div className="ip-email" id="email-ip-contact">
              <label htmlFor="email" className="name-input">
                Email
              </label>
              <input type="email" id="email" className="input-email" />
            </div>
            <div className="text-contact-content">
              <label htmlFor="message" className="name-input">
                Message
              </label>
              <textarea id="message" className="textarea"></textarea>
            </div>
            <button
              type="submit"
              className="sent-contact"
              onClick={validateForm}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
