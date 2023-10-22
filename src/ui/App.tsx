// Third-party modules
import { useEffect } from "react";
import { useSelector } from "react-redux";

// Local modules
import "@/ui/styles/main.scss";
import { useGetDesignTokens, useMessageEventListener } from "@/ui/hooks";
import { variableSelector } from "./store";

const App = () => {
  // Init
  const { getDesignTokens } = useGetDesignTokens();
  const { messageEventListener } = useMessageEventListener();

  const collectionNames = useSelector(variableSelector.collectionNames);
  const variables = useSelector(variableSelector.variables);

  useEffect(() => {
    console.log("메시지 이벤트 리스너 등록");
    window.onmessage = (event) => messageEventListener(event as MessageEvent);
    getDesignTokens();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(variables).map((key) => (
            <tr key={key}>
              <th align="left" style={{ paddingRight: 40 }}>
                {key}
              </th>
              <td align="right">{variables[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
