export default function LoginForm() {
  return (
    <section className="card shadow-sm my-4 rounded container">
      <div className="row">
        <div className="col-12">
          <h2 className="h4 text-center">Login</h2>
          <form className="card-body">
            <div className="mb-3">
              <label htmlFor="loginEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="loginEmail"
                placeholder="Inserisci la tua email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="loginPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="loginPassword"
                placeholder="Inserisci la password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Accedi
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}