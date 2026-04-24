import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from "./features/auth/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);