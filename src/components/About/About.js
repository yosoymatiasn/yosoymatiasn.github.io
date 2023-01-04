import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { photo, name, resume, social } = about

  return (
    <div className='about center'>
      {photo && <img height='400px' alt='Avatar placeholder' src={photo} />}
      {name && (
        <h1>
          Hi, I&rsquo;m <span className='about__name'>Matias Agnese.</span>
        </h1>
      )}
      <h2 className='about__role'>A Frontend developer in NYC.</h2>
      <p className='about__desc'>
        <strong>A bit about me:</strong> Up until July of 2021 I lived in Fort
        Lauderdale, FL, where I graduated from Florida International University
        with a B.S. in Computer Science. After graduating, believe it or not, I
        decided to move to NYC to pursue a career as an actor. Low and behold:
        this is not the easiest city! After some cool opportunities and many
        (many!) lessons, I decided to circle back and pursue a career as a
        software developer. Also, I&rsquo;m half Argentinia. 2022 had a great
        ending!
      </p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} target='_blank' rel='noreferrer noopener'>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                target='_blank'
                rel='noreferrer noopener'
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                target='_blank'
                rel='noreferrer noopener'
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
