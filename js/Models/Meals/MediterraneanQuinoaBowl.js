const mediterraneanQuinoaBowl = new Meal(
    "Mediterranean Quinoa Bowl", // 1. mealName
    "Healthy bowl with quinoa, vegetables, and tahini dressing", // 2. description
    2, // 3. peopleToServe
    Difficulty.EASY, // 4. difficulty
    4.5, // 5. rating
    156, // 6. reviewers
    20, // 7. preparationTime
    35, // 8. cookTime
    Category.MEDITERRANEAN, // 9. nationality
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop", // 10. imageLink
    [ // 11. ingredients
        "1 cup quinoa",
        "Cherry tomatoes, halved",
        "Cucumber, diced",
        "Red onion, sliced",
        "Kalamata olives",
        "Feta cheese, crumbled",
        "Fresh parsley",
        "Tahini dressing"
    ],
    [ // 12. instructions
        "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
        "While quinoa cooks, prepare all vegetables and set aside.",
        "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
        "Fluff cooked quinoa with a fork and let cool slightly.",
        "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
        "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing."
    ],
    new Nutrition(480, 18, 58, 20, 10, 540), // 13. nutrition
    [ // 14. chefTips
        "Rinse quinoa well to remove bitter coating",
        "Let quinoa cool before adding fresh ingredients",
        "Make extra tahini dressing - it keeps well in the fridge",
        "Add grilled chicken or chickpeas for extra protein"
    ],
    [ // 15. note
        "Extended Preparation Time",
        "This recipe requires more than 45 minutes to prepare. Plan accordingly!"
    ]
);
