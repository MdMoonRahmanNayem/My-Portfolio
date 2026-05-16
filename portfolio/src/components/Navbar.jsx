function Navbar() {
  return (

    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-8 md:px-20 py-5 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl md:text-3xl font-bold text-white"
        >
          Moon<span className="text-cyan-400">.</span>
        </a>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-10 text-gray-300 font-medium">

          <li>
            <a
              href="#home"
              className="hover:text-cyan-400 transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-cyan-400 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-cyan-400 transition duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#education"
              className="hover:text-cyan-400 transition duration-300"
            >
              Education
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className="hover:text-cyan-400 transition duration-300"
            >
              Experience
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>
  )
}

export default Navbar