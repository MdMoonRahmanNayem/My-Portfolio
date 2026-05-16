function Contact() {
  return (

    <section
      id="contact"
      data-aos="fade-up"
      className="px-8 md:px-20 py-24"
    >

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Contact
        </h2>

        <p className="text-gray-400 text-lg leading-9 mb-14">

          Feel free to reach out for collaboration,
          freelance opportunities, or exciting projects.

        </p>

        <div className="bg-[#111111] border border-white/10 rounded-3xl p-10 hover:border-cyan-400 transition duration-300">

          <div className="space-y-8">

            <div>

              <p className="text-cyan-400 text-sm uppercase tracking-[4px] mb-3">
                Email
              </p>

              <a
                href="mailto:mmrn3182@gmail.com"
                className="text-white text-xl hover:text-cyan-400 transition"
              >
                mmrn3182@gmail.com
              </a>

            </div>

            <div>

              <p className="text-cyan-400 text-sm uppercase tracking-[4px] mb-3">
                GitHub
              </p>

              <a
                href="https://github.com/MdMoonRahmanNayem"
                target="_blank"
                rel="noreferrer"
                className="text-white text-xl hover:text-cyan-400 transition"
              >
                github.com/MdMoonRahmanNayem
              </a>

            </div>

            <div>

              <p className="text-cyan-400 text-sm uppercase tracking-[4px] mb-3">
                LinkedIn
              </p>

              <a
                href="https://www.linkedin.com/in/md-moon-rahman-nayem"
                target="_blank"
                rel="noreferrer"
                className="text-white text-xl hover:text-cyan-400 transition"
              >
                linkedin.com/in/md-moon-rahman-nayem
              </a>

            </div>

            <div>

              <p className="text-cyan-400 text-sm uppercase tracking-[4px] mb-3">
                Location
              </p>

              <p className="text-white text-xl">
                Dhaka, Bangladesh
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact