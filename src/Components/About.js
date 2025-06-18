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
            <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start', maxWidth: '1200px', margin: '0 auto' }}>
              {/* Profile Picture Section */}
              <div style={{ flex: '0 0 350px' }}>
                <img
                  className="profile-pic"
                  src={profilepic}
                  alt={`${name} Profile Pic`}
                />
              </div>

              {/* Right Side Content */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                {/* About Me Section - Stylish */}
                <div style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '20px',
                  padding: '21px',
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
                      Software Engineer II at Sephora, with a Master's from UGA and 5+ years of experience building scalable full-stack web applications. I specialize in ReactJS, Node.js, Spring Boot, and cloud-native architectures.
                      I've independently launched AI tools, Chrome extensions, and productivity apps that are publicly used and actively maintained. Currently focused on designing modern microservices, migrating legacy WMS systems, and scaling internal tools — while continuing to ship my own real-world products on the side.
                    </p>
                  </div>
                </div>

                {/* Three Cards Section - Below About Me, Right Side */}
                <div style={{ 
                  display: 'flex', 
                  gap: '15px', 
                  justifyContent: 'space-between'
                }}>
                  
                  {/* Technical Tutor Card */}
                  <div style={{
                    background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
                    borderRadius: '16px',
                    padding: '20px',
                    flex: 1,
                    minHeight: '160px',
                    color: '#333',
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
                      top: '-20px',
                      right: '-20px',
                      width: '80px',
                      height: '80px',
                      background: 'rgba(255,255,255,0.1)',
                      borderRadius: '50%'
                    }}></div>
                    
                    <div style={{ position: 'relative', zIndex: 2 }}>
                      <div style={{ fontSize: '28px', marginBottom: '10px' }}>🎓</div>
                      <h3 style={{ 
                        fontSize: '16px', 
                        fontWeight: '700', 
                        marginBottom: '8px',
                        textShadow: '0 1px 2px rgba(255,255,255,0.3)',
                        color: '#333'
                      }}>
                        Technical Tutor
                      </h3>
                      <p style={{ 
                        fontSize: '12px', 
                        lineHeight: '1.4',
                        opacity: '0.9',
                        color: '#333'
                      }}>
                        Passionate about teaching complex topics in simple ways.
                      </p>
                    </div>
                  </div>

                  {/* Sports & Events Card */}
                  <div style={{
                    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                    borderRadius: '16px',
                    padding: '20px',
                    flex: 1,
                    minHeight: '160px',
                    color: '#333',
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
                      top: '-20px',
                      right: '-20px',
                      width: '80px',
                      height: '80px',
                      background: 'rgba(255,255,255,0.1)',
                      borderRadius: '50%'
                    }}></div>
                    
                    <div style={{ position: 'relative', zIndex: 2 }}>
                      <div style={{ fontSize: '28px', marginBottom: '10px' }}>🏸</div>
                      <h3 style={{ 
                        fontSize: '16px', 
                        fontWeight: '700', 
                        marginBottom: '8px',
                        textShadow: '0 1px 2px rgba(255,255,255,0.3)',
                        color: '#333'
                      }}>
                        Sports & Events
                      </h3>
                      <p style={{ 
                        fontSize: '12px', 
                        lineHeight: '1.4',
                        opacity: '0.9',
                        color: '#333'
                      }}>
                        Love sports and participating in events.
                      </p>
                    </div>
                  </div>

                  {/* Collaboration Card */}
                  <div style={{
                    background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
                    borderRadius: '16px',
                    padding: '20px',
                    flex: 1,
                    minHeight: '160px',
                    color: '#333',
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
                      top: '-20px',
                      right: '-20px',
                      width: '80px',
                      height: '80px',
                      background: 'rgba(255,255,255,0.1)',
                      borderRadius: '50%'
                    }}></div>
                    
                    <div style={{ position: 'relative', zIndex: 2 }}>
                      <div style={{ fontSize: '28px', marginBottom: '10px' }}>💡</div>
                      <h3 style={{ 
                        fontSize: '16px', 
                        fontWeight: '700', 
                        marginBottom: '8px',
                        textShadow: '0 1px 2px rgba(255,255,255,0.3)',
                        color: '#333'
                      }}>
                        Let's Collaborate
                      </h3>
                      <p style={{ 
                        fontSize: '12px', 
                        lineHeight: '1.4',
                        opacity: '0.9',
                        color: '#333'
                      }}>
                        Open to new ideas. Contact me at{' '}
                        <span style={{ 
                          fontWeight: '600', 
                          textDecoration: 'underline',
                          color: '#333'
                        }}>
                          venkateshmorpoju@gmail.com
                        </span>
                      </p>
                    </div>
                  </div>

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
