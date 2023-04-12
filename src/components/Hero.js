import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Hero = () => {
  return(
    <>
      <section className="border-y-2 min-h-screen flex justify-evenly p-11 items-center text-3xl md:text-4xl lg:text-5xl ">
        <div>
          <p className="pb-3">Hi, I'm Greta</p>
          <p className="font-semibold">Front-end developer</p>
          <span className='flex gap-4 mt-2'>
            <a href="https://github.com/GretaRa" target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/greta-rakauskaite/" target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            <button className='bg-peach-200 px-2 rounded-lg text-2xl'>Resume</button>
          </span>
          
        </div>
        <img className="lg:max-w-md max-w-xs max-h border-white border-4" src='https://i.imgur.com/VrRcVOe.png' alt="girl coding in a a coffee shop"/>
      </section>
    </>
  )
}

export default Hero

