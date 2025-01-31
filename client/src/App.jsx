import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SetPage } from "pages/Set/DisplaySet/SetPage";
import { Library } from "pages/Library/Library";
import { Home } from "pages/Home/Home";
import { Auth } from "pages/Auth/Auth";
import { Navbar } from "common/router/Navbar";
import { Error } from "common/Error";
import { CreateSet } from "pages/Set/CreateSet/CreateSet";
import { Notifications } from "pages/User/Notifications";
import { Learn } from "pages/Games/Learn";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log(process.env.REACT_APP_SERVER_DOMAIN);
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cards/:id" element={<SetPage />}></Route>
          <Route path="/library" element={<Library />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/create" element={<CreateSet />}></Route>
          <Route path="/notifications" element={<Notifications />}></Route>
          <Route path="/learn/:id" element={<Learn />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
