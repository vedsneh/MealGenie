import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      title: "Smart Cart Analyzer",
      description: "Add groceries & get dish suggestions",
      link: "/services/smart-cart",
    },
    {
      title: "Recipe Generator",
      description: "GenAI-generated recipes from ingredients",
      link: "/services/recipe-gen",
    },
    {
      title: "Missing Ingredients",
      description: "Suggest what's missing for a complete recipe",
      link: "/services/ingredient-suggestion",
    },
    {
      title: "Nutrition Insight",
      description: "Get macro and calorie details per meal",
      link: "/services/nutrition",
    },
    {
      title: "Budget Buddy",
      description: "Stay in budget, get smart swaps",
      link: "/services/budget-buddy",
    },
    {
      title: "Dietary Modes",
      description: "Select vegetarian, diabetic, or high-protein options",
      link: "/services/dietary-modes",
    },
    {
      title: "Meal Planning Assistant",
      description: "Plan your meals for the next few days",
      link: "/services/meal-plan",
    },
  ];

  return (
    <section id="services" className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        ✨ Our Features
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <Link
            to={feature.link}
            key={index}
            className="bg-white border rounded-xl p-6 shadow hover:shadow-lg transition duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
            <div className="text-indigo-600 mt-4 font-medium">Explore →</div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;


