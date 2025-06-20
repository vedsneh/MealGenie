import { Link } from "react-router-dom";

const serviceFeatures = [
  { title: "Smart Cart Analyzer", link: "/services/smart-cart" },
  { title: "Recipe Generator", link: "/services/recipe-gen" },
  { title: "Missing Ingredients", link: "/services/missing-ingredients" },
  { title: "Nutrition Insight", link: "/services/nutrition" },
  { title: "Budget Buddy", link: "/services/budget-buddy" },
  { title: "Dietary Modes", link: "/services/dietary-modes" },
  { title: "Meal Planning Assistant", link: "/services/meal-plan" },
  { title: "Family Profile", link: "/services/family-profile" },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-10">🛠️ Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {serviceFeatures.map((feature, i) => (
          <Link
            to={feature.link}
            key={i}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-sm text-gray-500 mt-2">Explore this feature →</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
