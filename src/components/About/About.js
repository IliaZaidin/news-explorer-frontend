import './About.css';

function About() {

  return (
    <div className="about">
      <span className="about__wrapper">
        <span className='about__avatar'></span>
        <span className='about__text-wrapper'>
          <h2 className='about__title'>About the author</h2>
          <p className='about__subtitle'>This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know.</p>
          <p className='about__subtitle'>You can also talk about your experience with Practicum, what you learned there, and how you can help potential customers.</p>
        </span>
      </span>
    </div>
  )
}

export default About;
