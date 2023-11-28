import FoodQuery from "@/utils/foodQuery"
import foodData from "../../data/foods.json"
import { Autocomplete, Slider, TextField } from "@mui/material";
import Box from "../Box";
import Masslabel from "../MassLabel";


export default function Calculator(){
  const foodQuery = new FoodQuery(foodData)

  const result = foodQuery.getFoodById('6d0d7410-d86b-4080-8c17-97808f9d26ac')

  const options = ['The Godfather', 'Pulp Fiction'];

    return (
      <Box>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
          color="primary"
        />
        
        <br />

        <Slider disabled={false} defaultValue={30} color="primary"/>

        <Masslabel value={0}/>
      </Box>
    )
}