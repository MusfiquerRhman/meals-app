class Meal {
    constructor(
        id,
        categoryIds,
        title,
        affordibility,
        complexity,
        imageUrl,
        duaration,
        ingridients,
        steps,
        isGlutenFree,
        isVegan,
        isVegetarian,
        isLactuseFree
    ) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.affordibility = affordibility;
        this.complexity = complexity;
        this.imageUrl = imageUrl;
        this.duaration = duaration;
        this.ingridients = ingridients;
        this.steps = steps;
        this.isGlutenFree = isGlutenFree;
        this.isVegan = isVegan;
        this.isVegetarian = isVegetarian;
        this.isLactuseFree = isLactuseFree;
    }
}

export default Meal;