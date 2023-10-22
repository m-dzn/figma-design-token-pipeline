export function isVariableValue(value: VariableValue): value is VariableAlias {
  return (value as any).id;
}
