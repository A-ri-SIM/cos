import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import { AuthContextProvider } from "./components/context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Header />
        <Outlet />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
