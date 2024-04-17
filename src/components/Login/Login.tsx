import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginSchema } from "../../validation/AllValidation";
import { Formik } from "formik";

const Login = () => {
  let navigate = useNavigate();
  const handleLogin = ()=>{
      setTimeout(() => {
          toast.success("Login Successfully")
          navigate("/dashboard")
      }, 3000);

  }
  const initialValues = {
    email: "",
    password: "",
  };

  const handleLoginFormSubmit = () => {
        
  };

  return (
    <>
      <div className="py-16">
        <Formik
          initialValues={initialValues}
          onSubmit={handleLoginFormSubmit}
          validationSchema={loginSchema}
        >
          {({ errors, handleSubmit,handleChange,values }) => (
            <form onSubmit={handleSubmit}>
              <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div
                  className="hidden lg:block lg:w-1/2 bg-cover"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')",
                  }}
                ></div>
                <div className="w-full p-8 lg:w-1/2">
                  <a
                    href="#"
                    className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
                  ></a>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 lg:w-1/4"></span>
                    <a
                      href="#"
                      className="text-xs text-center text-gray-500 uppercase"
                    >
                      login with email
                    </a>
                    <span className="border-b w-1/5 lg:w-1/4"></span>
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Email Address
                    </label>
                    <input
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                      type="email"
                      name="email"  
                      onChange={handleChange}
                      value={values.email}
                    />
                    <div style={{ color: 'red' }}>{errors.email}</div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                      </label>
                      <a href="#" className="text-xs text-gray-500">
                        Forget Password?
                      </a>
                    </div>
                    <input
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                      type="password"
                      name="password"
                      onChange={handleChange}
                      value={values.password}
                    />
                    <div style={{ color: 'red' }}>{errors.password}</div>
                  </div>
                  <div className="mt-8">
                    <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600" onClick={handleLogin}>
                      Login
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between"></div>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Login;
