import { ColorModeContext, useMode } from './theme';
import { CssBaseline, dividerClasses, ThemeProvider } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <div className="app"></div>;
    </ColorModeContext.Provider>
  );
}

export default App;
