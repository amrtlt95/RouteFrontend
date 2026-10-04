

const BbqPulledPork = new Meal(
    "BBQ Pulled Pork", // 1. mealName
    "Slow-cooked tender pork in smoky barbecue sauce", // 2. description
    4, // 3. peopleToServe
    Difficulty.EASY, // 4. difficulty
    4.7, // 5. rating
    412, // 6. reviewers
    15, // 7. preparationTime
    240, // 8. cookTime
    Category.AMERICAN, // 9. nationality
    "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=800&auto=format&fit=crop", // 10. imageLink
    [ // 11. ingredients
        "1kg pork shoulder",
        "1 cup BBQ sauce",
        "1/2 cup apple cider vinegar",
        "2 tablespoons brown sugar",
        "1 tablespoon paprika",
        "1 tablespoon garlic powder",
        "Burger buns",
        "Coleslaw for serving"
    ],
    [ // 12. instructions
        "Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over pork shoulder.",
        "Place pork in slow cooker with apple cider vinegar and 1/2 cup water.",
        "Cook on low for 8 hours or high for 4 hours until meat is very tender.",
        "Remove pork and shred with two forks. Discard excess fat.",
        "Return shredded pork to slow cooker, mix with BBQ sauce.",
        "Serve on toasted buns with coleslaw on top."
    ],
    new Nutrition(620, 48, 52, 22, 3, 1180), // 13. nutrition
    [ // 14. chefTips
        "Use pork shoulder for best results - it stays moist",
        "Let pork rest before shredding for juicier meat",
        "Make your own BBQ sauce for better flavor",
        "Leftovers freeze well for up to 3 months"
    ],
    [ // 15. note
        "Extended Preparation Time",
        "This recipe requires more than 45 minutes to prepare. Plan accordingly!"
    ]
);
