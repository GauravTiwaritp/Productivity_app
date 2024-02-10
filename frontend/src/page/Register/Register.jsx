import { useState } from "react";
import Text from "../../components/textArea/Text";
import { useSelector, useDispatch } from "react-redux";
import { RegexHandling } from "../../features/Function/FunctionSlice";
const Register = () => {
  const dispatch = useDispatch();
  const {
    FirstNameError,
    LastNameError,
    EmailError,
    PasswordError,
    ConfirmPasswordError,
  } = useSelector((store) => {
    return store.func;
  });

  const initialState = {
    Firstname: "",
    Lastname: "",
    Email: "",
    Username: "",
    Password: "",
  };
  const [auth, setAuth] = useState(initialState);

  const handleChange = (e) => {
    setAuth({
      ...auth,
      [e.target.name]: e.target.value,
    });
    const name = e.target.name;
    const value = e.target.value;
    dispatch(RegexHandling({ name, value }));
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-400 to-[#0055D1] rounded-md filter blur-3xl opacity-50 -z-50"></div>
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen px-6">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{
                backgroundImage:
                  "url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')",
              }}
            ></div>
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <Text
                      name="Firstname"
                      value={auth.Firstname}
                      class1="block mb-2 text-sm font-bold text-gray-700"
                      class2="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      placeholder="First Name"
                      handleChange={handleChange}
                      type="text"
                      error={FirstNameError}
                    />
                  </div>
                  <div className="md:ml-2">
                    <Text
                      name="Lastname"
                      value={auth.Lastname}
                      class1="block mb-2 text-sm font-bold text-gray-700"
                      class2="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      placeholder="Last Name"
                      handleChange={handleChange}
                      type="text"
                      error={LastNameError}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <Text
                    name="Email"
                    value={auth.Email}
                    class1="block mb-2 text-sm font-bold text-gray-700"
                    class2="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    placeholder="Email"
                    handleChange={handleChange}
                    type="text"
                    error={EmailError}
                  />
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <Text
                      name="Password"
                      value={auth.Password}
                      class1="block mb-2 text-sm font-bold text-gray-700"
                      class2="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      placeholder="Password"
                      handleChange={handleChange}
                      type="password"
                      error={PasswordError}
                    />
                  </div>
                  <div className="md:ml-2">
                    <Text
                      name="Confirm Password"
                      value={auth.ConfirmPassword}
                      class1="block mb-2 text-sm font-bold text-gray-700"
                      class2="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      placeholder="ConfirmPassword"
                      handleChange={handleChange}
                      type="password"
                      error={ConfirmPasswordError}
                    />
                  </div>
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Register Account
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="./index.html"
                  >
                    Already have an account? Login!
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
