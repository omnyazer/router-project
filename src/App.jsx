import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Register from "./pages/Register"; 

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="category/:categoryId" element={<Category />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
