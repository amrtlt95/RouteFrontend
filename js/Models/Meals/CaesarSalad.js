

const CaesarSalad = new Meal(
    "Caesar Salad", // 1. mealName
    "Classic salad with crispy romaine and creamy dressing", // 2. description
    2, // 3. peopleToServe
    Difficulty.EASY, // 4. difficulty
    4.4, // 5. rating
    198, // 6. reviewers
    15, // 7. preparationTime
    0, // 8. cookTime
    Category.MEDITERRANEAN, // 9. nationality
    "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=800&auto=format&fit=crop", // 10. imageLink
    [ // 11. ingredients
        "1 large romaine lettuce",
        "1/2 cup Caesar dressing",
        "1/2 cup parmesan cheese, shaved",
        "1 cup croutons",
        "2 anchovy fillets (optional)",
        "Lemon wedges",
        "Black pepper"
    ],
    [ // 12. instructions
        "Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
        "Place lettuce in a large salad bowl.",
        "Add Caesar dressing and toss until evenly coated.",
        "Add croutons and half the parmesan cheese. Toss gently.",
        "Top with remaining parmesan shavings and anchovies if using."
    ],
    new Nutrition(320, 12, 18, 22, 3, 680), // 13. nutrition
    [ // 14. chefTips
        "Use cold, crisp lettuce for best texture",
        "Make homemade croutons for better flavor",
        "Add grilled chicken for a complete meal",
        "Don't dress salad until ready to serve"
    ]
);