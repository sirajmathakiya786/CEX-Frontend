import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { changePasswordValidationSchema } from "../../validation/AllValidation";

const ChangePassword = () => {
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues:{
            password: "",
            confirmPassword: ""
        },
        validationSchema:changePasswordValidationSchema,
        onSubmit:(value, {resetForm})=>{
            console.log(value);
            
        }
    })
  return (
    <>
      <main id="content" role="main" className="w-full  max-w-md mx-auto p-6">
        <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Change Password
              </h1>
            </div>
            <div className="mt-5">
              <form onSubmit={formik.handleSubmit}>
                <div className="grid gap-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold ml-1 mb-2 dark:text-white"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                        aria-describedby="password-error"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                      />
                      {formik.touched.password && formik.errors.password ? (
                                <p className="text-xs text-danger text-[13px] ms-2">{formik.errors.password}</p>
                            ) : null}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-bold ml-1 mb-2 dark:text-white"
                    >
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                        aria-describedby="confirmPassword-error"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                      />
                       {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                <p className="text-xs text-danger text-[13px] ms-2">{formik.errors.confirmPassword}</p>
                            ) : null}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                  >
                    Change Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ChangePassword;
