import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import SmartCart from "./pages/services/SmartCart";
import DietaryModes from "./pages/services/DietaryModes";
import FamilyProfile from "./pages/services/FamilyProfile";
import MealPlan from "./pages/services/MealPlan";
import Nutrition from "./pages/services/Nutrition";
import BudgetBuddy from "./pages/services/BudgetBuddy";
import RecipeGen from "./pages/services/RecipeGen";
import MissingIngredients from "./pages/services/MissingIngredients";
import ServiceLayout from "./components/ServiceLayout";

function App() {
  return (
    <Router>
      <div className="font-display">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
              <About/>
                <Services />
                <Contact />
              </>
            }
          />
<Route path="/about" element={<About/>}></Route>
<Route path="/contact" element={<Contact/>}></Route>
<Route path="/services" element={<Services/>}></Route>
          {/* Each service page wrapped with ServiceLayout */}
          <Route
            path="/services/smart-cart"
            element={
              <ServiceLayout>
                <SmartCart />
              </ServiceLayout>
            }
          />
          <Route
            path="/services/recipe-gen"
            element={
              <ServiceLayout>
                <RecipeGen />
              </ServiceLayout>
            }
          />
          <Route
            path="/services/missing-ingredients"
            element={
              <ServiceLayout>
                <MissingIngredients />
              </ServiceLayout>
            }
          />
          <Route
            path="/services/nutrition"
            element={
              <ServiceLayout>
                <Nutrition />
              </ServiceLayout>
            }
          />
          <Route
            path="/services/budget-buddy"
            element={
              <ServiceLayout>
                <BudgetBuddy />
              </ServiceLayout>
            }
          />
          <Route
            path="/services/meal-plan"
            element={
              <ServiceLayout>
                <MealPlan />
              </ServiceLayout>
            }
          />
          <Route
            path="/services/dietary-modes"
            element={
              <ServiceLayout>
                <DietaryModes />
              </ServiceLayout>
            }
          />
          <Route
            path="/services/family-profile"
            element={
              <ServiceLayout>
                <FamilyProfile />
              </ServiceLayout>
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;





