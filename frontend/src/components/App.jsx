import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./HomePage";
import AppLayout from "./AppLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="app" element={<AppLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
