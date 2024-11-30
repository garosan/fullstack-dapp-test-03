import Layout from "./frontend/components/Layout";
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "./frontend/components/Wallet";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./frontend/styles/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TokenOperations from "./frontend/features/TokenOperations";

function App() {
  return (
    <Web3ReactProvider connectors={getLibrary}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<TokenOperations />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </Web3ReactProvider>
  );
}

export default App;
