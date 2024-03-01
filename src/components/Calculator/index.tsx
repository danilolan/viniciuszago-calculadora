import FoodQuery, { Food } from "@/utils/foodQuery";
import foodData from "../../data/foods.json";
import {
  Autocomplete,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
} from "@mui/material";
import Box from "../Box";
import Masslabel from "../MassLabel";
import { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "@/utils/strings";
import { HiOutlineSwitchVertical } from "react-icons/hi";

type DataFood = Food & {
  mass: string;
};

export default function Calculator() {
  const foodQuery = new FoodQuery(foodData);

  const [upMass, setUpMass] = useState<string>("0");
  const [upFood, setUpFood] = useState<DataFood>();
  const [downFood, setDownFood] = useState<Food>();
  const [upOptions, setUpOptions] = useState<string[]>();
  const [downOptions, setDownOptions] = useState<string[]>();

  useEffect(() => {
    const result = foodQuery.getFoodsByName("");

    setUpOptions(result?.map((food) => capitalizeFirstLetter(food.name)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleUpInput(str: string) {
    const result = foodQuery.getFoodsByName(str);

    setUpOptions(result?.map((food) => capitalizeFirstLetter(food.name)));
  }

  function handleUpFood(name: string | null) {
    if (!name) {
      setUpFood(undefined);
      setDownOptions(undefined);
      setDownFood(undefined);
      return;
    }

    const upResult = foodQuery.getFoodsByName(name);

    if (!upResult) return;

    setUpFood({ ...upResult[0], mass: "250" });

    const downResult = foodQuery.getFoodsByCategoryId(upResult[0].category_id);

    setDownOptions(downResult?.map((food) => capitalizeFirstLetter(food.name)));
  }

  function handleDownFood(name: string | null) {
    if (!name) {
      setDownFood(undefined);
      return;
    }

    const result = foodQuery.getFoodsByName(name);
    if (!result) return;

    setDownFood(result[0]);
  }

  function getDownMass() {
    if (!upMass) return 0;
    if (!upFood?.kcal) return 0;
    if (!downFood?.kcal) return 0;

    let parsedUpMass = parseFloat(upMass);
    let parsedUpKcal = parseFloat(upFood.kcal);
    let parsedDownKcal = parseFloat(downFood.kcal);

    let result = (parsedUpMass * parsedUpKcal) / parsedDownKcal;

    return result.toFixed(0);
  }

  return (
    <div className="flex flex-col items-center gap-8 mt-10">
      <Box>
        <div>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={upOptions || []}
            sx={{ width: 400 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Alimento a ser trocado"
                onChange={(e) => handleUpInput(e.target.value)}
              />
            )}
            color="primary"
            onChange={(_, value) => handleUpFood(value)}
            style={{ width: "256px" }}
          />
        </div>

        <br />

        <Slider
          disabled={!upFood?.name}
          color="primary"
          min={0}
          max={1000}
          step={10}
          /*@ts-ignore*/
          onChange={(e) => setUpMass(e.target.value)}
          value={parseInt(upMass || "0")}
        />

        <Masslabel
          value={upMass || ""}
          setValue={setUpMass}
          disabled={!upFood?.name}
        />
      </Box>

      <HiOutlineSwitchVertical color="primary" size={64} />

      <Box>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={downOptions || []}
          sx={{ width: 400 }}
          renderInput={(params) => (
            <TextField {...params} label="Alimento novo" />
          )}
          color="primary"
          onChange={(_, value) => handleDownFood(value)}
          className="mb-14"
          value={downFood?.name || ""}
          style={{ width: "256px" }}
        />

        <div className="flex flex-col items-center justify-center mx-auto">
          <p
            className={`text-6xl font-bold ${
              getDownMass().toString() === "0" && "text-gray-100 "
            }`}
          >
            {getDownMass().toString()}
          </p>
          <p className="text-2xl text-gray-100 font-medium mt-4">gramas</p>
        </div>
      </Box>
    </div>
  );
}
