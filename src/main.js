import "./style.css";
import mermaid from "mermaid";

window.addEventListener("DOMContentLoaded", async () => {
  mermaid.initialize({
    startOnLoad: false,
    theme: "dark",
    themeVariables: {
      fontFamily: "Inter, sans-serif",
      primaryColor: "#1A1A1A",
      primaryTextColor: "#E5E5E5",
      primaryBorderColor: "#333333",
      lineColor: "#4A90E2",
      tertiaryColor: "#0E0E0E",
      clusterBkg: "#141414",
      clusterBorder: "#333333",
      noteBkgColor: "#1A1A1A",
      noteTextColor: "#E5E5E5"
    }
  });

  await mermaid.run();
});
