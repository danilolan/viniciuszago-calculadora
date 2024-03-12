import { v4 as uuidv4 } from "uuid";
import { readFile, writeFile } from "fs/promises";

async function updateFoodIds(filePath) {
  try {
    // Lê o arquivo
    const data = await readFile(filePath, { encoding: "utf8" });
    const foods = JSON.parse(data);

    // Regenera os IDs
    const updatedFoods = foods.map((food) => ({
      ...food,
      id: uuidv4(), // Gera um novo UUID para cada item
    }));

    // Reescreve o arquivo com os novos IDs
    await writeFile(filePath, JSON.stringify(updatedFoods, null, 2), {
      encoding: "utf8",
    });
    console.log("Arquivo atualizado com sucesso.");
  } catch (error) {
    console.error("Erro ao atualizar o arquivo:", error);
  }
}

// Chamada da função com o caminho para o seu arquivo foods.json
updateFoodIds("./src/data/foods.json");
