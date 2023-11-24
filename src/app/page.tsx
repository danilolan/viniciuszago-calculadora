import FoodQuery from "@/utils/foodQuery"
import foodData from "../data/foods.json"

export default async function Home() {
  const foodQuery = new FoodQuery(foodData)

  const result = foodQuery.getFoodById('6d0d7410-d86b-4080-8c17-97808f9d26ac')
  console.log(result)
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      test
    </main>
  )
}
