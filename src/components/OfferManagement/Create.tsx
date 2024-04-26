import { useState, ChangeEvent } from "react";
import Header from "../Header";
import { offerValidationSchema } from "../../validation/AllValidation";
import { Formik } from "formik";
import API from "../../config/DataServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const OfferCreate = () => {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const initialValues = {
    startDate: "",
    endDate: "",
    title: "",
    description: "",
    offerImage: "",
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>, setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void) => {
    const file = event.target.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const imagePreview = reader.result as string;
            setFieldValue('offerImage', file);
            setImagePreview(imagePreview);
        };
        reader.readAsDataURL(file);
    }
};

  const handleOfferFormSubmit = async(values : any) => {
    try {
      const formData = new FormData();
      formData.append('startDate', values.startDate);
      formData.append('endDate', values.endDate);
      formData.append('title', values.title);
      formData.append('description', values.description);
      formData.append('offerImage', values.offerImage);
      
      const response = await API.post('admin/offer-management/add', formData)
      toast.success(response.data.message)
      setTimeout(()=>{
        navigate('/offer-list')
      },2000)
      
    } catch (error: any) {
      toast.error(error.response.data.message)
    }
  };
  return (
    <>
      <Header />
      <Formik
        initialValues={initialValues}
        onSubmit={handleOfferFormSubmit}
        validationSchema={offerValidationSchema}
      >
        {({ errors, setFieldValue,handleSubmit, handleChange, values }) => (
          <form onSubmit={handleSubmit}>
            <div className="mt-5 container">
              <div className="flex justify-center mb-5">
                <div className="w-full max-w-md">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="start-date"
                  >
                    Start Date
                  </label>
                  <input
                    id="start-date"
                    type="date"
                    name="startDate"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date"
                    min={new Date().toISOString().split("T")[0]}
                    onChange={handleChange}
                    value={values.startDate}
                  />
                  <div style={{ color: 'red' }}>{errors.startDate}</div>
                </div>
              </div>
              <div className="flex justify-center mb-5">
                <div className="w-full max-w-md">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="end-date"
                  >
                    End Date
                  </label>
                  <input
                    id="end-date"
                    type="date"
                    name="endDate"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date"
                    min={new Date().toISOString().split("T")[0]}
                    onChange={handleChange}
                    value={values.endDate}
                  />
                  <div style={{ color: 'red' }}>{errors.endDate}</div>
                </div>
              </div>
              <div className="flex justify-center mb-5">
                <div className="w-full max-w-md">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="title"
                    type="text"
                    name="title"
                    placeholder="Title"
                    onChange={handleChange}
                    value={values.title}
                  />
                  <div style={{ color: 'red' }}>{errors.title}</div>
                </div>
              </div>
              <div className="flex justify-center mb-5">
                <div className="w-full max-w-md">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <textarea
                    className="resize-none bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full"
                    id="description"
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                    value={values.description}
                  ></textarea>
                  <div style={{ color: 'red' }}>{errors.description}</div>
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-content-center container">
              <div className="w-full max-w-md">
                <div className="flex justify-center items-center mb-5">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mr-3"
                    htmlFor="file"
                  >
                    Choose profile photo
                  </label>
                  <input
                    type="file"
                    name="offerImage"
                    onChange={(event) => handleImageChange(event, setFieldValue)}
                
                    className="block text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                  />
                </div>
                <div style={{ color: 'red' }}>{errors.offerImage}</div>
                {imagePreview && (
                  <img
                    id="preview_img"
                    className="h-16 w-16 object-cover rounded-full"
                    src={imagePreview}
                    alt="Preview"
                  />
                )}

                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default OfferCreate;
