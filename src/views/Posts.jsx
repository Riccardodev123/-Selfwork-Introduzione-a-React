import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Posts() {
  const [posts, setPosts] = useState();

  const getPosts = async () => {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await promise.json();
    setPosts(json);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <ul>
      {posts ? posts.map((post) => (
        <li key={post.id}>
          {post.title} - <Link to={`/posts/${post.id}`}>Detail</Link>
        </li>
      )) : <p>Loading...</p>}
    </ul>
  );
}
