import { SiWebpack, SiHtml5, SiTailwindcss, SiCss3, SiJavascript, SiReact } from "react-icons/si";

const About = () =>{
  return(
    <div className="grid grid-cols-1 lg:grid-cols-2 text-center p-6 bg-peach-100 border-b-2 border-black">
      <div>
        <p className="text-2xl p-5">About Me</p>
        <p>I am a self taught front-end developer based in The Netherlands. I enjoy solving real-world problems with clean and maintainable code.</p>
        <p className='hidden md:block'>My interest in web development started in early 2022. Since then, I have done quite a lot, including teaching myself web development and its best practices, building several fun and exciting projects, and finding easy-to-understand solutions.</p>
        <p className='hidden md:block'>Apart from that, I love spending time in nature, watching popular movies and playing some video games.</p>
      </div>
      <div>
        <p className="text-2xl p-5">Technologies</p>
        <div className='text-2xl grid grid-cols-3'>
          <p className="flex flex-col items-center text-lg"><SiHtml5 className="inline-block text-5xl"/> Html5</p>
          <p className="flex flex-col items-center text-lg"><SiCss3 className="inline-block text-5xl"/> CSS3</p>
          <p><SiJavascript className="inline-block"/> JavaScript (ES6)</p> 
          <p><SiReact className="inline-block"/> React</p>
          <p><SiTailwindcss className="inline-block"/>Tailwind</p>
          <p><SiWebpack className="inline-block"/>Webpack</p>
        </div>
        
      </div>
    </div>
  )
}

export default About