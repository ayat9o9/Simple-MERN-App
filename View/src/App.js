import "./App.css";
import AddPost from "./Components/AddPost";
import ListOfPosts from "./Components/ListOfPosts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes path="/">
        <div className="App">
          <Route index element={<AddPost />} />
          <Route path="posts" element={<ListOfPosts />} />
        </div>
      </Routes>
    </Router>
  );
}

export default App;
