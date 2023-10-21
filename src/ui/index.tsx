import ReactDOM from "react-dom/client";
import App from "./App";

document.addEventListener("DOMContentLoaded", () => {
  const rootNode = document.getElementById("root") as HTMLElement;
  ReactDOM.createRoot(rootNode).render(<App />);
});
