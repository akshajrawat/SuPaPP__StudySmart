import { ThemeProvider } from "./Components/theme-provider";
import Routing from "./Routing/Routing";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routing />
    </ThemeProvider>
  );
}

export default App;
