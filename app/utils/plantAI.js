import * as dotenv from "dotenv";

dotenv.config();

const MENDABLE_API_KEY = process.env.MENDABLE_API_KEY;

class PlantAI {
  async identifyPlant(imageData) {
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
        body: JSON.stringify({ image: imageData}),
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
      return { error: "Unable to identify plant at this time."};
}
}

  async getPlantInstructions(plantName) {
    try {
      if (!MENDABLE_API_KEY) {
        throw new Error("Mendable API key is missing");
}

      const response = await fetch("https://api.mendable.ai/v1/plantCare", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${MENDABLE_API_KEY}`,
          "Content-Type": "application/json",
},
        body: JSON.stringify({ query: `How do I care for ${plantName}?`}),
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
      console.error("Plant Care Instructions Error:", error);
      return { error: "Unable to fetch care instructions at this time."};
}
}

  async detectPlantDisease(imageData) {
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
        body: JSON.stringify({ image: imageData}),
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
      return { error: "Unable to detect plant disease at this time."};
}
}
}

export default new PlantAI();
