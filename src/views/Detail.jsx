import { useLoaderData } from "react-router";

export default function Detail() {
  const post = useLoaderData();

  return (
    <>
      <h2>Detail page of:</h2>
      {post ? (
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
