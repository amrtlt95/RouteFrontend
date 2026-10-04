
const vegetableCurry = new Meal(
    "Vegetable Curry", // 1. mealName
    "Hearty vegetarian curry with coconut milk", // 2. description
    4, // 3. peopleToServe
    Difficulty.EASY, // 4. difficulty
    4.6, // 5. rating
    289, // 6. reviewers
    20, // 7. preparationTime
    30, // 8. cookTime
    Category.ASIAN, // 9. nationality
    "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop", // 10. imageLink
    [ // 11. ingredients
        "2 potatoes, cubed",
        "1 cauliflower, florets",
        "2 carrots, sliced",
        "1 can chickpeas",
        "400ml coconut milk",
        "3 tablespoons curry powder",
        "1 onion, diced",
        "3 cloves garlic, minced",
        "Fresh spinach"
    ],
    [ // 12. instructions
        "Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.",
        "Add potatoes and carrots, cook for 5 minutes.",
        "Pour in coconut milk and 1 cup water. Bring to simmer.",
        "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
        "Stir in fresh spinach and cook until wilted.",
        "Serve hot over basmati rice or with naan bread."
    ],
    new Nutrition(380, 14, 48, 16, 12, 480), // 13. nutrition
    [ // 14. chefTips
        "Add vegetables in order of cooking time needed",
        "Adjust curry powder amount to taste",
        "Use full-fat coconut milk for creamier curry",
        "Add protein like tofu or paneer if desired"
    ],
    [ // 15. note
        "Extended Preparation Time",
        "This recipe requires more than 45 minutes to prepare. Plan accordingly!"
    ]
);

