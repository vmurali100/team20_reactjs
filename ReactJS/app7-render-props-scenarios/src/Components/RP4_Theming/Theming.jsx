import React from "react";
import ThemeProvider from "./ThemeProvider";

const Theming = () => {
  return (
    <>
      <h1>Theming Example</h1>
      <ThemeProvider>
        {({ theme, toggleTheme }) => (
          <div
            style={{
              fontFamily: theme.fonts.body,
              color: theme.colors.primary,
            }}
          >
            <h2 style={{ fontFamily: theme.fonts.heading }}>Hello, World!</h2>
            <button
              onClick={toggleTheme}
              style={{ backgroundColor: theme.colors.secondary, color: "#fff" }}
            >
              Toggle Theme
            </button>
          </div>
        )}
      </ThemeProvider>
    </>
  );
};

export default Theming;
