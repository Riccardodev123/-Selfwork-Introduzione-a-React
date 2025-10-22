import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const showData = (data) => console.log(data);

  return (
    <main className="min-h-50 flex items-center justify-center p-4 bg-[#1D232A]">
      <form
        onSubmit={handleSubmit(showData)}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Sign Up
        </h2>

        {/* Username */}
        <div className="form-control">
          <label htmlFor="username" className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            {...register("username", {
              required: "Username field is required",
              maxLength: {
                value: 50,
                message: "Username field can be atleast 50 characters",
              },
            })}
            className="input input-bordered w-full bg-white"
          />
          {errors.username && (
            <p className="text-danger">{errors.username.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="form-control">
          <label htmlFor="email" className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email field is required",
              maxLength: {
                value: 50,
                message: "Email field can be atleast 50 characters",
              },
            })}
            className="input input-bordered w-full bg-white"
          />
          {errors.email && (
            <p className="text-danger">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="form-control">
          <label htmlFor="password" className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password field is required",
              maxLength: {
                value: 50,
                message: "Password field can be atleast 50 characters",
              },
            })}
            className="input input-bordered w-full bg-white"
          />
          {errors.password && (
            <p className="text-danger">{errors.password.message}</p>
          )}
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-primary w-full">
          Submit
        </button>
      </form>
    </main>
  );
}
