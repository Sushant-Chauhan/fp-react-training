export default function FormDataForm() {
  function handleSubmit(event) {
    event.preventDefault();

    const formDataVal = new FormData(event.target);
    for (let [key, data] of formDataVal) {
      console.log(key, data);
    }

    const formData = Object.fromEntries(formDataVal);
    console.log(formData);

    const name = formDataVal.get("name");
    const color = formDataVal.get("color");
    const like = formDataVal.get("like");

    console.log(name, color, like);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
      </div>
      <div className="form-control">
        <label>
          Favorite color:
          <select name="color">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
        </label>
      </div>
      <div className="form-control">
        <label>
          Do you like React?
          <input name="like" type="checkbox" />
        </label>
      </div>
      <div className="form-control">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
