import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"
import Pages from "./pages"
import "./assets/styles.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  </StrictMode>,
)
