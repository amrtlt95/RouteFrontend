const greekMoussaka = new Meal(
    "Greek Moussaka", // 1. mealName
    "Traditional layered eggplant casserole with lamb", // 2. description
    4, // 3. peopleToServe
    Difficulty.INTERMEDIATE, // 4. difficulty
    4.8, // 5. rating
    234, // 6. reviewers
    30, // 7. preparationTime
    60, // 8. cookTime
    Category.MEDITERRANEAN, // 9. nationality
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop", // 10. imageLink
    [ // 11. ingredients
        "3 large eggplants, sliced",
        "500g ground lamb",
        "400g canned tomatoes",
        "1 onion, diced",
        "3 cloves garlic, minced",
        "500ml béchamel sauce",
        "100g parmesan cheese",
        "Cinnamon and oregano",
        "Olive oil"
    ],
    [ // 12. instructions
        "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
        "Brush eggplant slices with olive oil, grill or bake until softened.",
        "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
        "Preheat oven to 180°C (350°F).",
        "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
        "Bake for 45 minutes until golden. Let rest 15 minutes before serving."
    ],
    new Nutrition(580, 36, 32, 32, 8, 820), // 13. nutrition
    [ // 14. chefTips
        "Salt eggplant to remove bitterness",
        "Don't skip the resting time - it helps set the layers",
        "Use ground beef if lamb is unavailable",
        "Make ahead and reheat for easier serving"
    ],
    [ // 15. note
        "Extended Preparation Time",
        "This recipe requires more than 45 minutes to prepare. Plan accordingly!"
    ]
);
