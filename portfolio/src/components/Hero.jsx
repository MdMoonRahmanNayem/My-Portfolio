import profile from "../assets/my image.jpg"

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa"

function Hero() {
  return (

    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 py-24 gap-16"
    >

      {/* Left */}
      <div className="max-w-2xl">

        <p className="text-cyan-400 text-xl mb-5 font-medium">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
          MD. MOON <br />
          RAHMAN NAYEM
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold">
          MERN Stack Developer & Data Science Enthusiast
        </h2>

        {/* Buttons */}
        <div className="flex flex-wrap gap-5">

          <a
            href="#projects"
            className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold hover:bg-cyan-300 transition duration-300 shadow-lg shadow-cyan-400/20"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-2xl font-bold hover:bg-cyan-400 hover:text-black transition duration-300"
          >
            Download CV
          </a>

        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6 mt-10">

          <a
            href="https://github.com/MdMoonRahmanNayem"
            target="_blank"
            rel="noreferrer"
            className="text-3xl text-gray-400 hover:text-white hover:-translate-y-1 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/md-moon-rahman-nayem"
            target="_blank"
            rel="noreferrer"
            className="text-3xl text-blue-400 hover:-translate-y-1 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:mmrn3182@gmail.com"
            className="text-3xl text-red-400 hover:-translate-y-1 transition duration-300"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>

      {/* Right */}
      <div className="flex justify-center relative">

        {/* Glow Effect */}
        <div className="absolute w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full"></div>

        {/* Profile */}
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1">

          <div className="w-full h-full rounded-full overflow-hidden bg-black">

            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover object-top"
            />

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero