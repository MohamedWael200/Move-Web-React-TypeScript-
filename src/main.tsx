import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Layout from "./components/Layout.tsx";
import App from "./App.tsx";
import Moves from "./pages/moves/Moves.tsx";
import Contact from "./pages/contact/Contact.tsx";
import NotFound from "./components/NotFound.tsx";
import MoveDetails from "./pages/moves/MoveDetails.tsx";
import Register from "./pages/auth/Register.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout/>}>
                  <Route index element={<App />} />
                  <Route path="moves" element={<Moves />} />
                  <Route path="move/:id" element={<MoveDetails />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="/register" element={<Register />} />
              </Route>
              <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
