export const congoBasinData = {
  name: "Congo Basin, Democratic Republic of Congo",
  description: "The world's second-largest rainforest, a vital carbon sink and home to incredible biodiversity, including forest elephants and gorillas.",
  story: "The heart of Africa, this basin is critical for regulating the global climate. However, it faces severe threats from illegal mining, logging, and instability, which put its unique wildlife and indigenous communities at great risk.",
  initialState: {
    biodiversity: 90,
    co2Level: 20,
    soilQuality: 75,
    localEconomy: 40
  },
  variables: {
    illegalMining: {
      label: "Illegal Mining Operations",
      unit: "%",
      icon: "⛏️",
      min: 0,
      max: 60,
      default: 5
    },
    protectedReserves: {
      label: "Protected Reserve Expansion",
      unit: "%",
      icon: "🏞️",
      min: 0,
      max: 50,
      default: 15
    },
    communityAid: {
      label: "Community Aid & Education",
      unit: "%",
      icon: "🤝",
      min: 0,
      max: 40,
      default: 10
    }
  },
  impacts: {
    illegalMining: {
      biodiversity: -1.2,
      co2Level: 0.8,
      soilQuality: -1.0,
      localEconomy: 0.5
    },
    protectedReserves: {
      biodiversity: 1.1,
      co2Level: -0.4,
      soilQuality: 0.3,
      localEconomy: -0.2
    },
    communityAid: {
      biodiversity: 0.3,
      co2Level: -0.1,
      soilQuality: 0.2,
      localEconomy: 0.4
    }
  },
  speciesList: [
    { name: "Forest Elephant", icon: "🐘" },
    { name: "Western Lowland Gorilla", icon: "🦍" },
    { name: "Chimpanzee", icon: "🐵" },
    { name: "Okapi", icon: "🦏" },
    { name: "Bonobo", icon: "🐒" },
    { name: "Congo Peafowl", icon: "🦚" }
  ]
};