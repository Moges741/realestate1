import React from 'react';
import { 
  AcademicCapIcon, 
  UserGroupIcon, 
  ShieldCheckIcon, 
  ChatBubbleLeftRightIcon 
} from '@heroicons/react/24/outline';
import './ChooseUs.css';

const ChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Expert Guidance",
      description: "Benefit from our team's seasoned expertise for a smooth buying experience",
      icon: AcademicCapIcon,
      color: "#3b82f6"
    },
    {
      id: 2,
      title: "Personalized Service",
      description: "Our services adapt to your unique needs, making your journey stress-free",
      icon: UserGroupIcon,
      color: "#10b981"
    },
    {
      id: 3,
      title: "Transparent Process",
      description: "Stay informed with our clear and honest approach to buying your home",
      icon: ShieldCheckIcon,
      color: "#8b5cf6"
    },
    {
      id: 4,
      title: "Exceptional Support",
      description: "Providing peace of mind with our responsive and attentive customer service",
      icon: ChatBubbleLeftRightIcon,
      color: "#f59e0b"
    }
  ];

  return (
    <div className="home-experience-container">
      <div className="experience-header">
        <h1 className="main-title">
          Elevating Your Home Buying Experience with Expertise, Integrity, and Unmatched Personalized Service
        </h1>
        <div className="title-decoration">
          <div className="decoration-line"></div>
          <div className="decoration-dot"></div>
          <div className="decoration-line"></div>
        </div>
      </div>
      
      <div className="features-grid">
        {features.map(feature => {
          const IconComponent = feature.icon;
          return (
            <div key={feature.id} className="feature-card">
              <div 
                className="feature-icon-container"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <IconComponent 
                  className="feature-icon" 
                  style={{ color: feature.color }}
                />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-hover-line" style={{ backgroundColor: feature.color }}></div>
            </div>
          );
        })}
      </div>
      
      <div className="experience-footer">
        <p className="footer-text">
          Every step of your home buying journey is handled with care and professionalism by our dedicated team.
        </p>
      </div>
    </div>
  );
};

export default ChooseUs;