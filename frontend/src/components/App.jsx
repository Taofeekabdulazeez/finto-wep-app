import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./HomePage";
import AppLayout from "./AppLayout";
import Dashboard from "./Dashboard";
import Orders from "./Orders";
import Products from "./Products";
import Customer from "./Customer";
import Marketing from "./Marketing";
import Reports from "./Reports";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="app" element={<AppLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="products" element={<Products />} />
            <Route path="customer" element={<Customer />} />
            <Route path="marketing" element={<Marketing />} />
            <Route path="reports" element={<Reports />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
