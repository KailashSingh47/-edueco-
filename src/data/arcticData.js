export const arcticData = {
  name: "The Arctic Circle",
  description: "A fragile ecosystem of ice and sea, critical for regulating global climate and home to unique wildlife.",
  story: "The frozen north is a vast, icy wilderness that plays a crucial role in reflecting sunlight and keeping our planet cool. But as the planet warms, sea ice is disappearing at an alarming rate, opening the region to new shipping routes and oil exploration, putting immense pressure on this delicate environment.",
  initialState: {
    biodiversity: 80,
    co2Level: 15,
    soilQuality: 60, // Representing permafrost health
    localEconomy: 55
  },
  variables: {
    seaIceLoss: {
      label: "Sea Ice Loss",
      unit: "%",
      icon: "🧊",
      min: 0,
      max: 70,
      default: 10
    },
    shippingRoutes: {
      label: "Commercial Shipping Traffic",
      unit: "%",
      icon: "🚢",
      min: 0,
      max: 50,
      default: 5
    },
    oilDrilling: {
      label: "Oil & Gas Exploration",
      unit: "%",
      icon: "🛢️",
      min: 0,
      max: 60,
      default: 15
    }
  },
  impacts: {
    seaIceLoss: {
      biodiversity: -1.1,
      co2Level: 0.6,
      soilQuality: -0.9, // Permafrost thaw
      localEconomy: 0.4
    },
    shippingRoutes: {
      biodiversity: -0.4,
      co2Level: 0.3,
      soilQuality: -0.2,
      localEconomy: 0.5
    },
    oilDrilling: {
      biodiversity: -0.7,
      co2Level: 0.5,
      soilQuality: -0.6,
      localEconomy: 0.6
    }
  },
  speciesList: [
    { name: "Polar Bear", icon: "🐻‍❄️" },
    { name: "Walrus", icon: "🦭" },
    { name: "Arctic Fox", icon: "🦊" },
    { name: "Snowy Owl", icon: "🦉" },
    { name: "Narwhal", icon: "🐋" },
    { name: "Caribou", icon: "🦌" }
  ]
};