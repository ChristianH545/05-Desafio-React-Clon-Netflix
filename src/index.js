import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Inicio from "./pages/Inicio";
import Detail from "./pages/Detail";
import Series from "./pages/Series";
import Peliculas from "./pages/Peliculas";
import NovedadesPopulares from "./pages/NovedadesPopulares";
import MiLista from "./pages/MiLista";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Inicio />} />
        </Route>
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/series" element={<Series />} />
        <Route exact path="/peliculas" element={<Peliculas />} />
        <Route
          exact
          path="/novedadespopulares"
          element={<NovedadesPopulares />}
        />
        <Route exact path="/milista" element={<MiLista />} />
      </Routes>
    </BrowserRouter>
  </>
);
