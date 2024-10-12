import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
// import { Provider } from "react-redux";
// import { store } from "./store/store.ts";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <Provider store={store}> */}
        <App />
      {/* </Provider> */}
    </QueryClientProvider>
  </StrictMode>
);
