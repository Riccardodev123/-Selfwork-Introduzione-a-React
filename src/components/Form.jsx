import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setName(event.target.name.value.trim());
    setEmail(event.target.email.value.trim());
    setShowCard(true);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <form onSubmit={handleSubmit} className="mt-5">
              <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  name="name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail"
                  name="email"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-6">
            <div
              className={`card ${showCard ? "" : "d-none"}`}
              style={{ width: "18rem" }}
            >
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{name}</li>
                <li className="list-group-item">{email}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
