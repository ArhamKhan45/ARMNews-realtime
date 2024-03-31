import React, { useState } from "react";

import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  const [category, setCategory] = useState("general");
  const [keyword, setkeyword] = useState("");
  return (
    <div>
      <Navbar setCategory={setCategory} setkeyword={setkeyword} />
      {!keyword.length ? (
        <Home category={category} />
      ) : (
        <Home category={category} keyword={keyword} />
      )}
      {keyword}
    </div>
  );
}

export default App;
