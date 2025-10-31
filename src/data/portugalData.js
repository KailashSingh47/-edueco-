export const portugalData = {
  name: "Cork Forests (Montado), Portugal",
  description: "A unique agro-silvo-pastoral system, these forests are vital for biodiversity and prevent desertification.",
  story: "For centuries, humans and nature have coexisted here in a perfect balance. The harvesting of cork bark doesn't harm the trees, creating a sustainable industry. But this delicate balance is threatened by urban sprawl and the decline of traditional farming.",
  initialState: { biodiversity: 70, co2Level: 40, soilQuality: 65, localEconomy: 75 },
  variables: {
    urbanSprawl: {
      label: "Urban Sprawl",
      unit: "%",
      icon: "🏙️",
      min: 0,
      max: 50,
      default: 10
    },
    corkHarvesting: {
      label: "Intensive Cork Harvesting",
      unit: "%",
      icon: "🍾",
      min: 0,
      max: 70,
      default: 30
    },
    tourism: {
      label: "Eco-Tourism Development",
      unit: "%",
      icon: "🧳",
      min: 0,
      max: 60,
      default: 15
    }
  },
  impacts: {
    urbanSprawl: {
      biodiversity: -0.7,
      co2Level: 0.4,
      soilQuality: -0.5,
      localEconomy: 0.4
    },
    corkHarvesting: {
      biodiversity: -0.3,
      co2Level: 0.1,
      soilQuality: -0.2,
      localEconomy: 0.6
    },
    tourism: {
      biodiversity: -0.1,
      co2Level: 0.1,
      soilQuality: 0.0,
      localEconomy: 0.5
    }
  },
  speciesList: [ // <-- MOVED INSIDE THE OBJECT
    { name: "Iberian Lynx", icon: "🐱" },
    { name: "Imperial Eagle", icon: "🦅" },
    { name: "European Rabbit", icon: "🐇" },
    { name: "Genet", icon: "🐈" },
    { name: "Stork", icon: "🪶" },
  ]
}; // <-- MOVED TO THE END