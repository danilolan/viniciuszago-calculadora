export type Food = {
    id: string,
    name: string,
    category_id: number,
    kcal: string
}

export default class FoodQuery {
	data: Food[] | undefined;
	
	constructor(data: Food[]){
		this.data = data;
	}

    getAllFoods(): Food[] | undefined {
        return this.data;
    }

    getFoodById(foodId: string): Food | undefined {
        if(!this.data) return undefined;

        return this.data.filter((food) => food.id.toString() === foodId.toString())[0];
    }

    getFoodsByName(str: string): Food[] | undefined {
        if(!this.data) return undefined;

        const results = this.data.filter(
            (food) =>
              food.name.toString().slice(0, str.length).toLowerCase() ===
              str.toLowerCase()
        );

        return results;
    }

    getFoodsByCategoryId(categoryId: number): Food[] | undefined {
        if(!this.data) return undefined;

        const results = this.data.filter(
            (food) => food.category_id.toString() === categoryId.toString()
          );

        return results;
    }
	
}