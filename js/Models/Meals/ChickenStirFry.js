const chickenStirFry = new Meal(
    "Chicken Stir-Fry", // 1. mealName
    "Quick and healthy stir-fry with colorful vegetables", // 2. description
    4, // 3. peopleToServe
    Difficulty.EASY, // 4. difficulty
    4.5, // 5. rating
    324, // 6. reviewers
    15, // 7. preparationTime
    15, // 8. cookTime
    Category.ASIAN, // 9. nationality
    "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop", // 10. imageLink
    [ // 11. ingredients
        "500g chicken breast, sliced",
        "2 bell peppers, sliced",
        "1 broccoli head, florets",
        "2 carrots, julienned",
        "3 tablespoons soy sauce",
        "2 tablespoons oyster sauce",
        "1 tablespoon sesame oil",
        "2 cloves garlic, minced",
        "Fresh ginger, grated"
    ],
    [ // 12. instructions
        "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
        "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
        "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
        "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
        "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
        "Serve immediately over steamed rice or noodles."
    ],
    new Nutrition(320, 34, 18, 12, 5, 840), // 13. nutrition
    [ // 14. chefTips
        "Cut all ingredients before starting to cook",
        "Keep heat high for authentic stir-fry texture",
        "Don't overcrowd the wok or vegetables will steam",
        "Add cashews or peanuts for extra crunch"
    ]
);

