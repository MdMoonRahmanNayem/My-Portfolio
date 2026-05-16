function Experience() {

  const experiences = [

    {
  title: "Associate Executive",
  organization: "East West University Robotics Club",
},

{
  title: "Former Volunteer Lead",
  organization: "East West University Robotics Club",
},

{
  title: "Campus Lead",
  organization: "Interactive Cares",
},

{
  title: "Campus Ambassador",
  organization: "Veritas Edutech Limited",
},

{
  title: "Campus Ambassador",
  organization: "Amar Somoy Amar Desh",
},

{
  title: "Campus Ambassador",
  organization: "Multiple University Fest",
},
  ]

  return (
    <section id="experience"data-aos="fade-left" className="px-8 md:px-20 py-24">

      <h2 className="text-4xl font-bold mb-14 text-white">
        Leadership & Experience
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {experiences.map((item, index) => (

          <div
            key={index}
            className="bg-[#111111] border border-white/10 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
          >

            <h3 className="text-2xl font-bold text-white mb-4">
              {item.title}
            </h3>

            <p className="text-cyan-400 text-lg">
              {item.organization}
            </p>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Experience