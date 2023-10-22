// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

import { getVariables } from "@/plugin/variables";

// This file holds the main code for plugins. Code in this file has access to
// the *figma document* via the figma global object.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).

// This shows the HTML page in "ui.html".
figma.showUI(__html__, {
  width: 520,
  height: 500,
});

figma.ui.onmessage = ({ type }) => {
  switch (type) {
    case "GET_VARIABLES":
      getVariables();
      break;
  }
};
