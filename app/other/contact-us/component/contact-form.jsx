"use client";
import React, {useState, useEffect} from "react";
import {submitContactForm} from "@/services/contactService";
import {toast} from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // State to control form submission
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to handle input changes
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  useEffect(() => {
    const submitFormData = async () => {
      try {
        const response = await submitContactForm(formData);
        console.log("Response from contact form:", response);
        if (response.error) {
          toast.error("Failed to send message. Please try again.");
        } else {
          toast.success("Message sent successfully!");
          setFormData({name: "", email: "", phone: "", subject: "", message: ""});
        }
      } catch (error) {
        console.error("Error submitting form", error);
        toast.error("Failed to send message. Please try again.");
      } finally {
        setIsSubmitted(false);
      }
    };

    if (isSubmitted) {
      submitFormData();
    }
  }, [isSubmitted, formData]);

  return (
    <div className="field-form">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="mb-3 col-md-6">
            <input
              required
              placeholder="Enter Name *"
              id="first-name"
              className="form-control"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 col-md-6">
            <input
              required
              placeholder="Enter Email *"
              id="email"
              className="form-control"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 col-md-6">
            <input
              required
              placeholder="Enter Phone No. *"
              id="phone"
              className="form-control"
              name="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 col-md-6">
            <input
              placeholder="Enter Subject"
              id="subject"
              className="form-control"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 col-md-12">
            <textarea
              required
              placeholder="Message *"
              id="description"
              className="form-control"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-12">
            <button
              type="submit"
              title="Submit Your Message!"
              className="btn btn-gradient rounded-1"
              id="submitButton"
              name="submit"
              value="Submit"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
