import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Boton } from "./pages/component/boton/Boton.jsx";
import { EcomScreen } from "./pages/EcomScreen/EcomScreen.jsx";
import Footer from "./pages/footer/Footer";
import Header from "./pages/header/Header.jsx";
import { Pdp } from "./pages/pdp/Pdp.jsx";

const App = () => {
  return (
    <>
      <div>
        {/* <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Pdp
                  sendIdUser={(element) => console.log("id desde comp hijo", element)}
                />
              }
            />
            <Route path="pdp" element={<Pdp />}>
              <Route path=":button" element={<Boton />} />
            </Route>
          </Routes>
        </Router> */}

      </div>
      <div className="maincontainer">
        <EcomScreen />
        <Footer />
      </div>

    </>
  );
}

export default App;
