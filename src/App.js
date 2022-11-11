import React from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Feedbackitem from "./components/Feedbackitem";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/feedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/about";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

const App = () => {


  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList/>
                </>
              }
            ></Route>

            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  );
};

export default App;
