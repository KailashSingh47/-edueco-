export const amazonData = {
  name: "Amazon Basin, Brazil",
  description: "The largest rainforest on Earth, the Amazon's health is critical for global climate stability.",
  story: "The 'Lungs of the Planet' produce 20% of the world's oxygen. Its intricate river systems and dense canopy support an unparalleled web of life. However, relentless deforestation for cattle ranching and soy farming is pushing this vital ecosystem towards a tipping point.",
  initialState: {
    biodiversity: 95,
    co2Level: 25,
    soilQuality: 80,
    localEconomy: 50
  },
  variables: {
    deforestation: {
      label: "Deforestation Rate",
      unit: "%",
      icon: "🪓",
      min: 0,
      max: 80,
      default: 15
    },
    protectedAreas: {
      label: "Protected Areas (Indigenous Lands)",
      unit: "%",
      icon: "🛡️",
      min: 0,
      max: 50,
      default: 20
    },
    sustainableFarming: {
      label: "Sustainable Agriculture (Agroforestry)",
      unit: "%",
      icon: "🌳",
      min: 0,
      max: 60,
      default: 10
    }
  },
  impacts: {
    deforestation: {
      biodiversity: -1.0,
      co2Level: 0.7,
      soilQuality: -0.8,
      localEconomy: 0.3
    },
    protectedAreas: {
      biodiversity: 0.9,
      co2Level: -0.3,
      soilQuality: 0.2,
      localEconomy: -0.1
    },
    sustainableFarming: {
      biodiversity: 0.2,
      co2Level: -0.2,
      soilQuality: 0.5,
      localEconomy: 0.2
    }
  },
  speciesList: [
    { name: "Jaguar", icon: "🐆" },
    { name: "Poison Dart Frog", icon: "🐸" },
    { name: "Blue Macaw", icon: "🦜" },
    { name: "Capuchin Monkey", icon: "🐵" },
    { name: "Pink River Dolphin", icon: "🐬" },
    { name: "Sloth", icon: "🦥" }
  ]
};