import * as dotenv from "dotenv";

dotenv.config();

const MENDABLE_API_KEY = process.env.MENDABLE_API_KEY;

export async function identifyPlant(imageData) {
  try {
    if (!MENDABLE_API_KEY) {
      throw new Error("Mendable API key is missing");
    }

    const response = await fetch("https://api.mendable.ai/v1/", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${MENDABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: imageData }),
    });

    if (!response.ok) {
      throw new Error("Plant identification request failed");
    }

    const data = await response.json();
    return {
      plantName: data.name,
      scientificName: data.scientific_name,
      commonUses: data.uses,
      confidenceScore: data.confidence,
    };
  } catch (error) {
    console.error("Plant Identification Error:", error);
    return { error: "Unable to identify plant at this time." };
  }
}

