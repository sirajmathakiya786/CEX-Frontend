import { useState } from "react";
import OTPInput from "react-otp-input";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import API from "../../config/DataServices";


const VerifyOTP = () => {
    let navigate = useNavigate()
  const [otp, setOtp] = useState("");
  console.log(otp,"otp")

  const location = useLocation();
  const email = location?.state?.email;
  
  const data ={
    otp:+otp,
    email :email,
  }
  
  const handleverifyOtpSubmit = async () => {
    try {
        const response = await API.post('admin/verify-otp', data)
        console.log(response);
        
        toast.success(response.data.message)
        
        // setTimeout(()=>{
        //     navigate('/change-password')
        // })   
    } catch (error:any) {
        toast.error(error.response.data.message)
    }
  };

  return (
    <>
      <main id="content" role="main" className="w-full  max-w-md mx-auto p-6">
        <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Verify OTP
              </h1>
            </div>
            <div style={{ width: "700PX" }}>
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
                inputStyle={{
                  width: "30px",
                  height: "35px",
                  margin: "10px 10px",
                  fontSize: "1rem",
                  borderRadius: 4,
                  border: "2px solid rgba(0,0,0,0.3)",
                  outline: "none",
                }}
              />
            </div>
            <div className="text-center mt-4">
              <button onClick={handleverifyOtpSubmit}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Submit
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default VerifyOTP;
