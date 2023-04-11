

const Hero = (source) => {
  return(
    <>
      <section className="bg-[#fcd19c] flex justify-evenly p-11 items-center text-3xl md:text-4xl lg:text-5xl ">
        <div>
          <p className="pb-3">Hi, I'm Greta</p>
          <p className="font-semibold">Front-end developer</p>
        </div>
        <img className="lg:max-w-md max-w-xs max-h border-white border-4" src='https://i.imgur.com/VrRcVOe.png' alt="girl coding in a a coffee shop"/>
      </section>
    </>
  )
}

export default Hero

