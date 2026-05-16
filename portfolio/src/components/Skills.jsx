function Skills() {

  const skillCategories = [

    {
      title: "Languages",

      skills: [
        "C",
        "Python",
        "JavaScript",
      ],
    },

    {
      title: "Data Science & AI",

      skills: [
        "Machine Learning",
        "Computer Vision",
        "Data Analysis",
      ],
    },

    {
      title: "Libraries & Frameworks",

      skills: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Scikit-learn",
        "TensorFlow",
        "PyTorch",
        "OpenCV",
        "Pillow",
        "Streamlit",
      ],
    },

    {
      title: "Web Development",

      skills: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "API Integration",
      ],
    },

    {
      title: "Deployment & Platforms",

      skills: [
        "Netlify",
        "Vercel",
      ],
    },

    {
      title: "Tools",

      skills: [
        "GitHub",
        "Google Colab",
        "Kaggle",
        "Jupyter Notebook",
        "VS Code",
        "Code::Blocks",
        "Postman",
        "Figma",
        "Google Workspace",
      ],
    },

    {
      title: "Professional Skills",

      skills: [
        "Leadership",
        "Communication",
        "Public Speaking",
        "Team Coordination",
        "Event Management",
        "Documentation",
      ],
    },

  ]

  return (
    <section id="skills" data-aos="fade-up" className="px-8 md:px-20 py-24">

      <h2 className="text-4xl font-bold mb-14 text-white">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        {skillCategories.map((category, index) => (

          <div
            key={index}
            className="bg-[#111111] border border-white/10 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
          >

            <h3 className="text-2xl font-bold text-cyan-400 mb-8">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-4">

              {category.skills.map((skill, skillIndex) => (

                <div
                  key={skillIndex}
                  className="bg-black border border-white/10 px-5 py-3 rounded-xl hover:border-cyan-400 hover:bg-cyan-400/10 transition duration-300"
                >

                  <p className="text-gray-300 font-medium">
                    {skill}
                  </p>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Skills