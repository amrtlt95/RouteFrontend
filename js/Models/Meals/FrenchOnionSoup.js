const frenchOnionSoup = new Meal(
    "French Onion Soup", // 1. mealName
    "Rich beef broth with caramelized onions and melted cheese", // 2. description
    4, // 3. peopleToServe
    Difficulty.INTERMEDIATE, // 4. difficulty
    4.7, // 5. rating
    267, // 6. reviewers
    15, // 7. preparationTime
    60, // 8. cookTime
    Category.MEDITERRANEAN, // 9. nationality
    "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop", // 10. imageLink
    [ // 11. ingredients
        "4 large onions, thinly sliced",
        "4 tablespoons butter",
        "1 liter beef broth",
        "1/2 cup white wine",
        "2 bay leaves",
        "Fresh thyme",
        "Baguette slices",
        "200g Gruyère cheese, grated"
    ],
    [ // 12. instructions
        "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
        "Add white wine and deglaze the pot, scraping up brown bits.",
        "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
        "Meanwhile, toast baguette slices until golden.",
        "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
        "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot."
    ],
    new Nutrition(380, 18, 36, 18, 4, 980), // 13. nutrition
    [ // 14. chefTips
        "Patience is key - don't rush the onion caramelization",
        "Use good quality beef broth for best flavor",
        "Gruyère can be substituted with Swiss cheese",
        "Watch carefully when broiling to avoid burning"
    ],
    [ // 15. note
        "Extended Preparation Time",
        "This recipe requires more than 45 minutes to prepare. Plan accordingly!"
    ]
);