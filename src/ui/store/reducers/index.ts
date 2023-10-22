import { variableSlice } from "./variableSlice";

export const reducer = {
  [variableSlice.name]: variableSlice.reducer,
};

export * from "./variableSlice";
