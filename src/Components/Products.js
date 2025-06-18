/* eslint-disable */
import React, { Component } from "react";
import Fade from "react-reveal";

class Products extends Component {
  render() {
    const products = [
      {
        id: 0,
        icon: "🤖",
        title: "GIT SENSE AI",
        description: "An AI-powered tool that turns GitHub repos into structured, self-guided learning tutorials.",
        achievement: "Publicly available and currently being explored at Sephora to improve onboarding",
        gradient: "linear-gradient(145deg, #f093fb 0%, #f5576c 100%)",
        achievementIcon: "⚡",
        link: "https://gitsenseai.com",
        buttonText: "Try Now"
      },
      {
        id: 1,
        icon: "🌉",
        title: "NO BRIDGE",
        description: "Peer-to-peer Chrome extension using WebRTC for instant file sharing, chat, and audio calls — no login or server.",
        achievement: "Successfully used by 25+ users in the first month for secure real-time collaboration",
        gradient: "linear-gradient(145deg, #4facfe 0%, #00f2fe 100%)",
        achievementIcon: "🚀",
        link: "https://chromewebstore.google.com/detail/nobridge-%E2%80%93-browser-to-bro/nbakmpdmadihdiojlcdcbbafoagjbdee?authuser=0&hl=en&ref=producthunt",
        buttonText: "Install Extension"
      },
      {
        id: 2,
        icon: "📊",
        title: "SIMPLE TRACKER",
        description: "Personal productivity system with login, dashboards, reminders, and workspace planning.",
        achievement: "Built to streamline productivity, goal tracking; actively used and open to public users",
        gradient: "linear-gradient(145deg, #11998e 0%, #38ef7d 100%)",
        achievementIcon: "💪",
        link: "https://smpprgtrack.online/",
        buttonText: "Try Now"
      }
    ];

    return (
      <section id="products" style={{ 
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', 
        padding: '40px 0 30px 0',
        position: 'relative'
      }}>
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns">
              {/* Header Section */}
              <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                <div style={{ 
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  padding: '12px 25px',
                  borderRadius: '50px',
                  marginBottom: '10px',
                  boxShadow: '0 8px 25px rgba(102, 126, 234, 0.25)'
                }}>
                  <h1 style={{ 
                    fontSize: '26px',
                    color: 'white', 
                    marginBottom: '0',
                    fontWeight: '700'
                  }}>
                    🚀 Products I Designed, Built & Maintain
                  </h1>
                </div>
                <p style={{ 
                  fontSize: '14px',
                  color: '#666', 
                  maxWidth: '600px', 
                  margin: '0 auto',
                  lineHeight: '1.3'
                }}>
                  Innovative solutions that solve real problems and create value for users
                </p>
              </div>

              {/* Products Grid - All in One Row */}
              <div style={{ 
                display: 'flex', 
                gap: '8px',
                justifyContent: 'center',
                alignItems: 'stretch',
                flexWrap: 'nowrap',
                maxWidth: '950px',
                margin: '0 auto'
              }}>
                
                {products.map((product, index) => (
                  <div 
                    key={index}
                    style={{
                      background: product.gradient,
                      borderRadius: '14px',
                                              padding: '20px',
                      width: '300px',
                                              height: '380px',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.12)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.2)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.12)';
                    }}
                  >
                    {/* Background decoration */}
                    <div style={{
                      position: 'absolute',
                      top: '-30px',
                      right: '-30px',
                      width: '100px',
                      height: '100px',
                      background: 'rgba(255,255,255,0.08)',
                      borderRadius: '50%',
                      zIndex: 1
                    }}></div>
                    
                    <div style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div> 
                                                  <div style={{ fontSize: '32px', marginBottom: '8px' }}>{product.icon}</div>
                                                  <h3 style={{ 
                            fontSize: '20px',
                            fontWeight: '800', 
                            marginBottom: '10px',
                            color: '#fff',
                            letterSpacing: '0.5px',
                            textShadow: '0 2px 4px rgba(0,0,0,0.3)' // Added text shadow for better contrast
                          }}>
                          {product.title}
                        </h3>
                                                  <p style={{ 
                            fontSize: '14px',
                            lineHeight: '1.4',
                            color: 'rgba(255,255,255,0.9)',
                            marginBottom: '4px'
                          }}>
                            {product.description}
                          </p>
                      </div>
                      
                      {/* Call-to-Action Button */}
                      <div style={{ 
                        marginBottom: '8px',
                        textAlign: 'center'
                      }}>
                        <a 
                          href={product.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-block',
                            background: 'rgba(255,255,255,0.9)',
                            color: '#333',
                                                          padding: '10px 20px',
                              borderRadius: '25px',
                              fontSize: '14px',
                            fontWeight: '600',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.background = 'white';
                            e.currentTarget.style.transform = 'translateY(-1px)';
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.12)';
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.9)';
                            e.currentTarget.style.transform = 'translateY(0px)';
                            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
                          }}
                        >
                          {product.buttonText} →
                        </a>
                      </div>
                    </div>
                    
                                            {/* Achievement Badge - Readable Font Size */}
                        <div style={{ 
                          background: 'rgba(255,255,255,0.15)',
                          padding: '12px',
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: '500',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255,255,255,0.2)',
                          position: 'relative',
                          zIndex: 2,
                          minHeight: '45px',
                          display: 'flex',
                          alignItems: 'center',
                          color: '#fff'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ fontSize: '14px', marginRight: '6px' }}>{product.achievementIcon}</span>
                            <span>{product.achievement}</span>
                          </div>
                        </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Products; 