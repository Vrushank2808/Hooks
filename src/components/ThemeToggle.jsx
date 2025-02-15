import { useCallback } from "react";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { state: { isDark }, dispatch } = useTheme();

  const handleThemeToggle = useCallback(() => {
    dispatch({ type: "TOGGLE_THEME" });
  }, [dispatch]);

  const style = {
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    backgroundColor: isDark ? "#333" : "#ddd",
    color: isDark ? "#fff" : "#000",
    transition: "all 0.3s ease",
    boxShadow: isDark
      ? "0 4px 8px rgba(0, 0, 0, 0.3)"
      : "0 4px 8px rgba(0, 0, 0, 0.1)"
  };

  const containerStyle = {
    textAlign: "center",
    margin: "20px 0"
  };

  return (
    <div style={containerStyle}>
      <button style={style} onClick={handleThemeToggle}>
        Switch to {isDark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default ThemeToggle;