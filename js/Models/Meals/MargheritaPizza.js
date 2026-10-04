
const MargheritaPizza = new Meal(
    "Margherita Pizza", // 1. mealName
    "Classic Italian pizza with fresh mozzarella and basil", // 2. description
    2, // 3. peopleToServe
    Difficulty.INTERMEDIATE, // 4. difficulty
    4.9, // 5. rating
    512, // 6. reviewers
    90, // 7. preparationTime
    12, // 8. cookTime
    Category.ITALIAN, // 9. nationality
    "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop", // 10. imageLink
    [ // 11. ingredients
        "300g pizza dough",
        "200g crushed tomatoes",
        "250g fresh mozzarella",
        "Fresh basil leaves",
        "2 tablespoons olive oil",
        "2 cloves garlic, minced",
        "Salt and pepper to taste",
        "Parmesan cheese for topping"
    ],
    [ // 12. instructions
        "Let pizza dough come to room temperature and rest for 1 hour.",
        "Preheat oven to maximum temperature (usually 250°C/480°F).",
        "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
        "Roll out dough on a floured surface to desired thickness.",
        "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
        "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan."
    ],
    new Nutrition(580, 24, 68, 22, 4, 920), // 13. nutrition
    [ // 14. chefTips
        "Use a pizza stone for crispier crust",
        "Don't overload with toppings - less is more",
        "Add basil after baking to keep it fresh",
        "Let dough rest properly for best texture"
    ],
    [ // 15. note
        "Extended Preparation Time",
        "This recipe requires more than 45 minutes to prepare. Plan accordingly!"
    ]
);
