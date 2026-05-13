function Contact() {
  return (
    <section id="contact" className="px-8 md:px-20 py-24">

      <h2 className="text-4xl font-bold mb-12 text-cyan-400">
        Contact
      </h2>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10">

        <p className="text-gray-400 mb-8 text-lg leading-8">
          Feel free to contact me for collaboration,
          freelance work, or any exciting project ideas.
        </p>

        <div className="space-y-6">

          <div>
            <h3 className="text-cyan-400 text-lg font-semibold mb-2">
              Email
            </h3>

            <p className="text-gray-300">
              yourmail@gmail.com
            </p>
          </div>

          <div>
            <h3 className="text-cyan-400 text-lg font-semibold mb-2">
              GitHub
            </h3>

            <p className="text-gray-300">
              github.com/yourusername
            </p>
          </div>

          <div>
            <h3 className="text-cyan-400 text-lg font-semibold mb-2">
              LinkedIn
            </h3>

            <p className="text-gray-300">
              linkedin.com/in/yourusername
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact