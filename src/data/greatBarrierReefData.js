export const greatBarrierReefData = {
  name: "Great Barrier Reef, Australia",
  description: "The world's largest coral reef system, a vibrant underwater city facing an existential threat from climate change.",
  story: "This immense living structure is so large it can be seen from space. It's a biodiversity hotspot that protects coastlines and supports a massive tourism industry. However, rising ocean temperatures are causing mass coral bleaching, while pollution and agricultural runoff are suffocating its fragile ecosystems.",
  initialState: {
    biodiversity: 90,
    co2Level: 30, // Representing ocean acidification
    soilQuality: 85, // Representing water quality
    localEconomy: 80
  },
  variables: {
    oceanWarming: {
      label: "Ocean Temperature Rise",
      unit: "°C",
      icon: "🌡️",
      min: 0,
      max: 3,
      default: 0.5,
      // We'll treat this as a percentage for the slider logic
      sliderMin: 0,
      sliderMax: 100,
      sliderDefault: 15
    },
    agriculturalRunoff: {
      label: "Agricultural Runoff",
      unit: "%",
      icon: "🌾",
      min: 0,
      max: 60,
      default: 20
    },
    tourismPressure: {
      label: "Unregulated Tourism",
      unit: "%",
      icon: "🏖️",
      min: 0,
      max: 50,
      default: 10
    }
  },
  impacts: {
    // We'll use the slider value (0-100) for the impact calculation
    oceanWarming: {
      biodiversity: -1.5,
      co2Level: 0.8,
      soilQuality: -0.4,
      localEconomy: -0.2
    },
    agriculturalRunoff: {
      biodiversity: -0.8,
      co2Level: 0.2,
      soilQuality: -1.2,
      localEconomy: -0.3
    },
    tourismPressure: {
      biodiversity: -0.3,
      co2Level: 0.1,
      soilQuality: -0.2,
      localEconomy: 0.4
    }
  },
  speciesList: [
    { name: "Clownfish", icon: "🐠" },
    { name: "Sea Turtle", icon: "🐢" },
    { name: "Manta Ray", icon: "🐋" },
    { name: "Shark", icon: "🦈" },
    { name: "Coral", icon: "🪸" },
    { name: "Starfish", icon: "⭐" }
  ]
};