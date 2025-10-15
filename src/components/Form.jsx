import { useState } from "react";

export default function Form() {
  const [submissions, setSubmissions] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();

    if (!name || !email) return; // Prevenire submit vuoti

    // Aggiungi un nuovo oggetto all'array
    setSubmissions((prevSubmissions) => [...prevSubmissions, { name, email }]);

    // Reset dei campi input
    event.target.reset();
  };

  return (
    <div className="container">
      <div className="row">
        {/* FORM */}
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

        {/* CARDS */}
        <div className="col-6 mt-5">
          {submissions.map(({ name, email }, index) => (
            <div className="card mb-3" style={{ width: "18rem" }} key={index}>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{name}</li>
                <li className="list-group-item">{email}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
