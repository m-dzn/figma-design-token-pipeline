import { DesignToken } from "../types";

const RGB_MULTIPLIER = 255;
export function parseTokenValue({
  value,
  resolvedType,
}: {
  value: VariableValue;
  resolvedType: VariableResolvedDataType;
}): DesignToken["value"] {
  switch (resolvedType) {
    case "COLOR":
      let { a, ...rgb } = value as RGBA;
      const r = Math.round(rgb.r * RGB_MULTIPLIER);
      const g = Math.round(rgb.g * RGB_MULTIPLIER);
      const b = Math.round(rgb.b * RGB_MULTIPLIER);

      return `rgba(${r}, ${g}, ${b}, ${a})`;
    default:
      return value;
  }
}
