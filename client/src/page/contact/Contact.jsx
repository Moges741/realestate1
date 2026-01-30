import React, { useState } from 'react';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon,
  UserIcon,
  PaperAirplaneIcon,
  HomeIcon,
  BuildingOffice2Icon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would submit to your backend here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyType: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <PhoneIcon className="contact-icon" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      description: "Available 24/7 for urgent inquiries"
    },
    {
      icon: <EnvelopeIcon className="contact-icon" />,
      title: "Email Us",
      details: ["hello@dwello.com", "support@dwello.com"],
      description: "We respond within 24 hours"
    },
    {
      icon: <MapPinIcon className="contact-icon" />,
      title: "Visit Our Office",
      details: ["123 Real Estate Ave", "San Francisco, CA 94107"],
      description: "Mon-Fri: 9AM-6PM"
    },
    {
      icon: <ClockIcon className="contact-icon" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM"],
      description: "Sunday: Appointment Only"
    }
  ];

  const propertyTypes = [
    "Select Property Type",
    "Single Family Home",
    "Apartment/Condo",
    "Townhouse",
    "Luxury Estate",
    "Commercial Property",
    "Land/Plot",
    "Other"
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="hero-overlay">
          <h1 className="hero-title">Get In Touch With Us</h1>
          <p className="hero-subtitle">
            Ready to find your dream home? Our dedicated team is here to guide you through every step of your real estate journey.
          </p>
        </div>
      </div>

      <div className="contact-container">
        {/* Main Content */}
        <div className="contact-content">
          {/* Contact Form Section */}
          <div className="contact-form-section">
            <div className="form-header">
              <h2 className="form-title">Send Us a Message</h2>
              <p className="form-description">
                Fill out the form below and one of our real estate specialists will contact you shortly.
              </p>
            </div>

            {isSubmitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">
                      <UserIcon className="label-icon" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Moges Sisay"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <EnvelopeIcon className="label-icon" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="moges@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">
                      <PhoneIcon className="label-icon" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <HomeIcon className="label-icon" />
                      Property Type
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="form-input"
                    >
                      {propertyTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <ChatBubbleLeftRightIcon className="label-icon" />
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Tell us about your real estate needs, preferred locations, budget, timeline, and any specific requirements..."
                    rows="6"
                    required
                  />
                </div>

                <div className="form-footer">
                  <button type="submit" className="submit-btn">
                    <PaperAirplaneIcon className="btn-icon" />
                    Send Message
                  </button>
                  <p className="form-note">* Required fields</p>
                </div>
              </form>
            )}
          </div>

          {/* Contact Info Section */}
          <div className="contact-info-section">
            <div className="info-header">
              <BuildingOffice2Icon className="info-header-icon" />
              <h2 className="info-title">Contact Information</h2>
              <p className="info-subtitle">
                Multiple ways to reach our real estate experts
              </p>
            </div>

            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-card">
                  <div className="info-icon-wrapper">
                    {info.icon}
                  </div>
                  <h3 className="info-card-title">{info.title}</h3>
                  <div className="info-details">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="info-detail">{detail}</p>
                    ))}
                  </div>
                  <p className="info-description">{info.description}</p>
                </div>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="emergency-contact">
              <div className="emergency-icon">!</div>
              <div className="emergency-content">
                <h3 className="emergency-title">Urgent Inquiries</h3>
                <p className="emergency-text">
                  Need immediate assistance with a property? Call our emergency line:
                  <strong> +1 (555) 911-REAL</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map/CTA Section */}
        <div className="map-cta-section">
          <div className="cta-card">
            <h2 className="cta-title">Schedule a Free Consultation</h2>
            <p className="cta-text">
              Book a personalized meeting with one of our real estate experts to discuss your specific needs.
            </p>
            <button className="cta-btn">
              {/* <CalendarIcon className="cta-icon" /> */}
              Schedule Now
            </button>
          </div>

          <div className="map-placeholder">
            <div className="map-overlay">
              <h3 className="map-title">Visit Our Office</h3>
              <p className="map-text">
                EM Real Estate <br />
                JIMMA, ETHIOPIA
              </p>
              <button className="map-btn">
                <MapPinIcon className="map-btn-icon" />
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;