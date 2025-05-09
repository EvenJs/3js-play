import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  // service_ulld4jk
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.sendForm(
        "service_ulld4jk",
        "template_1itjdw7",
        {
          from_name: form.name,
          to_name: "Johnson",
          from_email: form.email,
          message: form.message,
        },
        "G3Jg6A9b6TyJ_29Nq"
      );
      setIsLoading(false);

      alert("your message has been sent!");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      alert("something went wrong!");
    }
  };

  return (
    <section>
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-0"
        />
        <div className="contact-container">
          <h3 className="head-text"> Let's talk</h3>
          <p className="text-lg text-white-600">
            Whether you’re looking to build a new website, improve your existing
            platform, or bring a unique project to life, I’m here to help.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <input
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                row={5}
                className="field-input"
                placeholder="Hi, I wanna give you a job ..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={isLoading}>
              {isLoading ? "Sending ..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
