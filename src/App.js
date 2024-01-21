import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./pages/layouts/DefaultLayout"
import ButtonPage from "./pages/ButtonPage"
import AccordionPage from "./pages/AccordionPage"
import ModalPage from "./pages/ModalPage"
import TablePage from "./pages/TablePage"
import DropdownPage from "./pages/DropdownPage"
import AutocompletePage from "./pages/AutocompletePage"
import SliderPage from "./pages/SliderPage"
import SkeletonPage from "./pages/SkeletonPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index path="button" element={<ButtonPage />} />
          <Route path="accordion" element={<AccordionPage />} />
          <Route path="dropdown" element={<DropdownPage />} />
          <Route path="modal" element={<ModalPage />} />
          <Route path="table" element={<TablePage />} />
          <Route path="autocomplete" element={<AutocompletePage />} />
          <Route path="slider" element={<SliderPage />} />
          <Route path="skeleton" element={<SkeletonPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
