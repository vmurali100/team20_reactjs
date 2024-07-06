import { useState } from "react";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    colors: {
      primary: "#007bff",
      secondary: "#6c757d",
    },
    fonts: {
      body: "Arial, sans-serif",
      heading: "Georgia, serif",
    },
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => ({
      colors: {
        primary: prevTheme.colors.primary === "#007bff" ? "#28a745" : "#007bff",
        secondary:
          prevTheme.colors.secondary === "#6c757d" ? "#17a2b8" : "#6c757d",
      },
      fonts: {
        body:
          prevTheme.fonts.body === "Arial, sans-serif"
            ? "Helvetica, sans-serif"
            : "Arial, sans-serif",
        heading:
          prevTheme.fonts.heading === "Georgia, serif"
            ? "Times New Roman, serif"
            : "Georgia, serif",
      },
    }));
  };

  return children({ theme, toggleTheme });
};

export default ThemeProvider