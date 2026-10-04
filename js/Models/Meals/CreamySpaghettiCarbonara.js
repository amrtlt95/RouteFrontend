
const CreamySpaghettiCarbonara = new Meal(
    "Creamy Spaghetti Carbonara", // 1. mealName
    "A classic Italian pasta dish with eggs, cheese, and pancetta", // 2. description
    4, // 3. peopleToServe
    Difficulty.EASY, // 4. difficulty
    4.8, // 5. rating
    234, // 6. reviewers
    15, // 7. preparationTime
    20, // 8. cookTime
    Category.ITALIAN, // 9. nationality
    "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800&auto=format&fit=crop", // 10. imageLink
    [ // 11. ingredients
        "400g spaghetti pasta",
        "200g pancetta or guanciale, diced",
        "4 large eggs",
        "100g Pecorino Romano cheese, grated",
        "50g Parmesan cheese, grated",
        "Freshly ground black pepper",
        "Salt for pasta water"
    ],
    [ // 12. instructions
        "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
        "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
        "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
        "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
        "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
        "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!"
    ],
    new Nutrition(520, 28, 62, 18, 3, 680), // 13. nutrition
    [ // 14. chefTips
        "Use room temperature eggs for a smoother sauce consistency",
        "Work quickly when mixing eggs with hot pasta to avoid scrambling",
        "Reserve extra pasta water - it's the secret to perfect creaminess",
        "Freshly grated cheese makes all the difference in flavor",
        "Never add cream - authentic carbonara is made with eggs only"
    ]
);

