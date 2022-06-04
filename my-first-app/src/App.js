import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Create from "./components/Create"
import Register from "./components/Register";
import Catalog from "./components/Catalog/Catalog";
import Details from "./components/Details";
import Edit from "./components/Edit"

function App() {
  return (
    <div id="box">

    <Header/>
    <main id="main-content">
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/create" element={<Create/>} />
    <Route path="/catalog" element={<Catalog/>} />
    <Route path="/details/:gameId" element={<Details/>} />
    <Route path="/edit/:gameId" element={<Edit/>} />
    </Routes>
    </main>
</div>
);
    }

export default App;
