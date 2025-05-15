/* eslint-disable */
import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

// Modal styles (can be moved to a CSS file)
const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  overflow: 'auto' // Add this to enable scrolling if content overflows
};

const modalContentStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  textAlign: 'center',
  maxWidth: '800px',
  width: '90%',
  maxHeight: '90vh',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative'
};

const videoStyle = {
  maxWidth: '100%', // Make video responsive
  maxHeight: 'calc(90vh - 120px)', // Adjust based on padding and button/link height
  marginBottom: '15px'
};

const closeButtonStyle = {
  position: 'absolute',
  top: '15px',
  right: '15px',
  background: '#333',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  width: '30px',
  height: '30px',
  fontSize: '16px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: '30px'
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNoBridgeModal: false,
    };
    this.openNoBridgeModal = this.openNoBridgeModal.bind(this);
    this.closeNoBridgeModal = this.closeNoBridgeModal.bind(this);
  }

  openNoBridgeModal() {
    this.setState({ showNoBridgeModal: true });
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeNoBridgeModal() {
    this.setState({ showNoBridgeModal: false });
    document.body.style.overflow = 'auto'; // Restore background scrolling
  }

  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>

            {/* <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li> */}
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>

            {/* New Button for NoBridge Project */}
            <Fade bottom duration={1600}>
              <div style={{ margin: '25px 0' }}>
                <button
                  onClick={this.openNoBridgeModal}
                  className="button btn"
                  style={{
                    background: '#FF6F00',
                    color: 'white',
                    padding: '12px 28px',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    border: 'none',
                    borderRadius: '50px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    cursor: 'pointer',
                    transition: 'background 0.3s ease, transform 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#FF8F00';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = '#FF6F00';
                    e.currentTarget.style.transform = 'translateY(0px)';
                  }}
                >
                  <i className="fa fa-rocket" style={{ marginRight: '10px' }}></i>
                  checkout my new project <span style={{ color: '#FFFFE0', fontWeight: '900' }}>NoBridge</span>
                </button>
              </div>
            </Fade>

            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a
                  href={project}
                  className="button btn project-btn"
                  target="_blank"
                >
                  <i className="fa fa-book"></i> LinkedIn
                </a>
                <a
                  href={github}
                  className="button btn github-btn"
                  style={{ marginRight: "25px" }}
                  target="_blank"
                >
                  <i className="fa fa-github"></i> Github
                </a>
                <a
                  href="https://www.npmjs.com/~venkatesh966"
                  className="button btn open-source-btn"
                  target="_blank"
                >
                  <i className="fa fa-cogs"></i> Open Source
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>

        {/* NoBridge Modal */}
        {this.state.showNoBridgeModal && (
          <div style={modalStyle} onClick={this.closeNoBridgeModal}>
            <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
              <button style={closeButtonStyle} onClick={this.closeNoBridgeModal}>&times;</button>
              <h3 style={{ marginTop: '0', marginBottom: '15px' }}>NoBridge Demo</h3>
              <video style={videoStyle} controls autoPlay muted loop>
                <source src="/NoBridge-Demo.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p>
                <a href="https://www.producthunt.com/posts/nobridge" target="_blank" rel="noopener noreferrer" className="button btn" style={{ background: '#DA552F', color: 'white' }}>
                  View NoBridge on Product Hunt
                </a>
              </p>
            </div>
          </div>
        )}
      </header>
    );
  }
}

export default Header;
