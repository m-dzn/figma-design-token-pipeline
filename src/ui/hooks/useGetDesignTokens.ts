import { usePostMessage } from "../lib";

export function useGetDesignTokens() {
  function getDesignTokens() {
    usePostMessage({
      type: "GET_VARIABLES",
    });
  }

  return {
    getDesignTokens,
  };
}
