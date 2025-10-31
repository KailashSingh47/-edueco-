import { useState, useMemo } from 'react';

export const useSimulation = (regionData) => {
  const initialState = regionData?.initialState || { biodiversity: 50, co2Level: 50, soilQuality: 50, localEconomy: 50 };
  const impacts = regionData?.impacts || {};
  const varDefaults = regionData?.variables || {};

  const [variables, setVariables] = useState(() => {
    const initialVars = {};
    for (const key in varDefaults) {
      if (varDefaults[key] && typeof varDefaults[key].default !== 'undefined') {
        initialVars[key] = varDefaults[key].default;
      }
    }
    return initialVars;
  });

  const updateVariable = (key, value) => {
    setVariables(prev => ({ ...prev, [key]: value }));
  };

  // ADD THIS NEW RESET FUNCTION
  const reset = () => {
    const initialVars = {};
    for (const key in varDefaults) {
      if (varDefaults[key] && typeof varDefaults[key].default !== 'undefined') {
        initialVars[key] = varDefaults[key].default;
      }
    }
    setVariables(initialVars);
  };

  const outcomes = useMemo(() => {
    // ... (keep the existing outcomes logic)
    let newOutcomes = { ...initialState };
    for (const varName in variables) {
      const change = variables[varName] - (varDefaults[varName]?.default || 0);
      const impactRules = impacts[varName];
      if (impactRules) {
        for (const metric in impactRules) {
          newOutcomes[metric] = (newOutcomes[metric] || 0) + change * impactRules[metric];
        }
      }
    }
    for (const metric in newOutcomes) {
      newOutcomes[metric] = Math.max(0, Math.min(100, newOutcomes[metric]));
    }
    return newOutcomes;
  }, [variables, regionData]);

  return { variables, outcomes, updateVariable, reset }; // <-- ADD 'reset' HERE
};