import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SettingsPage from "./components/SettingsPage";
import MyFooter from "./components/MyFooter";
import EditPage from "./components/EditPage";
import { useState } from "react";
import TVShows from "./components/TVShows";
import MovieDetails from "./components/MovieDetails";

const App = () => {
  const [homePage, setHomePage] = useState(true);
  const [settingsPage, setSettingsPage] = useState(false);
  const [editPage, setEditPage] = useState(false);

  const setEdit = () => {
    setEditPage(true);
    setSettingsPage(false);
    setHomePage(false);
  };
  const setSettings = () => {
    setEditPage(false);
    setSettingsPage(true);
    setHomePage(false);
  };
  const setHome = () => {
    setEditPage(false);
    setSettingsPage(false);
    setHomePage(true);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <MyNavbar editPage={editPage} setEdit={setEdit} setHome={setHome} setSettings={setSettings} />
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
                <MyFooter />
              </>
            }
          />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />

          <Route path="/editPage" element={<EditPage />} />
          <Route path="/settingsPage" element={<SettingsPage />} />
        </Routes>
      </BrowserRouter>

      {/* {homePage && (
        <>
          <HomePage />
          <MyFooter />
        </>
      )}
      {editPage && <EditPage />}
      {settingsPage && <SettingsPage />} */}
    </div>
  );
};

export default App;
