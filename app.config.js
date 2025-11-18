import 'dotenv/config';

export default {
  expo: {
    name: "Plant Vendor",
    slug: "plant-vendor",
    extra: {
      MENDABLE_API_KEY: process.env.MENDABLE_API_KEY,
},
},
};
