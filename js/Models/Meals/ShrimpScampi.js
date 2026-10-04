
const shrimpScampi = new Meal(
    "Shrimp Scampi", // 1. mealName
    "Garlicky shrimp in white wine butter sauce", // 2. description
    2, // 3. peopleToServe
    Difficulty.EASY, // 4. difficulty
    4.8, // 5. rating
    356, // 6. reviewers
    10, // 7. preparationTime
    15, // 8. cookTime
    Category.SEAFOOD, // 9. nationality
    "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?q=80&w=800&auto=format&fit=crop", // 10. imageLink
    [ // 11. ingredients
        "400g large shrimp, peeled",
        "300g linguine pasta",
        "6 cloves garlic, minced",
        "1/2 cup white wine",
        "4 tablespoons butter",
        "2 tablespoons olive oil",
        "Fresh parsley, chopped",
        "Lemon juice and zest",
        "Red pepper flakes"
    ],
    [ // 12. instructions
        "Cook linguine according to package directions. Reserve 1 cup pasta water.",
        "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
        "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
        "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
        "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
        "Garnish with parsley, lemon zest, and serve immediately."
    ],
    new Nutrition(520, 36, 54, 18, 3, 620), // 13. nutrition
    [ // 14. chefTips
        "Don't overcook shrimp - they cook very quickly",
        "Use good quality white wine for best flavor",
        "Toss pasta in sauce for maximum flavor absorption",
        "Add extra lemon for bright, fresh taste"
    ]
);
