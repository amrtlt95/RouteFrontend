

const ChickenTikkaMasala = new Meal(
    "Chicken Tikka Masala", // 1. mealName
    "Rich and creamy Indian curry with tender chicken pieces", // 2. description
    4, // 3. peopleToServe
    Difficulty.INTERMEDIATE, // 4. difficulty
    4.7, // 5. rating
    389, // 6. reviewers
    20, // 7. preparationTime
    30, // 8. cookTime
    Category.ASIAN, // 9. nationality
    "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop", // 10. imageLink
    [ // 11. ingredients
        "600g chicken breast, cubed",
        "1 cup plain yogurt",
        "2 tablespoons tikka masala paste",
        "400ml coconut cream",
        "1 onion, diced",
        "4 cloves garlic, minced",
        "2 tablespoons ginger, grated",
        "400g canned tomatoes",
        "Fresh cilantro for garnish"
    ],
    [ // 12. instructions
        "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
        "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
        "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
        "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
        "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
        "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice."
    ],
    new Nutrition(450, 38, 24, 22, 4, 760), // 13. nutrition
    [ // 14. chefTips
        "Marinate chicken overnight for deeper flavor",
        "Use full-fat coconut cream for richest sauce",
        "Adjust spice level by varying the tikka paste amount",
        "Serve with naan bread and basmati rice"
    ],
    [ // 15. note
        "Extended Preparation Time",
        "This recipe requires more than 45 minutes to prepare. Plan accordingly!"
    ]
);
