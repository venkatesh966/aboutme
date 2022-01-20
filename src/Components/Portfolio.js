import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    if (!this.props.data) return null;
    // return null
    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="articles" >
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1 style={{fontSize: 20, color: 'green'}}>Check Out my latest article</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
                style={{background: 'black', padding: 20}}
              >
                <h1 style={{marginBottom: 15}}>Days To Remember (College Life)</h1>
                <p style={{color: 'white'}}>As we take the first step to our journey, its like you have entered the land to ecstacy. All that you have ever heard about college life is going to come true. The tiring school days are over and its a new phase, the best phase of life.<br></br>

Fast forward to a few days and the bubble has been broken by number of schedules for various assignments and nearing exams. You don't have time for all those experiences, its so hard to keep track of all that is going on. Initially you used to discuss and share this with your school time best friend but slowly you loose touch due to busy schedules. Life could'nt be more miserable, this is vicious. But then you find someone, to share these preposterous experiences. This is someone who doesn't just listen but experiences all those things with you. You connect instantly. And within no time, you have a gang. A college gang! Really! And you are a part of it! This is perfect!
<br></br>
Time flies during good times and you are in your final year, at 2 am sitting in your dorm room with your friends turned family you reminiscent the best days of your life. A realization, that yeah actually, all those things that you heard about college life, are true. Infact, reality is better!</p>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
