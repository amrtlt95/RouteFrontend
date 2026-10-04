
const  PadThai = new Meal(
    "Pad Thai", // 1. mealName
    "Popular Thai stir-fried noodles with shrimp and peanuts", // 2. description
    2, // 3. peopleToServe
    Difficulty.INTERMEDIATE, // 4. difficulty
    4.8, // 5. rating
    445, // 6. reviewers
    20, // 7. preparationTime
    15, // 8. cookTime
    Category.ASIAN, // 9. nationality
    "https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=800&auto=format&fit=crop", // 10. imageLink
    [ // 11. ingredients
        "200g rice noodles",
        "200g shrimp, peeled",
        "2 eggs",
        "3 tablespoons tamarind paste",
        "2 tablespoons fish sauce",
        "1 tablespoon palm sugar",
        "Bean sprouts",
        "Crushed peanuts",
        "Lime wedges and cilantro"
    ],
    [ // 12. instructions
        "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
        "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
        "Heat wok over high heat. Scramble eggs and set aside.",
        "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
        "Add scrambled eggs and bean sprouts. Toss everything together.",
        "Serve topped with crushed peanuts, lime wedges, and cilantro."
    ],
    new Nutrition(540, 32, 62, 16, 4, 1120), // 13. nutrition
    [ // 14. chefTips
        "Don't oversoak noodles or they'll be mushy",
        "Cook on high heat for authentic wok flavor",
        "Balance sweet, sour, and salty flavors",
        "Prepare all ingredients before starting to cook"
    ]
);
