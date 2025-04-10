import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Recipes from "./pages/Recipes";
import Recipe from "./components/Recipe";
import UploadRecipe from "./pages/UploadRecipe";
import Profile from "./pages/Profile";
import ViewRecipe from "./pages/ViewRecipe"
import EditProfile from "./components/EditProfile";
import EditRecipe from "./components/EditRecipe";
import ViewAllRecipe from "./pages/ViewAllRecipes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/Recipe" element={<Recipe />} />
        <Route path="/UploadRecipe" element={<UploadRecipe />} /> 
        <Route path="*" element={<h1>Page Not Found</h1>} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ViewRecipe" element={<ViewRecipe />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/EditRecipe" element={<EditRecipe />} />
        <Route path="/ViewAllRecipe" element={<ViewAllRecipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
