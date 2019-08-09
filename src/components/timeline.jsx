import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Masters at Northeastern University <span>2018-present</span></h2>
                        <p>I am currently pursuing M.S. in CS here at Northeastern University, Boston. I have taken courses like Algorithms, Program Design Paradigms, Foundations of AI, Web Development, DBMS. I am currently serving as a Teaching Assistant for CS 3000 Algorithms and Data. I have also been a Teaching Assistant for CS 5200 DBMS taught by prof. Dr. John Rachlin.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Bachelors at VGEC <span>2014-2018</span></h2>
                        <p>I completed my undergraduate in Computer Engineering from Vishwakarma Government Engineering College, Ahmedabad. My CGPA score is 8.5 out of 10. I took subjects like Object Oriented Programming in Java, Analysis and Design of Algorithms, Software Engineering, Big Data Analytics, Mobile Computing etc.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Primary and Higher Education <span>2002-2014</span></h2>
                        <p>I have completed my higher secondary education with major subjects as Physics,Chemistry & Maths with 85% marks and secondary education with 91% marks. During my time at school, I have developed interest in solving complex mathematical problems which helped me to improve my understanding of any problem and also my mathematical skills to actually solve the problems. Apart from Maths, Science was my favorite subject.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
