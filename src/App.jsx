import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Body from "./Body";
import Login from "./login";
import Profile from "./profile";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
