import FoodQuery, { Food } from "@/utils/foodQuery"
import foodData from "../../data/foods.json"
import { Autocomplete, FormControl, InputLabel, MenuItem, Select, Slider, TextField } from "@mui/material";
import Box from "../Box";
import Masslabel from "../MassLabel";
import { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "@/utils/strings";
import { HiOutlineSwitchVertical } from "react-icons/hi";

type DataFood = Food & {
  mass: string
}


export default function Calculator(){
  const foodQuery = new FoodQuery(foodData)

  const [upFood, setUpFood] = useState<DataFood>()
  const [downFood, setDownFood] = useState<Food>()
  const [upOptions, setUpOptions] = useState<string[]>()
  const [downOptions, setDownOptions] = useState<string[]>()


  useEffect(() => {
    const result = foodQuery.getFoodsByName("")


    setUpOptions(result?.map(food => capitalizeFirstLetter(food.name)))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleUpInput(str: string){
    const result = foodQuery.getFoodsByName(str)

    setUpOptions(result?.map(food => capitalizeFirstLetter(food.name)))
  }

  function handleUpFood(name: string | null) {
    console.log(name)

    if(!name) {
      setUpFood(undefined)
      setDownOptions(undefined)
      setDownFood(undefined)
      return
    }

    const upResult = foodQuery.getFoodsByName(name)

    if (upResult?.length !== 1) return;

    setUpFood({...upResult[0], mass: "250"})

    const downResult = foodQuery.getFoodsByCategoryId(upResult[0].category_id)

    setDownOptions(downResult?.map(food => capitalizeFirstLetter(food.name)))
  }

  function handleDownFood(name: string | null) {
    if(!name) {
      setDownFood(undefined)
      return
    }

    const result = foodQuery.getFoodsByName(name)
    if (result?.length !== 1) return;

    setDownFood(result[0])
  }

  function getDownMass(){
    if(!upFood?.mass) return 0
    if(!upFood?.kcal) return 0
    if(!downFood?.kcal) return 0

    let upMass = parseFloat(upFood.mass) 
    let upKcal = parseFloat(upFood.kcal)
    let downKcal = parseFloat(downFood.kcal)

    let result = (upMass * upKcal) / downKcal

    return result.toFixed(0)
  }

  return (
    <div className="flex flex-col items-center gap-8 mt-10">
      <Box>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={upOptions || []}
          sx={{ width: 400 }}
          renderInput={(params) => <TextField {...params} label="Alimento a ser trocado" onChange={(e) => handleUpInput(e.target.value)}/>}
          color="primary"
          onChange={(_, value) => handleUpFood(value)}
        />
        
        <br />

        <Slider 
          disabled={!upFood?.name} 
          defaultValue={250} 
          color="primary" 
          min={0} max={1000} step={10} 
          /*@ts-ignore*/
          onChange={(e) => setUpFood({...upFood, mass: e.target.value})}
        />

        <Masslabel value={upFood?.mass || "0"}/>
      </Box>

      <HiOutlineSwitchVertical color="primary" size={64}/>

      <Box>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={downOptions || []}
          sx={{ width: 400 }}
          renderInput={(params) => <TextField {...params} label="Alimento novo"/>}
          color="primary"
          onChange={(_, value) => handleDownFood(value)}
          className="mb-14"
          value={downFood?.name || ""}
        />

        <Masslabel value={getDownMass().toString()}/>
      </Box>
    </div>
  )
}