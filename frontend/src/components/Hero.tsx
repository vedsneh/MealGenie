// src/components/Hero.tsx
const Hero = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center text-center px-6"
      id="home"
    >
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to MealGenie 🍽️</h1>
      <p className="text-lg text-gray-600 mb-6">
        Let AI guide your meals smartly & healthily.
      </p>
      <button
        className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition"
        onClick={() => scrollToSection("services")}
      >
        Explore Features
      </button>
    </section>
  );
};

export default Hero;
