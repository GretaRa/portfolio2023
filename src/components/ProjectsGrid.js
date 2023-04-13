import Project from "./Project"


const ProjectsGrid = () =>{
  return(
    <div>
      <p className="text-2xl p-5 text-center">Projects</p>
      <div className=" grid grid-cols-1 gap-10 m-5">
      <Project />
      <Project thing='lg:flex-row-reverse'/>
      <Project/>
    </div>
    </div>
    
  )
}

export default ProjectsGrid