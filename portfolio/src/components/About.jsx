function About() {
  return (
    <section id="about" className="px-8 md:px-20 py-24">

      <h2 className="text-4xl font-bold mb-12 text-cyan-400">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-12">

        {/* Left */}
        <div>

          <p className="text-gray-400 leading-8 mb-6">
            I am a passionate Computer Science student
            focused on MERN Stack Development, Artificial
            Intelligence, and Machine Learning.
          </p>

          <p className="text-gray-400 leading-8">
            I enjoy building modern web applications,
            solving real-world problems, and exploring
            scalable software systems.
          </p>

        </div>

        {/* Right */}
        <div className="grid grid-cols-2 gap-6">

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
            <h3 className="text-3xl font-bold text-cyan-400 mb-2">
              10+
            </h3>

            <p className="text-gray-400">
              Projects Completed
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
            <h3 className="text-3xl font-bold text-cyan-400 mb-2">
              MERN
            </h3>

            <p className="text-gray-400">
              Stack Developer
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
            <h3 className="text-3xl font-bold text-cyan-400 mb-2">
              AI
            </h3>

            <p className="text-gray-400">
              ML Enthusiast
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
            <h3 className="text-3xl font-bold text-cyan-400 mb-2">
              CSE
            </h3>

            <p className="text-gray-400">
              Student
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default About