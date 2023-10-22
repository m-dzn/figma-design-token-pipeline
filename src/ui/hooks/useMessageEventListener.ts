// Third-party modules
import { useDispatch } from "react-redux";

// Local modules
import { variableSlice } from "@/ui/store";

export function useMessageEventListener() {
  // Init
  const dispatch = useDispatch();

  function messageEventListener(event: MessageEvent) {
    const message = event.data.pluginMessage;

    switch (message.type) {
      case "RETURN_COLLECTION_NAMES":
        // Get Variable collection names
        dispatch(variableSlice.actions.setCollectionNames(message.data));
        break;
      case "RETURN_VARIABLES":
        dispatch(variableSlice.actions.setVariables(message.data));
        console.log("메시지", message.data);
        break;
    }
  }

  return { messageEventListener };
}
