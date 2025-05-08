import * as dotenv from "dotenv";

dotenv.config();

const MENDABLE_API_KEY = process.env.MENDABLE_API_KEY;

export async function getPlantCareInstructions(plantName) {
  try {
    if (!MENDABLE_API_KEY) {
      throw new Error("Mendable API key is missing");
    }

    const response = await fetch("https://api.mendable.ai/v1/", {
      method: "POST",
      headers: {
        "Authorization": Bearer MENDABLE_API_KEY,
        "Content-Type": "application/json",
      ,
      body: JSON.stringify( query: How do I care for{plantName}? }),
    });

    if (!response.ok) {
      throw new Error("Care instructions request failed");
    }

    const data = await response.json();

    return {
      careInstructions: data.instructions || "No care instructions found.",
      light: data.light || "Unknown",
      water: data.water || "Unknown",
      soil: data.soil || "Unknown",
      temperature: data.temperature || "Unknown",
    };
  } catch (error) {
    console.error("Plant Care Instructions Error:", error);
return { error: "Unable to fetch care instructions at this time." };
  }
}
