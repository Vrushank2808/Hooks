import { useCallback, useMemo } from "react";
import { useTheme } from "../context/ThemeContext";
import Counter from "../components/Counter";

function ThemeToggle() {
  const { state: { isDark }, dispatch } = useTheme();

  const handleThemeToggle = useCallback(() => {
    dispatch({ type: "TOGGLE_THEME" });
  }, [dispatch]);

  const styles = useMemo(() => ({
    container: {
      textAlign: "center",
      margin: "20px 0",
      backgroundColor: isDark ? "#181818" : "#f0f0f0",
      color: isDark ? "#ffffff" : "#333333",
      minHeight: "100vh",
      padding: "30px"
    },
    button: {
      padding: "10px 20px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      backgroundColor: isDark ? "#444" : "#ccc",
      color: isDark ? "#fff" : "#000",
      transition: "all 0.3s ease",
      boxShadow: isDark
        ? "0 4px 8px rgba(0, 0, 0, 0.3)"
        : "0 4px 8px rgba(0, 0, 0, 0.1)",
      marginBottom: "20px"
    },
    counterContainer: {
      backgroundColor: isDark ? "#222" : "#f9f9f9",
      padding: "20px",
      borderRadius: "8px",
      textAlign: "center",
      boxShadow: isDark
        ? "0 4px 8px rgba(0, 0, 0, 0.3)"
        : "0 4px 8px rgba(0, 0, 0, 0.1)",
      maxWidth: "300px",
      margin: "0 auto"
    },
    heading: {
      fontSize: "24px",
      margin: "10px 0"
    },
    text: {
      fontSize: "18px",
      margin: "10px 0"
    },
    counterButton: {
      padding: "8px 15px",
      margin: "5px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      backgroundColor: isDark ? "#555" : "#ddd",
      color: isDark ? "#fff" : "#000",
      transition: "all 0.3s ease"
    }
  }), [isDark]);

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={handleThemeToggle}>
        Switch to {isDark ? "Light" : "Dark"} Mode
      </button>
      <Counter styles={styles} />
    </div>
  );
}

export default ThemeToggle;
