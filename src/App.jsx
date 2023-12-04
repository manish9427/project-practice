import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import PageNotFound from "./pages/404/pageNotFound";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import TestApi from "./utils/TestApi";
// import { store } from "./store/store";
// import { Provider } from "react-redux";

// function App() {
//   return (
//     <Provider store={store}>
//       <div>
//         <TestApi />
//       </div>
//     </Provider>
//   );
// }

// export default App;
