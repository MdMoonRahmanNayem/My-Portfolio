function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-800 sticky top-0 bg-black z-50">

      <h1 className="text-2xl font-bold text-cyan-400">
        Portfolio
      </h1>

      <ul className="flex gap-6 text-gray-300">

        <li>
          <a
            href="#home"
            className="hover:text-cyan-400 transition"
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            className="hover:text-cyan-400 transition"
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className="hover:text-cyan-400 transition"
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="hover:text-cyan-400 transition"
          >
            Contact
          </a>
        </li>

      </ul>

    </nav>
  )
}

export default Navbar