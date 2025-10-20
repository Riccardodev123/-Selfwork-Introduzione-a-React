export default function RegisterForm() {
  return (
    <section className="card shadow-sm my-4 rounded container">
      <div className="row">
        <div className="col-12">
          <h2 className="h4 text-center">Registrati</h2>
          <form className="card-body">
            <div className="mb-3">
              <label htmlFor="registerName" className="form-label">
                Nome completo
              </label>
              <input
                type="text"
                className="form-control"
                id="registerName"
                placeholder="Il tuo nome completo"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="registerEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="registerEmail"
                placeholder="Inserisci la tua email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="registerPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="registerPassword"
                placeholder="Crea una password"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="registerConfirmPassword" className="form-label">
                Conferma Password
              </label>
              <input
                type="password"
                className="form-control"
                id="registerConfirmPassword"
                placeholder="Ripeti la password"
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
