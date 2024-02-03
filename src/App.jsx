import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/layoutContainer/Layout";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
