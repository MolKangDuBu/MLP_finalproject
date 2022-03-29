import React from "react";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Main from "./pages/Main";
import HeaderAside from "./components/HeaderAside";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Seoul from "./pages/Seoul";
import Detail from "./pages/Detail";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../src/redux/modules/user";
export const history = createBrowserHistory();

function App() {
  const dispatch = useDispatch();

  const is_session = localStorage.getItem("token");

  React.useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCheckDB());
    }
  }, []);

  return (
    <HistoryRouter history={history}>
      <HeaderAside />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/location" element={<Seoul />} />
        <Route path="/detail/:placeId" element={<Detail />} />
      </Routes>
      <Footer />
    </HistoryRouter>
  );
}

export default App;
