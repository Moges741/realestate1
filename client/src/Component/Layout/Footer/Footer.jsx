import React, { useState } from 'react';
import { 
  BuildingOfficeIcon,
  UserGroupIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  PhoneIcon,
  BookOpenIcon,
  ShieldCheckIcon,
  CalendarIcon,
  MapPinIcon,
  EnvelopeIcon,
  CameraIcon,
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon,
  HeartIcon,
  HomeIcon
} from '@heroicons/react/24/outline';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const footerSections = [
    {
      title: "About",
      links: [
        { name: "Our Story", icon: <BuildingOfficeIcon className="link-icon" /> },
        { name: "Careers", icon: <UserGroupIcon className="link-icon" /> },
        { name: "Our Team", icon: <DocumentTextIcon className="link-icon" /> },
        { name: "Resources", icon: <BookOpenIcon className="link-icon" /> }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "FAQ", icon: <QuestionMarkCircleIcon className="link-icon" /> },
        { name: "Contact Us", icon: <PhoneIcon className="link-icon" /> },
        { name: "Help Center", icon: <BookOpenIcon className="link-icon" /> },
        { name: "Terms of Service", icon: <ShieldCheckIcon className="link-icon" /> }
      ]
    },
    {
      title: "Find Us",
      links: [
        { name: "Events", icon: <CalendarIcon className="link-icon" /> },
        { name: "Locations", icon: <MapPinIcon className="link-icon" /> }
      ]
    },
    {
      title: "Our Social",
      links: [
        { name: "Instagram", icon: <CameraIcon className="link-icon" />, emoji: "📷" },
        { name: "Facebook", icon: <ChatBubbleLeftRightIcon className="link-icon" />, emoji: "🐦" },
        { name: "Twitter (x)", icon: <PaperAirplaneIcon className="link-icon" />, emoji: "✉️" }
      ]
    }
  ];

  return (
    <footer className="dwello-footer">
      <div className="footer-container">
      

        {/* Middle Section - Links */}
        <div className="footer-middle">
          {footerSections.map((section) => (
            <div key={section.title} className="footer-column">
              <h3 className="column-title">{section.title}</h3>
              <ul className="footer-links">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a href="#" className="footer-link">
                      <span className="link-content">
                        
                        <span className="link-text">{link.name}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="copyright">
            © {new Date().getFullYear()} EM. All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <a href="#" className="bottom-link">Privacy Policy</a>
            <span className="divider">•</span>
            <a href="#" className="bottom-link">Terms of Use</a>
            <span className="divider">•</span>
            <a href="#" className="bottom-link">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;