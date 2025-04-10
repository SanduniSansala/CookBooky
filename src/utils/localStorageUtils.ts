const userEmail = localStorage.getItem('loggedInUserEmail') || '';
export type Recipe = {
    id: number;
    recipeName: string;
    ingredients: string;
    procedure: string;
    caloryCount: string;
    nutritionValues: string;
    cuisine: string;
    dietary: string;
    mealType: string;
    difficulty: string;
    time: string;
    allergy: string;
    specialDiet: string;
    images: string[];
    email: string; // 🆕 Add this
  };
  


// export interface Recipe {
//     id: number;
//     recipeName: string;
//     ingredients: string;
//     procedure: string;
//     caloryCount: string;
//     nutritionValues: string;
//     cuisine: string;
//     dietary: string;
//     mealType: string;
//     difficulty: string;
//     time: string;
//     allergy: string;
//     specialDiet: string;
//     images: string[]; // optional, if you handle images
//   }
  
  const RECIPES_KEY = 'recipes';
  
  export const getRecipesFromLocalStorage = (): Recipe[] => {
    const data = localStorage.getItem(RECIPES_KEY);
    return data ? JSON.parse(data) : [];
  };
  
  export const saveRecipesToLocalStorage = (recipes: Recipe[]) => {
    localStorage.setItem(RECIPES_KEY, JSON.stringify(recipes));
  };
  
  export const clearAllRecipesFromLocalStorage = () => {
    localStorage.removeItem(RECIPES_KEY);
  };
  
  export const addRecipeToLocalStorage = (recipe: Recipe) => {
    const existing = getRecipesFromLocalStorage();
    existing.push(recipe);
    saveRecipesToLocalStorage(existing);
  };
  

export const updateRecipeInLocalStorage = (updatedRecipe: Recipe) => {
    const recipes = getRecipesFromLocalStorage();
    const index = recipes.findIndex((r) => r.id === updatedRecipe.id);
    if (index !== -1) {
      recipes[index] = updatedRecipe; // Update the recipe at the index
      localStorage.setItem('recipes', JSON.stringify(recipes));
    }
  };
  
  export const removeRecipeFromLocalStorage = (id: number) => {
    const storedRecipes = getRecipesFromLocalStorage();
    const updatedRecipes = storedRecipes.filter((recipe) => recipe.id !== id);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
  };
  