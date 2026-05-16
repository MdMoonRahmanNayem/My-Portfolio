import bloodcare from "../assets/bloodcare.png"
import pawmart from "../assets/pawmart.png"
import skillswap from "../assets/skillswap.png"

function Projects() {

  const projects = [

    {
      title: "BloodCare",

      description:
        "Full-stack blood donation management platform with role-based dashboard, donor search, funding system, and authentication.",

      tech:
        "React • Tailwind CSS • Firebase • Node.js • Express • MongoDB",

      live:
        "https://moon-blood-care.netlify.app",

      github:
        "https://github.com/MdMoonRahmanNayem/blood-donation-app-client-site",

      color:
        "from-red-500 to-rose-700",

      image:
        bloodcare,
    },

    {
      title: "PawMart",

      description:
        "Pet marketplace platform where users can adopt pets, buy products, and manage listings with authentication and private routing.",

      tech:
        "React • Tailwind CSS • Firebase • Node.js • Express • MongoDB",

      live:
        "https://pawmart-moon.netlify.app",

      github:
        "https://github.com/MdMoonRahmanNayem/pawmart-client",

      color:
        "from-pink-500 to-orange-500",

      image:
        pawmart,
    },

    {
      title: "SkillSwap",

      description:
        "Local skill exchange platform with Firebase authentication, protected routes, profile management, and responsive UI.",

      tech:
        "React • Tailwind CSS • Firebase • Context API",

      live:
        "https://skillswap09.netlify.app/",

      github:
        "https://github.com/MdMoonRahmanNayem/assignment09-SkillSwap",

      color:
        "from-violet-500 to-purple-700",

      image:
        skillswap,
    },

  ]

  return (
    <section id="projects" data-aos="zoom-in" className="px-8 md:px-20 py-24">

      <h2 className="text-4xl font-bold mb-14 text-white">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

        {projects.map((project, index) => (

          <div
            key={index}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 hover:border-white/30 transition duration-300"
          >

            {/* Top Gradient */}
            <div
              className={`h-3 bg-gradient-to-r ${project.color}`}
            ></div>

            {/* Project Image */}
            <div className="h-56 overflow-hidden">

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />

            </div>

            {/* Content */}
            <div className="p-8">

              <h3 className="text-3xl font-bold text-white mb-5">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-8 mb-6">
                {project.description}
              </p>

              <p className="text-white/80 font-medium mb-8">
                {project.tech}
              </p>

              <div className="flex gap-4 flex-wrap">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className={`bg-gradient-to-r ${project.color} text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300`}
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white/20 text-white hover:bg-white hover:text-black px-6 py-3 rounded-xl font-semibold transition duration-300"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Projects