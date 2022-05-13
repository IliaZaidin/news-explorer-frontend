import './About.css';

function About() {

  return (
    <div className="about">
      <div className="about__wrapper">
        <div className='about__avatar'></div>
        <div className='about__text-wrapper'>
          <h2 className='about__title'>About the author</h2>
          <p className='about__subtitle'>
            Hello everybody. My name is Ilia. This page is one of the projects on my way to becoming a Web Developer.
            Almost a year ago, I decided to make a change in my life. That required of me to step out of my comfort
            zone and to work really hard to pursue my dream. The road was hard. Several times along the way I
            considered quitting, but finally I successfully completed the Web Development Training Program by Yandex.
            During the course I studied the following technologies: HTML, CSS, JavaScript, React.JS, Node.JS and much more.
            Now I am looking forward to starting my new career.
          </p>
          {/* <p className='about__subtitle'></p> */}
        </div>
      </div>
    </div>
  )
}

export default About;
