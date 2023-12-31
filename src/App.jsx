import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import { Provider } from "react-redux";
import store from "./store/store";
import Layout from "./ui/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route
              index
              element={
                <ErrorBoundary>
                  <Home />
                </ErrorBoundary>
              }
            />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
