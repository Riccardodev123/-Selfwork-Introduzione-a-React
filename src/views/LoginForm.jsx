import { useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => console.log(data);

  return (
    <main className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

        {/* Email */}
        <div className="form-control">
          <label htmlFor="loginEmail" className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            id="loginEmail"
            type="email"
            placeholder="Inserisci la tua email"
            {...register("email", {
              required: "Email field is required",
              maxLength: {
                value: 50,
                message: "Email cannot exceed 50 characters",
              },
            })}
            className="input input-bordered w-full bg-white"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="form-control">
          <label htmlFor="loginPassword" className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            id="loginPassword"
            type="password"
            placeholder="Inserisci la password"
            {...register("password", {
              required: "Password field is required",
              maxLength: {
                value: 50,
                message: "Password cannot exceed 50 characters",
              },
            })}
            className="input input-bordered w-full bg-white"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button type="submit" className="btn btn-primary w-full">
          Accedi
        </button>
      </form>
    </main>
  );
}
