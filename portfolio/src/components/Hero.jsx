function Hero() {
  return (
    <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 py-24 gap-12">

      {/* Left */}
      <div className="max-w-xl">

        <p className="text-cyan-400 text-lg mb-4">
          Hello, I'm
        </p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          MD. MOON RAHMAN NAYEM
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
          MERN Stack Developer & Data Science Enthusiast
        </h2>

        <p className="text-gray-500 mb-8 leading-8">
          Passionate about building modern web applications,
          AI systems, and scalable digital experiences.
        </p>

        <div className="flex gap-4">

          <button className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition">
            View Projects
          </button>

          <button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition">
            Download CV
          </button>

        </div>

      </div>

      {/* Right */}
      <div className="flex justify-center">

        <div className="w-72 h-72 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1">

          <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-6xl font-bold">
            <img></img>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero