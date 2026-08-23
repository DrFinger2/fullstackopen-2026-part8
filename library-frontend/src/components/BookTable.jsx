const BookTable = ({ books }) => (
  <table>
    <tbody>
      <tr>
        <th>book name</th>
        <th>author</th>
        <th>published</th>
      </tr>
      {books.map((book) => (
        <tr key={book.title}>
          <td>{book.title}</td>
          <td>{book.author.name}</td>
          <td>{book.published}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default BookTable;
