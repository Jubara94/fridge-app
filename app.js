// Add this at the top of app.js
const CACHE_EXPIRY_HOURS = 24;

async function fetchRecipes(ingredients) {
  const cacheKey = `recipes-${ingredients.join(',')}`;
  const cachedData = localStorage.getItem(cacheKey);

  // Check cache
  if (cachedData) {
    const { timestamp, data } = JSON.parse(cachedData);
    const isCacheValid = (Date.now() - timestamp) < (CACHE_EXPIRY_HOURS * 60 * 60 * 1000);
    if (isCacheValid) {
      displayRecipes(data);
      return;
    }
  }

  // Show loading state
  recipeGrid.innerHTML = `<div class="placeholder">🔍 Searching for recipes...</div>`;

  const apiKey = "YOUR_SPOONACULAR_API_KEY";
  const cuisine = document.getElementById('cuisineFilter').value;
  const diet = document.getElementById('dietFilter').value;
  
  let url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.join(',')}&apiKey=${apiKey}&number=5`;
  if (cuisine) url += `&cuisine=${cuisine}`;
  if (diet) url += `&diet=${diet}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("API request failed");
    const recipes = await response.json();

    // Cache the response
    localStorage.setItem(cacheKey, JSON.stringify({
      timestamp: Date.now(),
      data: recipes
    }));

    displayRecipes(recipes);
  } catch (error) {
    console.error("Error:", error);
    recipeGrid.innerHTML = `
      <div class="placeholder">
        ⚠️ Failed to load recipes. ${cachedData ? "Showing cached results..." : "Try again later!"}
      </div>
    `;
    if (cachedData) displayRecipes(JSON.parse(cachedData).data);
  }
}


async function fetchRecipes(ingredients) {
    const apiKey = "149c0f256f7940ecb8e69828f0032fc0"; // ← Replace with your key
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.join(',')}&apiKey=${apiKey}&number=5`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("API request failed");
      const recipes = await response.json();
      displayRecipes(recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      recipeGrid.innerHTML = `<div class="placeholder">⚠️ Failed to load recipes. Try again later!</div>`;
    }
  }
  
  function displayRecipes(recipes) {
    recipeGrid.innerHTML = '';
    
    if (recipes.length === 0) {
      recipeGrid.innerHTML = `<div class="placeholder">😢 No recipes found. Try different ingredients!</div>`;
      return;
    }
  
    recipes.forEach(recipe => {
      const card = document.createElement('div');
      card.className = 'recipe-card';
      card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
        <h3>${recipe.title}</h3>
        <p>Uses ${recipe.usedIngredientCount} ingredients</p>
        <p>Missing ${recipe.missedIngredientCount} ingredients</p>
        <a href="https://spoonacular.com/recipes/${recipe.title}-${recipe.id}" target="_blank" class="btn">View Recipe</a>
      `;
      recipeGrid.appendChild(card);
    });
  }
  
  // Update the event listener to use fetchRecipes()
  findRecipes.addEventListener('click', () => {
    const ingredients = Array.from(document.querySelectorAll('.tag')).map(tag => tag.textContent);
    if (ingredients.length === 0) {
      alert("Add ingredients first!");
      return;
    }
    fetchRecipes(ingredients); // ← Calls the real API now
  });

  findRecipes.addEventListener('click', () => {
    const ingredients = Array.from(document.querySelectorAll('.tag')).map(tag => tag.textContent);
    if (ingredients.length === 0) {
      alert("Add ingredients first!");
      return;
    }
    fetchRecipes(ingredients);
  });

  // Add to app.js
document.getElementById('clearCache').addEventListener('click', () => {
    localStorage.clear();
    alert("Cache cleared!");
  });
  
  // Trigger search when filters change
  document.getElementById('cuisineFilter').addEventListener('change', () => {
    const ingredients = Array.from(document.querySelectorAll('.tag')).map(tag => tag.textContent);
    if (ingredients.length > 0) fetchRecipes(ingredients);
  });
  
  document.getElementById('dietFilter').addEventListener('change', () => {
    const ingredients = Array.from(document.querySelectorAll('.tag')).map(tag => tag.textContent);
    if (ingredients.length > 0) fetchRecipes(ingredients);
  });