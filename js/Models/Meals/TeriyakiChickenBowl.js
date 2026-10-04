



// MISSING MEAL 2
var TeriyakiChickenBowl = new Meal(
    "Teriyaki Chicken Bowl", // 1. mealName
    "Sweet and savory chicken over rice with vegetables", // 2. description
    2, // 3. peopleToServe
    Difficulty.EASY, // 4. difficulty
    4.7, // 5. rating
    367, // 6. reviewers
    15, // 7. preparationTime
    20, // 8. cookTime
    Category.ASIAN, // 9. nationality
    "https://images.unsplash.com/photo-1546069901-eacef0df6022?q=80&w=800&auto=format&fit=crop", // 10. imageLink
    [ // 11. ingredients
        "400g chicken thighs, sliced",
        "1/2 cup teriyaki sauce",
        "2 cups cooked rice",
        "1 broccoli head, florets",
        "1 carrot, julienned",
        "Sesame seeds",
        "Green onions, sliced",
        "1 tablespoon sesame oil"
    ],
    [ // 12. instructions
        "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
        "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
        "Meanwhile, steam broccoli and carrots until tender-crisp.",
        "Divide rice between bowls.",
        "Top with teriyaki chicken and steamed vegetables.",
        "Garnish with sesame seeds and green onions. Serve hot."
    ],
    new Nutrition(540, 42, 58, 14, 4, 1240), // 13. nutrition
    [ // 14. chefTips
        "Use chicken thighs for juicier meat",
        "Make homemade teriyaki sauce for better flavor control",
        "Add edamame for extra protein",
        "Meal prep by cooking rice and chicken ahead"
    ]
);