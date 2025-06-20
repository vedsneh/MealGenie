const Navbar = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-600 flex items-center">
          MealGenie <span className="ml-2 text-xl">🍽️</span>
        </div>
        <div className="space-x-6 font-semibold text-gray-800">
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("services")}>Services</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;