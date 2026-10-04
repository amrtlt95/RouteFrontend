class Meal {
    // Class property fields
    mealName;
    description;
    peopleToServe;
    difficulty;
    rating;
    reviewers;
    preparationTime;
    cookTime;
    category;
    imageLink;
    ingredients;
    instructions;
    nutrition;
    chefTips;
    note;

    constructor(
        mealName,
        description,
        peopleToServe,
        difficulty,
        rating,
        reviewers,
        preparationTime,
        cookTime,
        category,
        imageLink,
        ingredients,
        instructions,
        nutrition,
        chefTips,
        note=null
    
        
    ) {
        this.mealName = mealName;
        this.description = description;
        this.peopleToServe = peopleToServe;
        this.difficulty = difficulty;
        this.rating = rating;
        this.reviewers = reviewers;
        this.preparationTime = preparationTime;
        this.cookTime = cookTime;
        this.category = category;
        this.imageLink = imageLink;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.nutrition = nutrition;
        this.chefTips = chefTips;
       this.note=note;
    }
}