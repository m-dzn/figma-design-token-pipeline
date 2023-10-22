export function usePostMessage<T>(payload: T) {
  parent.postMessage({ pluginMessage: payload }, "https://www.figma.com");
}
