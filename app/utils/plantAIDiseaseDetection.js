import * as dotenv from "dotenv";

dotenv.config();

const MENDABLE_API_KEY = process.env.MENDABLE_API_KEY;

export async function detectPlantDisease(imageData) {
  try {
    if (!MENDABLE_API_KEY) {
      throw new Error("Mendable API key is missing");
    }

    const response = await fetch("https://api.mendable.ai/v1/plantDiseaseDetection", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${MENDABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: imageData }),
    });

    if (!response.ok) {
      throw new Error("Plant disease detection request failed");
    }

    const data = await response.json();
    return {
      plantName: data.plant_name,
      diseaseDetected: data.disease,
      severity: data.severity,
      recommendedTreatment: data.treatment,
      confidenceScore: data.confidence,
    };
  } catch (error) {
    console.error("Plant Disease Detection Error:", error);
    return { error: "Unable to detect plant disease at this time." };
  }
}

