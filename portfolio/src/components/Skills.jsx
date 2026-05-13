function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "Machine Learning",
    "Git",
    "GitHub"
  ]

  return (
    <section className="px-8 md:px-20 py-24">

      <h2 className="text-4xl font-bold mb-12 text-cyan-400">
        Skills
      </h2>

      <div className="flex flex-wrap gap-6">

        {skills.map((skill, index) => (

          <div
            key={index}
            className="bg-gray-900 border border-gray-800 px-6 py-4 rounded-2xl hover:border-cyan-400 transition"
          >
            <p className="text-gray-300 font-semibold">
              {skill}
            </p>
          </div>

        ))}

      </div>

    </section>
  )
}

export default Skills