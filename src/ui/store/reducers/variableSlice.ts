// Third-party modules
import { createSelector, createSlice } from "@reduxjs/toolkit";

// Local modules
import { VariableInitialState } from "./variableSlice.types";
import { RootState } from "../store";

const initialState: VariableInitialState = {
  collectionNames: [],
  variables: {},
};

export const variableSlice = createSlice({
  name: "variable",
  initialState,
  reducers: {
    setCollectionNames: (
      state,
      { payload }: { payload: VariableInitialState["collectionNames"] }
    ) => {
      state.collectionNames = payload;
    },

    setVariables: (state, { payload }) => {
      state.variables = payload;
    },
  },
});

export const variableSelector = {
  collectionNames: (state: RootState) =>
    state[variableSlice.name].collectionNames,
  variables: (state: RootState) => state[variableSlice.name].variables,
};
