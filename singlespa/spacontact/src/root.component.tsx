export default function Root() {
  function Button(props) {
    function handleSubmit() {
      console.log("hello world");
    }
    return (
      <input
        id={props.ID}
        type="submit"
        value="Submit"
        onClick={handleSubmit}
      />
    );
  }

  function Input(props) {
    function Checker(event) {
      let value = event.target.value;
      // console.log(value);
      let i = props.ID.toString();
      if (i == "name") {
        var re = /^[A-Za-z]+$/;
        let ans = re.test(value);
      } else if (i == "phone") {
        var re = /^[0-9]+$/;
        let ans = re.test(value);
      } else if (i == "email") {
        var re =
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let ans = re.test(value);
      }
    }
    return (
      <input
        autoComplete="off"
        type={props.type}
        placeholder={props.hint}
        id={props.ID}
        onChange={Checker}
      />
    );
  }

  return (
    <div className="main">
      <div className="main-body">
        <input
          className="contact"
          type="text"
          value="(+00) 12345 67890"
          readOnly
        />
      </div>
      <form className="main-form">
        <h1>Contact Us</h1> <br />
        <div>
          <label>Name</label> <br />
          <Input hint="Enter your name" type="text" ID="name" />
        </div>
        <div className="form-element">
          <label>Email</label> <br />
          <Input hint="Enter your Email ID" type="email" ID="email" />
        </div>
        <div className="form-element">
          <label>Phone</label> <br />
          <Input hint="Phone Number" type="text" ID="phone" />
        </div>
        <div className="form-element">
          <label>Message</label> <br />
          <textarea id="msg" placeholder="Questions/comments..."></textarea>
        </div>
        <Button ID="submit" />
      </form>
    </div>
  );
}
