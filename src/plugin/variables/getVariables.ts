import { getVariable, mapVariableToToken } from "./utils";

export function getVariables() {
  // Data
  const collections = figma.variables.getLocalVariableCollections();

  // Print
  console.log("Collections", collections);

  let allVariables = {};

  collections.forEach((collection, index) => {
    // Get Collection Detail
    const collectionDetail = figma.variables.getVariableCollectionById(
      collection.id
    );

    if (!collectionDetail) return;

    const { id, modes, name, variableIds } = collectionDetail;

    modes.forEach((mode) => {
      const { name: modeName, modeId } = mode;

      const modeVariables: Record<string, any> = {};

      // Variables
      variableIds.forEach((variableId, index) => {
        const variable = getVariable(variableId);
        // console.log(`Variable[${index}]`, variableDetail);

        if (!variable) return;

        const designToken = mapVariableToToken({
          json: modeVariables,
          variable,
          modeId,
        });

        modeVariables[designToken.name] = designToken.value;
      });

      console.log("모드", modeName, modeVariables);
      allVariables = { ...allVariables, ...modeVariables };
    });
  });

  figma.ui.postMessage({ type: "RETURN_VARIABLES", data: allVariables });

  // Send messages to UI
  const collectionNames = collections.map((collection) => collection.name);
  figma.ui.postMessage({
    type: "RETURN_COLLECTION_NAMES",
    data: collectionNames,
  });
}
