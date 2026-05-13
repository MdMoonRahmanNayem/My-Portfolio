function Projects() {

  const projects = [
    {
      title: "AI Resume Analyzer",
      description:
        "An AI-based resume analysis system using Machine Learning.",
      tech: "React, Node.js, Python",
    },

    {
      title: "Blood Donation System",
      description:
        "A MERN stack web application for blood donor management.",
      tech: "MongoDB, Express, React, Node.js",
    },

    {
      title: "E-Commerce Website",
      description:
        "Modern full-stack e-commerce platform with authentication.",
      tech: "React, Tailwind CSS, Firebase",
    },
  ]

  return (
    <section id="projects" className="px-8 md:px-20 py-24">

      <h2 className="text-4xl font-bold mb-12 text-cyan-400">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {projects.map((project, index) => (

          <div
            key={index}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-cyan-400 transition"
          >

            <div className="h-48 bg-gray-800 rounded-xl mb-6"></div>

            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4 leading-7">
              {project.description}
            </p>

            <p className="text-cyan-400 mb-6">
              {project.tech}
            </p>

            <div className="flex gap-4">

              <button className="bg-cyan-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition">
                Live Demo
              </button>

              <button className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition">
                GitHub
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Projects