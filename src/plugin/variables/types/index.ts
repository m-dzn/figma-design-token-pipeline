export type DesignTokenType = "primitive" | "semantic";

export interface DesignToken {
  name: string;
  value: any;
  type: DesignTokenType;
}

export type TokenOutputType = "scss";
