import type { DesignToken, TokenOutputType } from "../types";
import {
  DESIGN_TOKEN_TYPE,
  OUTPUT_PREFIX,
  TOKEN_SEPARATOR,
} from "../constants";
import { parseTokenValue } from "./parseTokenValue";

interface FormatVariableNameProps {
  prefix: string;
  variable: Variable;
  modeId: string;
  type?: TokenOutputType;
}

export function formatVariableToToken({
  prefix,
  variable,
  modeId,
  type: outputType = "scss",
}: FormatVariableNameProps): DesignToken {
  const { name, resolvedType, valuesByMode } = variable;

  let tokenName = getTokenName({ prefix, name, outputType });

  const value = parseTokenValue({ value: valuesByMode[modeId], resolvedType });

  const { PRIMITIVE, SEMANTIC } = DESIGN_TOKEN_TYPE;
  const tokenType = value ? PRIMITIVE : SEMANTIC;

  return {
    name: tokenName,
    value,
    type: tokenType,
  };
}

function getTokenSeparator(outputType: TokenOutputType): string {
  switch (outputType) {
    default:
      return TOKEN_SEPARATOR.SCSS;
  }
}

function getTokenName({
  prefix,
  name,
  outputType,
}: {
  prefix: string;
  name: string;
  outputType: TokenOutputType;
}): string {
  const separator = getTokenSeparator(outputType);
  let tokenName = name.split(TOKEN_SEPARATOR.FIGMA).join(separator);
  if (prefix) {
    tokenName = [prefix, tokenName].join(separator);
  }

  switch (outputType) {
    case "scss":
      tokenName = OUTPUT_PREFIX.SCSS + tokenName;
      break;
  }

  return tokenName;
}
