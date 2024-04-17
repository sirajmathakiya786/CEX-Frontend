import { Formik } from "formik";
import Header from "../Header";
import { addCoinValidationSchema } from "../../validation/AllValidation";

export const CreateCoin = () => {
  const initialValues = {
    baseCoin: "",
    quoteCoin: "",
  };
  const handleCoinFormSubmit = (value: any) => {
    console.log(value);
  };
  return (
    <>
      <Header />
      <Formik
        initialValues={initialValues}
        onSubmit={handleCoinFormSubmit}
        validationSchema={addCoinValidationSchema}
      >
        {({ errors, handleSubmit, handleChange, values }) => (
          <div className="mt-5 flex items-center justify-content-center container">
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Base Coin
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="baseCoin"
                    type="text"
                    name="baseCoin"
                    placeholder="BaseCoin"
                    onChange={handleChange}
                    value={values.baseCoin}
                  />
                  <div style={{ color: "red" }}>{errors.baseCoin}</div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Quote Coin
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="quoteCoin"
                    type="text"
                    name="quoteCoin"
                    placeholder="Quote Coin"
                    onChange={handleChange}
                    value={values.quoteCoin}
                  />
                  <div style={{ color: "red" }}>{errors.quoteCoin}</div>
                </div>
              </div>
              <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 ml-1 rounded"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </Formik>
    </>
  );
};
