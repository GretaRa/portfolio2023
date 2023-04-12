import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faSquareJs, faHtml5, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () =>{
  return(
    <div className="grid grid-cols-2 text-center p-6 bg-peach-100 border-b-2">
      <div>
        <p className="text-2xl p-5">About Me</p>
        <p>I am a self taught front-end developer based in The Netherlands. I enjoy solving real-world problems with clean and maintainable code.</p>
        <p>My interest in web development started in early 2022. Since then, I have done quite a lot, including teaching myself web development and its best practices, building several fun and exciting projects, and finding easy-to-understand solutions.</p>
        <p>Apart from that, I love spending time in nature, watching popular movies and playing some video games.</p>
      </div>
      <div>
        <p className="text-2xl p-5">Technologies</p>
        <div className='text-2xl'>
          <p><FontAwesomeIcon icon={faHtml5} /> Html5</p>
          <p><FontAwesomeIcon icon={faCss3Alt} /> CSS3</p>
          <p><FontAwesomeIcon icon={faSquareJs} /> JavaScript (ES6)</p> 
          <p><FontAwesomeIcon icon={faReact} /> React</p>
          <p>Webpack</p>
        </div>
        
      </div>
    </div>
  )
}

export default About