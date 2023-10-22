// Third-party modules
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

// Local modules
import App from "@/ui/App";
import { reduxStore } from "@/ui/store";

document.addEventListener("DOMContentLoaded", () => {
  const rootNode = document.getElementById("root") as HTMLElement;
  ReactDOM.createRoot(rootNode).render(
    <Provider store={reduxStore}>
      <App />
    </Provider>
  );
});
