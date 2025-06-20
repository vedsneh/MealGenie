const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#e3e9f7] py-20 px-6 md:px-24 flex flex-col justify-center items-center relative overflow-hidden">
    <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-float"></div>
    <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-float-slow"></div>
    <h2 className="text-5xl font-extrabold text-center text-indigo-800 mb-6 animate-slide-in-top">Who We Are</h2>
    <p className="text-lg text-gray-700 max-w-4xl text-center mb-10 animate-fade-in delay-100">
      At Meal Genie, we believe food should be simple, smart, and tailored to you. Our platform combines cutting-edge AI with practical tools to revolutionize your kitchen experience—from smart carts to personalized recipes.
    </p>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 animate-fade-in delay-150">
      <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border-t-4 border-indigo-500">
        <h3 className="text-xl font-semibold mb-2 text-indigo-700">Personalized Meals</h3>
        <p className="text-gray-600">Tailored dishes for your dietary needs, health goals, and taste preferences.</p>
      </div>
      <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border-t-4 border-indigo-500">
        <h3 className="text-xl font-semibold mb-2 text-indigo-700">Smart Recommendations</h3>
        <p className="text-gray-600">Intelligent, real-time suggestions using your grocery list and nutrition data.</p>
      </div>
      <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border-t-4 border-indigo-500">
        <h3 className="text-xl font-semibold mb-2 text-indigo-700">One-Stop Solution</h3>
        <p className="text-gray-600">From shopping to serving, everything managed beautifully in one place.</p>
      </div>
    </div>
  </section>
  );
};

export default About;
