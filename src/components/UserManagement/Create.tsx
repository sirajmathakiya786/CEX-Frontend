import Header from "../Header";
import { Formik } from "formik";
import { addUserSchema } from "../../validation/AllValidation";
import API from '../../config/DataServices';
import { toast } from 'react-toastify';


interface FormValues{
  userName: string,
  fullName: string,
  email: string,
  phoneNumber: string,
  password: string
}

export const Create = () => {
  const initialValues: FormValues = {
    userName: "",
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
  };

  const handleFormSubmit = async (values:FormValues) => {
    try {
      const response = await API.post('user/sign-up',values)
      toast.success(response.data.message)
    } catch (error: any) {
      toast.error(error.response.data.message)
    }
  };

  return (
    <>
      <Header />
      <div className="mt-5 flex items-center justify-content-center container">
        <Formik
          initialValues={initialValues}
          onSubmit={handleFormSubmit}
          validationSchema={addUserSchema}
        >
          {({ errors, setFieldValue, handleSubmit ,handleChange,values}) => (
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    FullName
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="fullName"
                    type="text"
                    name="fullName"
                    placeholder="FullName"
                    onChange={handleChange}
                    value={values.fullName}
                  />
                  <div style={{ color: 'red' }}>{errors.fullName}</div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    UserName
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="userName"
                    type="text"
                    name="userName"
                    placeholder="UserName"
                    onChange={handleChange}
                    value={values.userName}
                  />
                  <div style={{ color: 'red' }}>{errors?.userName}</div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={values.email}
                  />
                  <div style={{ color: 'red' }}>{errors?.email}</div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    PhoneNumber
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="phoneNumber"
                    type="text"
                    name="phoneNumber"
                    placeholder="PhoneNumber"
                    onChange={handleChange}
                    value={values.phoneNumber}
                  />
                  <div style={{ color: 'red' }}>{errors?.phoneNumber}</div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="password"
                    name="password"
                    placeholder="******************"
                    onChange={handleChange}
                    
                  />
                  <div style={{ color: 'red' }}>{errors?.password}</div>
                </div>
              </div>
              <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 ml-1 rounded"
                type="submit"
              >
                Sign Up
              </button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};
