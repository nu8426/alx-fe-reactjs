import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

export default function PostsComponent() {
  const { data, isLoading, error, refetch } = useQuery(
    "posts",
    async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      return res.data;
    }
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error loading posts.</p>;

  return (
    <div>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
