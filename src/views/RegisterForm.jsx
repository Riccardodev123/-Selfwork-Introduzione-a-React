import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function RegisterForm() {
  const { register } = useContext(UserContext);

  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();

  const handleChange = (event) => {
    if (event.target.id === "name") {
      setUserName(event.target.value);
    } else if (event.target.id === "email") {
      setUserEmail(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if ((userName, userEmail)) {
      register({ name: userName, email: userEmail });
    }
  };

  return (
    <section className="card shadow-sm my-4 rounded container">
      <div className="row">
        <div className="col-12">
          <h2 className="h4 text-center">Registrati</h2>
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="registerName" className="form-label">
                Username
              </label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="name"
                placeholder="Il tuo nome completo"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="registerEmail" className="form-label">
                Email
              </label>
              <input
                onChange={handleChange}
                type="email"
                className="form-control"
                id="email"
                placeholder="Inserisci la tua email"
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">
              Registrati
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
