

const HoneyGarlicSalmon = new Meal(
    "Honey Garlic Salmon", // 1. mealName
    "Pan-seared salmon with a sweet and savory glaze", // 2. description
    2, // 3. peopleToServe
    Difficulty.EASY, // 4. difficulty
    4.9, // 5. rating
    187, // 6. reviewers
    10, // 7. preparationTime
    15, // 8. cookTime
    Category.SEAFOOD, // 9. nationality
    "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop", // 10. imageLink
    [ // 11. ingredients
        "2 salmon fillets (6oz each)",
        "3 tablespoons honey",
        "2 tablespoons soy sauce",
        "4 cloves garlic, minced",
        "1 tablespoon olive oil",
        "1 teaspoon fresh ginger, grated",
        "Sesame seeds for garnish",
        "Green onions, sliced"
    ],
    [ // 12. instructions
        "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
        "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
        "Heat olive oil in a large skillet over medium-high heat.",
        "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
        "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
        "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice."
    ],
    new Nutrition(380, 35, 28, 14, 0, 720), // 13. nutrition
    [ // 14. chefTips
        "Don't overcook salmon - it should be slightly pink in the center",
        "Use wild-caught salmon for best flavor and nutrition",
        "Let the sauce caramelize slightly for deeper flavor",
        "Pair with steamed broccoli or asparagus for a complete meal"
    ]
);
