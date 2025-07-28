import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";
import About from "./About";
import Header from "./Header";
console.log(blogData);

function App() {
  return (
    <div className="App">
      <ArticleList posts={blogData.posts}/>
      <About/>
      <Header/>
      
    </div>
    
  );
}

export default App;