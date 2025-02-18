import { Route, Routes } from "react-router"
import BaseLayout from "./base.layout"
import Home from "./home"
import TestId from "./test/[testId]"

export default function Pages() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="test/:testId" element={<TestId />} />
      </Route>
    </Routes>
  )
}
