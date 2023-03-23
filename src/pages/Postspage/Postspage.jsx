import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Post() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((posts) => (
          <li key={posts.id}>
            <Link to={`/post/${posts.id}`}>{posts.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
