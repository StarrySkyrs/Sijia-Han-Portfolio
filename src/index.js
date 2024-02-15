import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Blog,
  Posts,
  Post,
} from "./components";
import './index.scss';

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/Sijia-Han" element={<Home />} />
      <Route path="/Sijia-Han/About" element={<About />} />
      <Route path="/Sijia-Han/Contact" element={<Contact />} />
      <Route path="/Sijia-Han/Blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();