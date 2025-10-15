import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Detail() {
  const { id } = useParams();

  const [post, setPost] = useState([]);

  const getSinglePost = async () => {
    const promise = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const json = await promise.json();
    setPost(json);
  };

  useEffect(() => {
    getSinglePost();
  }, []);

  return (
    <>
      <h2>Detail page of:</h2>
      {post.title ? (
        <>
          <h3>Title: {post.title}</h3>
          <p>
            <strong>Body: </strong>
            {post.body}
          </p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
