import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function SingleBlogPage() {

  const { id } = useParams();
  const [post, setPost] = useState(null);
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [id]);
  
  return (
    <main>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to="/posts">Back to posts</Link>
        </>
      )}
    </main>
  );
}
