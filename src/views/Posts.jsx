import { Link, useLoaderData } from "react-router";

export default function Posts() {
  const posts = useLoaderData();

  return (
    <ul>
      {posts ? (
        posts.map((post) => (
          <li key={post.id}>
            {post.title} - <Link to={`/posts/${post.id}`}>Detail</Link>
          </li>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </ul>
  );
}
