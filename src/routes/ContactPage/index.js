import React from "react";

export const ContactPage = () => {
  return (
    <main className="contact-page" aria-label="Contact Page">
      {/* Hero */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Reach out to us via phone, email, or visit us at our location.
        </p>
      </section>

      {/* Contact Info */}
      <section className="contact-info">
        <div className="contact-item">
          <h2>Phone</h2>
          <a href="tel:+91987654321099" aria-label="Call Little Lemon">
            📞 +91 98765 4321099
          </a>
        </div>

        <div className="contact-item">
          <h2>Email</h2>
          <a href="mailto:info@littlelemon.com" aria-label="Email Little Lemon">
            ✉ info@littlelemon.com
          </a>
        </div>

        <div className="contact-item">
          <h2>Address</h2>
          <address>
            123 Lemon Street,<br />
            New Delhi, India
          </address>
        </div>
      </section>
    </main>
  );
};
