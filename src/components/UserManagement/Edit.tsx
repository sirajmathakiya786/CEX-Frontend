import { useLocation } from "react-router-dom";
import Header from "../Header";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import API from "../../config/DataServices";
import { toast } from "react-toastify";

interface FormValues {
  id: string;
  userName: string;
  fullName: string;
  email: string;
  phoneNumber: string;
}

export const Edit = () => {
  const { userData } = useLocation().state || {};
  const [formData, setFormData] = useState<FormValues>({  
    id: "",
    userName: "",
    fullName: "",
    email: "",
    phoneNumber: "",
  });
  
  useEffect(() => {
    if (userData) {
      setFormData(userData);
    }
  }, [userData]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('form',formData);
    try {
        
        const response = API.post('admin/user-management/add-user',formData)
        console.log(response);
        
        // setFormData({
        //     id: "",
        //     userName: "",
        //     fullName: "",
        //     email: "",
        //     phoneNumber: "",
        //     password: ""
        // });
        // toast.success()
    } catch (error: any) {
        toast.error(error.data.message)
    }
  };
  return (
    <>
      <Header />
      <div className="mt-5 flex items-center justify-content-center container">
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
                value={formData.fullName}
                onChange={handleChange}
              />
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
                value={formData.userName}
                onChange={handleChange}
              />
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
                value={formData.email}
                onChange={handleChange}
              />
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
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 ml-1 rounded"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};
