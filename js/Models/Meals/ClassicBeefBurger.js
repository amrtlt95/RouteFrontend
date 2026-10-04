
const classicBeefBurger = new Meal(
    "Classic Beef Burger", // 1. mealName
    "Juicy homemade burger with all the fixings", // 2. description
    4, // 3. peopleToServe
    Difficulty.EASY, // 4. difficulty
    4.6, // 5. rating
    421, // 6. reviewers
    15, // 7. preparationTime
    20, // 8. cookTime
    Category.AMERICAN, // 9. nationality
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop", // 10. imageLink
    [ // 11. ingredients
        "500g ground beef (80/20)",
        "4 burger buns",
        "4 slices cheddar cheese",
        "Lettuce leaves",
        "Tomato slices",
        "Red onion, sliced",
        "Pickles",
        "Burger sauce or condiments"
    ],
    [ // 12. instructions
        "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
        "Season patties generously with salt and pepper on both sides.",
        "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
        "Add cheese slices in the last minute of cooking and cover to melt.",
        "Toast burger buns lightly on the grill or in a pan."
    ],
    new Nutrition(650, 38, 42, 35, 2, 920), // 13. nutrition
    [ // 14. chefTips
        "Don't press down on burgers while cooking - keeps them juicy",
        "Make indent in center to prevent burger from puffing up",
        "Let patties rest for 2-3 minutes before serving",
        "Toast buns for better texture and flavor"
    ]
);
