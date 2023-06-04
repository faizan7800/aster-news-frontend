import "./App.css";
import React, { useState } from "react";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import "antd/dist/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import TopStories from "./components/Top Stories/TopStories";
import Story from "./components/Top Stories/Story";
import Health from "./components/Categories/Health";
import Sports from "./components/Categories/Sports";
import Entertainment from "./components/Categories/Entertainment";
import General from "./components/Categories/General";
import Science from "./components/Categories/Science";
import Business from "./components/Categories/Business";
import Technology from "./components/Categories/Technology";
import LocalHealth from "./components/LocalNews/Health";
import LocalSports from "./components/LocalNews/Sports";
import LocalShowBiz from "./components/LocalNews/Showbiz";
import LocalBusiness from "./components/LocalNews/Business";
import LocalEntertainment from "./components/LocalNews/Entertainment";
import LocalTechnology from "./components/LocalNews/Technology";
import Country from "./components/Countries/Country";
import BookmarkedNews from "./components/BookmarkedNews/BookmarkedNews";
function App() {
  const [toggleMode, setToggleMode] = useState(false);
  function handleToggleMode() {
    if (toggleMode) {
      setToggleMode(false);
    } else {
      setToggleMode(true);
    }
    console.log(toggleMode);
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route
            exact
            path="/dashboard"
            element={
              <ProtectedRoute role={["user"]}>
                <Dashboard
                  toggleMode={toggleMode}
                  handleToggleMode={handleToggleMode}
                />
              </ProtectedRoute>
            }
          >
            <Route
              exact
              path=""
              element={<TopStories toggleMode={toggleMode} />}
            />
            <Route
              exact
              path="bookmarkedNews"
              element={<BookmarkedNews toggleMode={toggleMode} />}
            />
            <Route exact path="bookmarkedNews/:id" element={<Story />} />
            <Route
              exact
              path="topstories/general"
              element={
                <>
                  <General toggleMode={toggleMode} />
                </>
              }
            />
            <Route
              exact
              path="country/us"
              element={<Country toggleMode={toggleMode} />}
            />
            <Route exact path="country/gb" element={<Country />} />
            <Route exact path="country/au" element={<Country />} />
            <Route exact path="country/ca" element={<Country />} />
            <Route exact path="country/ae" element={<Country />} />
            <Route exact path="country/ar" element={<Country />} />
            <Route exact path="country/at" element={<Country />} />
            <Route exact path="country/be" element={<Country />} />
            <Route exact path="country/bg" element={<Country />} />
            <Route exact path="country/us/:id" element={<Story />} />
            <Route exact path="country/gb/:id" element={<Story />} />
            <Route exact path="country/au/:id" element={<Story />} />
            <Route exact path="country/ca/:id" element={<Story />} />
            <Route exact path="country/ae/:id" element={<Story />} />
            <Route exact path="country/ar/:id" element={<Story />} />
            <Route exact path="country/at/:id" element={<Story />} />
            <Route exact path="country/be/:id" element={<Story />} />
            <Route exact path="country/bg/:id" element={<Story />} />
            <Route exact path="topstories/story" element={<Story />} />
            <Route
              exact
              path="int/health"
              element={<Health toggleMode={toggleMode} />}
            />
            <Route exact path="int/health/:id" element={<Story />} />
            <Route
              exact
              path="int/sports"
              element={<Sports toggleMode={toggleMode} />}
            />
            <Route exact path="int/sports/:id" element={<Story />} />
            <Route
              exact
              path="int/entertainment"
              element={<Entertainment toggleMode={toggleMode} />}
            />
            <Route exact path="int/entertainment/:id" element={<Story />} />
            <Route
              exact
              path="int/general"
              element={<General toggleMode={toggleMode} />}
            />
            <Route exact path="int/general/:id" element={<Story />} />
            <Route
              exact
              path="int/business"
              element={<Business toggleMode={toggleMode} />}
            />
            <Route exact path="int/business/:id" element={<Story />} />
            <Route
              exact
              path="int/science"
              element={<Science toggleMode={toggleMode} />}
            />
            <Route exact path="int/science/:id" element={<Story />} />
            <Route
              exact
              path="int/technology"
              element={<Technology toggleMode={toggleMode} />}
            />
            <Route exact path="int/technology/:id" element={<Story />} />
            {/* local news */}
            <Route
              exact
              path="local/health"
              element={<LocalHealth toggleMode={toggleMode} />}
            />
            <Route exact path="local/health/:id" element={<Story />} />
            <Route
              exact
              path="local/sports"
              element={<LocalSports toggleMode={toggleMode} />}
            />
            <Route exact path="local/sports/:id" element={<Story />} />
            <Route
              exact
              path="local/business"
              element={<LocalBusiness toggleMode={toggleMode} />}
            />
            <Route exact path="local/business/:id" element={<Story />} />
            <Route
              exact
              path="local/showbiz"
              element={<LocalShowBiz toggleMode={toggleMode} />}
            />
            <Route exact path="local/showbiz/:id" element={<Story />} />
            <Route
              exact
              path="local/entertainment"
              element={<LocalEntertainment toggleMode={toggleMode} />}
            />
            <Route exact path="local/entertainment/:id" element={<Story />} />
            <Route
              exact
              path="local/technology"
              element={<LocalTechnology toggleMode={toggleMode} />}
            />
            <Route exact path="local/technology/:id" element={<Story />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
