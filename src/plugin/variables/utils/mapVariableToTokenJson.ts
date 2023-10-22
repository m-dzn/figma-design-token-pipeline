import { DESIGN_TOKEN_TYPE } from "../constants";
import { DesignToken } from "../types";
import { formatVariableToToken } from "./formatVariableToToken";
import { getVariable } from "./getVariable";
import { isVariableValue } from "./isVariableValue";

type Json = Record<string, any>;
export function mapVariableToToken({
  json,
  variable,
  modeId,
}: {
  json: Json;
  variable: Variable;
  modeId: string;
}): DesignToken {
  const prefix = "haru";

  const { valuesByMode } = variable; // id, name, resolvedType, scopes

  const currentValue: VariableValue = valuesByMode[modeId];

  const designToken = formatVariableToToken({ prefix, variable, modeId });

  if (isVariableValue(currentValue)) {
    const referenceVariable = getVariable(currentValue.id)!!;

    const referenceToken = formatVariableToToken({
      prefix,
      variable: referenceVariable,
      modeId,
    });

    return {
      name: designToken.name,
      value: referenceToken.name,
      type: DESIGN_TOKEN_TYPE.SEMANTIC,
    };
  }

  return designToken;
}
