export default function Posts({ posts }) {
  return (
    <div style={{ width: "50%" }}>
      {posts.map((post) => (
        <p key={post.id} style={{ padding: "10px", border: "1px black solid" }}>
          {post.title}
        </p>
      ))}
    </div>
  );
}
