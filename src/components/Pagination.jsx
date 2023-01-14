export default function Pagination({
  numOfPostsPerPage,
  paginate,
  totalNumOfPosts,
}) {
  const pageNumbers = [];
  for (
    let num = 1;
    num <= Math.ceil(totalNumOfPosts / numOfPostsPerPage);
    num++
  ) {
    pageNumbers.push(num);
  }

  return (
    <div style={{ display: "flex" }}>
      {pageNumbers.map((num) => (
        <p
          onClick={() => paginate(num)}
          key={num}
          style={{
            padding: "10px",
            border: "1px solid #AA336A",
            cursor: "pointer",
          }}
        >
          <a>{num}</a>
        </p>
      ))}
    </div>
  );
}
