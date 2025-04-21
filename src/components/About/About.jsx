// Import necessary styles
import "./About.css";

/*I am currently in school at Mott Community College,
where I am learning to have a great foundation for programming. I am
also a student at TripleTen, an online code learning platform.
Through them I have gained an incredible amount of knowledge and
experience with React.js, Node.js, Express, MongoDB, and more. I am
currently working at Hurley Medical Center as a level 2 technician
where I handle any technical issues that get escalated.*/

const About = () => {
  return (
    <div>
      <div className="about">
        <header className="about__header">
          <h2 className="about__title">About Me</h2>
          <h3 className="about__subtitle">Who am I?</h3>
          <p className="about__text about__text_short">
            I am an Epic Analyst with a passion for programming. I am just
            finishing up my associates degree at Mott Community college. While
            being in school, I also completed a Software Developer Certificate
            at TripleTen, a coding bootcamp. Through both Mott and TripleTem, I
            have gained an incredible amount of knowledge and experience with
            React.js, Node.js, Express, MongoDB, and more. While juggling school
            and the bootcamp, I have been working at Hurley Medical Center for 4
            years now! I currently work as an Epic Analyst. Very recently I help
            the hospital deploy Rover, Epic's Mobile solution!
          </p>
        </header>
        <section className="about__skills-certifications">
          <div className="about__flex-container">
            <div className="about__card">
              <h3 className="about__subtitle about__subtitle_center">Skills</h3>
              <p className="about__text about__text_card">
                I am constantly learning new things and adding to my skillset.
                TripleTen has given me many skills and tools to add to my
                toolbox. Mott Community College has also given me a strong
                foundation for many programming languages and frameworks. Here
                is a list of the skills I have learned:
              </p>
              <div className="about__lists">
                <ul className="about__list">
                  <li className="about__list-item">HTML</li>
                  <li className="about__list-item">CSS</li>
                  <li className="about__list-item">JavaScript</li>
                  <li className="about__list-item">React.js</li>
                  <li className="about__list-item">Node.js</li>
                  <li className="about__list-item">Express</li>
                  <li className="about__list-item">MongoDB</li>
                </ul>
                <ul className="about__list">
                  <li className="about__list-item">PHP</li>
                  <li className="about__list-item">Apache</li>
                  <li className="about__list-item about__list-item_wrap">
                    Database Management
                  </li>
                  <li className="about__list-item">SQL / mySQL</li>
                  <li className="about__list-item">noSQL</li>
                </ul>
              </div>
            </div>
            <div className="about__card">
              <h3 className="about__subtitle about__subtitle_center">
                Certifications
              </h3>
              <p className="about__text about__text_card">
                During my educational journey at Mott Community College and
                TripleTen, I have earned quite a few certificates. I have also
                earned some while working as an Epic Analyst. Here is a list of
                the certifications I have earned:
              </p>
              <div className="about__lists">
                <ul className="about__list">
                  <p className="about__list-title">TripleTen</p>
                  <li className="about__list-item">
                    Certificate of Completion: Software Engineering Program
                  </li>
                  <p className="about__list-title">Mott Certificates</p>
                  <li className="about__list-item">
                    Computer Information Systems A.A.S.
                  </li>
                  <li className="about__list-item">
                    Computer Programming Certificate
                  </li>
                  <li className="about__list-item">
                    Web Developer Certificate
                  </li>
                </ul>
                <ul className="about__list">
                  <p className="about__list-title">Epic Certificates</p>
                  <li className="about__list-item">OpTime</li>
                  <li className="about__list-item">ASAP</li>
                  <li className="about__list-item">Cupid</li>
                  <p className="about__list-title">General Certificates</p>
                  <li className="about__list-item">
                    MTA: Software Development Fundamentals
                  </li>
                  <li className="about__list-item">CompTIA Network+</li>
                  <li className="about__list-item">CompTIA IT Fundamentals</li>
                  <li className="about__list-item">Google IT Support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="about__engagement">
          <h3 className="about__subtitle about__subtitle_center">
            Student Engagement
          </h3>
          <p className="about__text">
            On 10/18/23, I attended the Michigan Cyber Summit. This conference
            was to discuss the latest cybersecurity issues that are impacting
            businesses around the world, as well as upcoming trends and ideas
            when it comes to cybersecurity. There were also a bunch of major
            companies that showed up including: Cisco, Trace3 and a lot more.
            <br />I thought the event was very interesting with a lot of good
            information to take away. One of the more relatable topics that they
            talked about to me was the future of passwords. With a lot of cyber
            attacks being initiated with social engineering, switching to a
            passwordless world seems to be an interesting solution. <br />
            This event was super educational. I think it helped me grasp a lot
            of security terms from real world examples. Converting what you
            learn in class to real world events is when you can begin to use the
            knowledge that you gained.
          </p>
        </section>
        <section className="about__activities">
          <h3 className="about__subtitle">Activities</h3>
          <p className="about__text about__text_short about__text_align_right">
            I currently am not involved in any extracurricular activities.
            However, I do want and plan on being apart of some code jams in the
            future. Coding competitions seem like a great way to learn and grow
            as a developer.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
