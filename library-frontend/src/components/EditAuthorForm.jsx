import useField from "../hooks/useField";

const EditAuthorForm = ({ authors, onEditAuthor }) => {
  const born = useField("number");
  const author = useField("text", authors[0]?.name);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = `Do you really want to update persons ${author.field.value} birthyear to be ${born.field.value}`;
    if (!born.field.value || born.field.value.toString().trim() === "") {
      return;
    }
    if (!window.confirm(message)) {
      return;
    }
    await onEditAuthor({
      name: author.field.value,
      setToBeBorn: born.field.value,
    });
    born.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h3>Set birthyear</h3>
        <div>Choose an author:</div>
        <div>
          <select {...author.field} name="name">
            {authors.map((a) => (
              <option key={a.name} value={a.name}>
                {a.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <div>
            <label htmlFor="born">born</label>
          </div>
          <input id="born" {...born.field} />
        </div>
        <div>
          <button type="submit">Update</button>
        </div>
      </fieldset>
    </form>
  );
};

export default EditAuthorForm;
