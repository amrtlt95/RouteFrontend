
const LasagnaBolognese = new Meal(
    "Lasagna Bolognese", // 1. mealName
    "Layered Italian pasta with rich meat sauce and béchamel", // 2. description
    4, // 3. peopleToServe
    Difficulty.INTERMEDIATE, // 4. difficulty
    4.9, // 5. rating
    478, // 6. reviewers
    30, // 7. preparationTime
    90, // 8. cookTime
    Category.ITALIAN, // 9. nationality
    "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=800&auto=format&fit=crop", // 10. imageLink
    [ // 11. ingredients
        "12 lasagna sheets",
        "500g ground beef",
        "400g canned tomatoes",
        "1 onion, diced",
        "2 carrots, diced",
        "500ml béchamel sauce",
        "200g mozzarella, grated",
        "100g parmesan cheese",
        "Fresh basil"
    ],
    [ // 12. instructions
        "Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.",
        "Cook lasagna sheets according to package directions. Drain and set aside.",
        "Preheat oven to 180°C (350°F).",
        "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.",
        "Top final layer with béchamel, mozzarella, and parmesan cheese.",
        "Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving."
    ],
    new Nutrition(680, 42, 58, 28, 6, 920), // 13. nutrition
    [ // 14. chefTips
        "Make bolognese sauce a day ahead for better flavor",
        "Don't skip the resting time after baking",
        "Use fresh pasta sheets for best texture",
        "Freeze leftovers in individual portions"
    ],
    [ // 15. note
        "Extended Preparation Time",
        "This recipe requires more than 45 minutes to prepare. Plan accordingly!"
    ]
);
