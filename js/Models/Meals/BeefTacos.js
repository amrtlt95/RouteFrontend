
const beefTacos = new Meal(
    "Beef Tacos", // 1. mealName
    "Flavorful Mexican tacos with seasoned ground beef", // 2. description
    4, // 3. peopleToServe
    Difficulty.EASY, // 4. difficulty
    4.6, // 5. rating
    278, // 6. reviewers
    15, // 7. preparationTime
    20, // 8. cookTime
    Category.AMERICAN, // 9. nationality
    "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop", // 10. imageLink
    [ // 11. ingredients
        "500g ground beef",
        "8 taco shells",
        "1 onion, diced",
        "2 tablespoons taco seasoning",
        "Shredded lettuce",
        "Diced tomatoes",
        "Shredded cheddar cheese",
        "Sour cream",
        "Salsa"
    ],
    [ // 12. instructions
        "Heat a large skillet over medium-high heat. Cook ground beef until browned.",
        "Add diced onion and cook until softened, about 5 minutes.",
        "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.",
        "Warm taco shells according to package directions.",
        "Fill each shell with seasoned beef."
    ],
    new Nutrition(420, 26, 32, 20, 4, 780), // 13. nutrition
    [ // 14. chefTips
        "Drain excess fat from beef for healthier tacos",
        "Warm shells in oven for better texture",
        "Prepare all toppings before cooking beef",
        "Use ground turkey for a lighter option"
    ]
);
