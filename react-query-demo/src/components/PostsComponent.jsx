import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

// Function to fetch posts
const fetchPosts = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
};

export default function PostsComponent() {
  const { data, isLoading, isError, error, refetch } = useQuery("posts", fetchPosts, {
    cacheTime: 1000 * 60 * 5,          // Cache data for 5 minutes
    staleTime: 1000 * 60,              // Data considered fresh for 1 minute
    refetchOnWindowFocus: false,       // Do not refetch when window refocuses
    keepPreviousData: true,            // Keep previous data while fetching new
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error loading posts: {error.message}</p>;

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
