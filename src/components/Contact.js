import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message logged simulation.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" style={{ scrollMarginTop: "100px" }}>
      <h2 className="section-title">Contact Us</h2>
      <div className="contact-section">
        <div className="contact-info">
          <h3>Connect With Us</h3>
          <p>
            Have structural alignment inquiries or partnership briefs? Reach out
            to the UTS parent corporate relationship unit directly.
          </p>
          <a
            href="mailto:enquiry@univisiontechsolutions.com"
            className="info-link"
          >
            &#9993; enquiry@univisiontechsolutions.com
          </a>
          
          <p style={{ marginTop: "2.5rem", fontSize: "0.88rem", lineHeight: "1.6" }}>
            <strong>Office Address:</strong>
            <br />
            #1192, 2nd Floor, Sandeep Arcade,
            <br />
            5th Main Cross Rd, 7th Sector, HSR Layout,
            <br />
            Bangalore - 560102
          </p>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="grid-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Business Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group full-width">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group full-width">
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Proposal / Message Body"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <button type="submit" className="submit-btn">
              Transmit Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
