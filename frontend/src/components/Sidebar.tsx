// src/components/Sidebar.tsx
import { NavLink } from "react-router-dom";

const links = [
  { name: "Smart Cart Analyzer", to: "/services/smart-cart" },
  { name: "Recipe Generator", to: "/services/recipe-generator" },
  { name: "Missing Ingredients", to: "/services/ingredient-suggestion" },
  { name: "Budget Buddy", to: "/services/budget-buddy" },
  { name: "Nutrition Insight", to: "/services/nutrition-insight" },
  { name: "Dietary Modes", to: "/services/dietary-modes" },
  { name: "Meal Planning Assistant", to: "/services/meal-planner" },
];

export default function Sidebar() {
  return (
    <aside className="w-full md:w-60 p-4 bg-gray-100 border-r min-h-screen">
      <h2 className="text-xl font-semibold mb-4 text-indigo-600">Features</h2>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }: { isActive: boolean }) =>
  `block px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-100 ${
    isActive ? "bg-indigo-200 font-semibold text-indigo-900" : ""
  }`
}

            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
export{};