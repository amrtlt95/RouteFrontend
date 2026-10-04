
const capreseSandwich = new Meal(
    "Caprese Sandwich", // 1. mealName
    "Fresh Italian sandwich with mozzarella, tomato, and basil", // 2. description
    2, // 3. peopleToServe
    Difficulty.EASY, // 4. difficulty
    4.5, // 5. rating
    189, // 6. reviewers
    10, // 7. preparationTime
    5, // 8. cookTime
    Category.ITALIAN, // 9. nationality
    "https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=800&auto=format&fit=crop", // 10. imageLink
    [ // 11. ingredients
        "1 ciabatta bread",
        "200g fresh mozzarella, sliced",
        "2 large tomatoes, sliced",
        "Fresh basil leaves",
        "3 tablespoons pesto",
        "2 tablespoons balsamic glaze",
        "Olive oil",
        "Salt and pepper"
    ],
    [ // 12. instructions
        "Slice ciabatta bread in half horizontally.",
        "Toast bread lightly until just crispy.",
        "Spread pesto on both sides of bread.",
        "Layer mozzarella slices, tomato slices, and fresh basil leaves.",
        "Drizzle with olive oil and balsamic glaze. Season with salt and pepper.",
        "Close sandwich, cut in half, and serve immediately."
    ],
    new Nutrition(480, 22, 48, 22, 3, 680), // 13. nutrition
    [ // 14. chefTips
        "Use ripe, in-season tomatoes for best flavor",
        "Buffalo mozzarella is traditional but harder to slice",
        "Toast bread lightly - not too crispy",
        "Add prosciutto or salami for a heartier sandwich"
    ]
);
