import { Routes, Route } from "react-router-dom";
import PostList from "./PostList";
import PostDetails from "./PostDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PostList />}/>
        <Route path="/PostDetails" element={<PostDetails />}/>
      </Routes>
    </>
  )
}
export default App;
