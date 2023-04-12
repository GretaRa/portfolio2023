const Projects = () =>{
  return(
    <div className=" grid grid-cols-1">
      <p className="text-2xl p-5 text-center">Projects</p>
      <div className="border-2 flex flex-col gap-12 md:flex-row">
        <img className="lg:max-w-lg max-w-xs overflow-clip border-white border-4" src='https://i.imgur.com/VrRcVOe.png' alt="girl coding in a a coffee shop"/>
        <div>
          <p>Title</p>
          <p>Description DescriptionDescription Description Descriptionv Description Description</p>
          <div>
            <a href="">Code</a> 
            <a href="">Live demo</a>
          </div>
        </div>
        
        
      </div>
      <div className="border-2">
        <img className="lg:max-w-md max-w-xs max-h border-white border-4" src='https://i.imgur.com/VrRcVOe.png' alt="girl coding in a a coffee shop"/>
        <p>Title</p>
        <p>Description DescriptionDescription Description Descriptionv Description Description</p>
      </div>
      <div className="border-2">
        <img className="lg:max-w-md max-w-xs max-h border-white border-4" src='https://i.imgur.com/VrRcVOe.png' alt="girl coding in a a coffee shop"/>
        <p>Title</p>
        <p>Description DescriptionDescription Description Descriptionv Description Description</p>
      </div>
    </div>
  )
}

export default Projects