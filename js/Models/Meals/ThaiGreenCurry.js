// MISSING MEAL 1
var ThaiGreenCurry = new Meal(
    "Thai Green Curry", // 1. mealName
    "Vibrant and aromatic curry with vegetables and coconut milk", // 2. description
    4, // 3. peopleToServe
    Difficulty.INTERMEDIATE, // 4. difficulty
    4.7, // 5. rating
    312, // 6. reviewers
    15, // 7. preparationTime
    25, // 8. cookTime
    Category.ASIAN, // 9. nationality
    "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=800&auto=format&fit=crop", // 10. imageLink
    [ // 11. ingredients
        "2 tablespoons green curry paste",
        "400ml coconut milk",
        "300g chicken breast, sliced",
        "1 red bell pepper, sliced",
        "100g green beans",
        "1 eggplant, cubed",
        "2 tablespoons fish sauce",
        "1 tablespoon palm sugar",
        "Fresh Thai basil leaves"
    ],
    [ // 12. instructions
        "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
        "Add half the coconut milk and stir to combine with the curry paste.",
        "Add sliced chicken and cook until no longer pink, about 5 minutes.",
        "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
        "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
        "Stir in fresh Thai basil leaves. Serve hot with jasmine rice."
    ],
    new Nutrition(420, 26, 22, 26, 5, 890), // 13. nutrition
    [ // 14. chefTips
        "Adjust spice level by using more or less curry paste",
        "Add vegetables in stages based on cooking time needed",
        "Fresh Thai basil is essential for authentic flavor",
        "Use full-fat coconut milk for richest, creamiest sauce"
    ]
);
