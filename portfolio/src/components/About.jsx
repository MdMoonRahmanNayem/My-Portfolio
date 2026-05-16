function About() {
  return (

    <section
      id="about"
      data-aos="fade-up"
      className="px-8 md:px-20 py-24"
    >

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">

          {/* Left */}
          <div className="bg-[#111111] border border-white/10 rounded-3xl p-10 hover:border-cyan-400 transition duration-300 flex flex-col justify-center">

            <p className="text-gray-400 leading-9 text-lg mb-8">

              I am a Computer Science and Engineering student at
              East West University with a strong interest in
              Data Science, Artificial Intelligence, and Full-Stack
              Web Development.

            </p>

            <p className="text-gray-400 leading-9 text-lg mb-8">

              I enjoy building modern web applications, exploring
              machine learning technologies, and solving real-world
              problems through practical development and research.

            </p>

            <p className="text-gray-400 leading-9 text-lg">

              Alongside technical skills, I actively participate
              in leadership, teamwork, event management, and
              community activities to continuously improve both
              professionally and personally.

            </p>

          </div>

          {/* Right */}
          <div className="flex flex-col gap-8">

            <div className="bg-[#111111] border border-white/10 rounded-3xl p-10 hover:border-cyan-400 hover:-translate-y-2 transition duration-300 flex-1 flex flex-col justify-center">

              <h3 className="text-5xl font-bold text-cyan-400 mb-4">
                MERN
              </h3>

              <p className="text-gray-400 text-lg">
                Stack Developer
              </p>

            </div>

            <div className="bg-[#111111] border border-white/10 rounded-3xl p-10 hover:border-cyan-400 hover:-translate-y-2 transition duration-300 flex-1 flex flex-col justify-center">

              <h3 className="text-5xl font-bold text-cyan-400 mb-4">
                AI
              </h3>

              <p className="text-gray-400 text-lg">
                ML Enthusiast
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About