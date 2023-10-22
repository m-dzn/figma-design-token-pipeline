export function getVariable(variableId: string): Variable | null {
  return figma.variables.getVariableById(variableId);
}
