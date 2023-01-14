import { useEffect, useState } from "react";

import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const numOfPostsPerPage = 5;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        console.log(posts);
        setPosts(posts);
      })
      .catch(console.error);
  }, []);

  // get the array of the current posts
  const indexOfLastPostInPage = currentPage * numOfPostsPerPage;
  const indexOfFirstPostInPage = indexOfLastPostInPage - numOfPostsPerPage;
  const currentPosts = posts.slice(
    indexOfFirstPostInPage,
    indexOfLastPostInPage
  );

  const paginate = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <div
      style={{
        padding: "10px 40px",
        backgroundColor: "azure",
        height: "100vh",
      }}
    >
      <h1 style={{ color: "#AA336A" }}>My blog</h1>
      <Posts posts={currentPosts} />
      <Pagination
        totalNumOfPosts={posts.length}
        numOfPostsPerPage={numOfPostsPerPage}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
