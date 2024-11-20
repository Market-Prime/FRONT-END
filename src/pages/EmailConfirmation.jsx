import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import logo from "../assets/Logo 1.png";
import axios from 'axios';
function EmailConfirmation() {
  const { token } = useParams();

  console.log('Token:', token); // Log the token to confirm it's being captu  
  const confirmEmail = async () =>{
    try{
        const response = await axios.post(`https://backend-server-0ddt.onrender.com/api/account/confirm/`, {token})
        console.log("Response", response);
        toast.success(response.data.message || "Account Confirmed, Please proceed to login with your details", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            style: { backgroundColor: "green" }, // Green background for success
          });
          setTimeout(() => {
            navigate("/Login");
          }, 5000);
    } catch (error) {
        const errorMessage = error.response && error.response.data && error.response.data.error
        ? error.response.data.error
        : error.message;

        console.log("The error message", errorMessage);
    
        // Display an error toast with a red background
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          style: { backgroundColor: "red" }, // Red background for errors
        });
    }
  }
  return (
    <div>
      <ToastContainer />
      <div className='w-1/3 bg-white rounded-3xl shadow-2xl m-auto my-56 py-10'>
        <img src={logo} alt="MarketPrime Logo" className="text-center mx-auto" />
        <h5 className='text-3xl text-center mt-5'>Confirm your Account</h5>
        <p  className='mt-3 text-center w-2/3 mx-auto'>Please click on the button below to confirm your account and continue shopping at MARKETPRIME</p>
        <Link onClick={confirmEmail} 
        className="w-1/3 mx-auto bg-aboutbg block py-3 rounded-lg text-white uppercase text-center font-bold mt-10">Confirm Account</Link>
      </div>
    </div>
  );
}

export default EmailConfirmation;
