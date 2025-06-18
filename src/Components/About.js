import React, { Component } from "react";
import Fade from "react-reveal";
import './About.css';

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const { name, image, bio, about } = this.props.data;
    const profilepic = "images/" + image;

    return (
      <section id="about">
        <div className="about-wrapper">
          <Fade duration={1000}>
            <div className="row">
              {/* Profile Picture Section */}
              <div className="profile-pic-container">
                <img
                  className="profile-pic"
                  src={profilepic}
                  alt={`${name} Profile Pic`}
                />
              </div>

              {/* About Me Section - Now Stylish */}
              <div className="about-content">
                <div style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '20px',
                  padding: '30px',
                  color: 'white',
                  boxShadow: '0 15px 35px rgba(102, 126, 234, 0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Background decoration */}
                  <div style={{
                    position: 'absolute',
                    top: '-50px',
                    right: '-50px',
                    width: '150px',
                    height: '150px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%'
                  }}></div>
                  
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <h3 style={{ 
                      fontSize: '28px', 
                      fontWeight: '700', 
                      marginBottom: '20px',
                      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                      color: 'white'
                    }}>
                      About Me
                    </h3>
                    <p style={{ 
                      color: 'white', 
                      fontSize: '16px', 
                      lineHeight: '1.6',
                      opacity: '0.95'
                    }}>
                      Full Stack Developer with expertise in ReactJS, Spring Boot, and MongoDB. 
                      Currently contributing to projects at Sephora, with experience at UGA and Quanteon Solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylish Cards Section - Below About Me */}
            <div style={{ 
              display: 'flex', 
              gap: '20px', 
              marginTop: '50px', // Increased spacing from About Me section
              justifyContent: 'center',
              flexWrap: 'nowrap',
              maxWidth: '1000px',
              margin: '50px auto 0 auto'
            }}>
              
              {/* Technical Tutor Card */}
              <div style={{
                background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
                borderRadius: '16px',
                padding: '25px',
                width: '300px',
                minHeight: '180px',
                color: '#333', // Changed to dark text
                boxShadow: '0 10px 30px rgba(255, 154, 158, 0.3)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 154, 158, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 154, 158, 0.3)';
              }}>
                {/* Background decoration */}
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '100px',
                  height: '100px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%'
                }}></div>
                
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>🎓</div>
                  <h3 style={{ 
                    fontSize: '18px', 
                    fontWeight: '700', 
                    marginBottom: '10px',
                    textShadow: '0 1px 2px rgba(255,255,255,0.3)',
                    color: '#333' // Changed to dark text
                  }}>
                    Technical Tutor
                  </h3>
                  <p style={{ 
                    fontSize: '14px', 
                    lineHeight: '1.4',
                    opacity: '0.9',
                    color: '#333' // Changed to dark text
                  }}>
                    Passionate about teaching complex topics in simple, understandable ways to help students succeed.
                  </p>
                </div>
              </div>

              {/* Sports & Events Card */}
              <div style={{
                background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                borderRadius: '16px',
                padding: '25px',
                width: '300px',
                minHeight: '180px',
                color: '#333', // Changed to dark text
                boxShadow: '0 10px 30px rgba(168, 237, 234, 0.3)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(168, 237, 234, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(168, 237, 234, 0.3)';
              }}>
                {/* Background decoration */}
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '100px',
                  height: '100px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%'
                }}></div>
                
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>⚽</div>
                  <h3 style={{ 
                    fontSize: '18px', 
                    fontWeight: '700', 
                    marginBottom: '10px',
                    textShadow: '0 1px 2px rgba(255,255,255,0.3)',
                    color: '#333' // Changed to dark text
                  }}>
                    Sports & Events
                  </h3>
                  <p style={{ 
                    fontSize: '14px', 
                    lineHeight: '1.4',
                    opacity: '0.9',
                    color: '#333' // Changed to dark text
                  }}>
                    Love playing sports and participating in events. Always open to new activities and collaborations.
                  </p>
                </div>
              </div>

              {/* Collaboration Card */}
              <div style={{
                background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
                borderRadius: '16px',
                padding: '25px',
                width: '300px',
                minHeight: '180px',
                color: '#333', // Changed to dark text
                boxShadow: '0 10px 30px rgba(255, 236, 210, 0.3)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 236, 210, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 236, 210, 0.3)';
              }}>
                {/* Background decoration */}
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '100px',
                  height: '100px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%'
                }}></div>
                
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>💡</div>
                  <h3 style={{ 
                    fontSize: '18px', 
                    fontWeight: '700', 
                    marginBottom: '10px',
                    textShadow: '0 1px 2px rgba(255,255,255,0.3)',
                    color: '#333' // Changed to dark text
                  }}>
                    Let's Collaborate
                  </h3>
                  <p style={{ 
                    fontSize: '14px', 
                    lineHeight: '1.4',
                    opacity: '0.9',
                    color: '#333' // Changed to dark text
                  }}>
                    Open to new ideas and partnerships. Contact me at{' '}
                    <span style={{ 
                      fontWeight: '600', 
                      textDecoration: 'underline',
                      color: '#333' // Changed to dark text
                    }}>
                      venkateshmorpoju@gmail.com
                    </span>
                  </p>
                </div>
              </div>

            </div>

          </Fade>
        </div>
      </section>
    );
  }
}

export default About;
