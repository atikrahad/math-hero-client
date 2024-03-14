import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import image from "../../assets/Authentication/image.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import Logo from "../../Components/Logo";

const Register = () => {
  const [isOpen, setIsopen] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div className=" flex items-center justify-center min-h-screen">
      <div
        className="max-w-screen-2xl border md:max-h-screen overflow-hidden relative flex items-center bg-[#f3f3f3]
       mx-auto"
      >
        <div className="px-10 w-[35%]">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold">Register now!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm ">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="input input-bordered rounded-sm bg-transparent flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>

                    <input
                      type="text"
                      name="username"
                      className="grow"
                      placeholder="Username"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="input input-bordered rounded-sm bg-transparent flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input
                      type="text"
                      name="email"
                      className="grow"
                      placeholder="Email"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="input input-bordered rounded-sm bg-transparent flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type={isOpen ? "text" : "password"}
                      name="password"
                      className="grow"
                      placeholder="Password"
                    />
                    <button
                      onClick={() => setIsopen(!isOpen)}
                      className="absolute text-xl right-10"
                    >
                      {isOpen ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                    </button>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <button className="">
                    <Button title={"Login"}></Button>
                  </button>
                </div>
                <p>
                  Already have account! <Link to="/login">Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        ;
        <div className="hidden  w-[65%] min-h-screen border md:contents">
          <img className="h-full" src={image} alt="" />

          <div className="absolute md:right-6  lg:right-52  w-[50%] flex-col flex items-center justify-center">
            <Logo></Logo>
            <h1 className="text-4xl font-medium">Welcome To Math Hero</h1>
            <p className="text-justify">
              Unlock a world where numbers unleash creativity, logic, and
              problem-solving skills. Whether you're a math enthusiast, a
              student eager to learn, or a teacher looking for new ways to
              inspire, MathWiz is your go-to portal. But first, let's ensure
              your journey is secure and personalized.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
