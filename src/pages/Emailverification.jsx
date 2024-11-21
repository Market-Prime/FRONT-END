// import React, { useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import './Emailverification.css';
// import { Link } from "react-router-dom";
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Emailverification = () => {
//   const { token } = useParams();
//   console.log("This is the token", token);
//   const navigate = useNavigate();

//   const handleConfirm = async () => {
//     try {
//       const response = await axios.post(
//         `https://backend-server-0ddt.onrender.com/api/account/confirm/${token}`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       toast.success(`Account Confirmed: ${response.data.message || 'Confirmed'}`, {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: true,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//         style: { backgroundColor: "red" },
//       });
//       setTimeout(() => {
//         navigate("/EmailConfirmation");
//       }, 5000);
//     } catch (error) {
//       const errorMessage = error.response && error.response.data && error.response.data.error
//         ? error.response.data.error
//         : error.message;
//       toast.error(errorMessage, {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: true,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         theme: "colored",
//         style: { backgroundColor: "red" },
//       });
//       console.error('Error confirming email:', errorMessage);
//     }
//   };

//   useEffect(() => {
//     handleConfirm(); // Automatically confirm on component load
//   }, []);

//   return (
//     <div className="container">
//       <div className="card">
//         <div className="icon-container">
//           <img
//             src="https://s3-alpha-sig.figma.com/img/1da0/1d7b/41c470cc4618ddd84a75aecc40c20c63?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o6jwukHsHVYPLhEsWBF5EfsE7wrSpLExXI6CKCUkFlDCQlDdx2Fy3jzxsMJhrsjUJVi84-KS8jk21vNozVIvsaJ-6-9CdaX5xyuC~mPxaXEL1WSFd0nuj0AxExFFeh9DjNlBz2phyX4S6pxMnGuGE1j-EXa2xRou6pxr7z2IMN6~bEav7wHP9UviIwpXaDvCBNzA1baXZltkentbg8bVVhlwC364VmY-JhjWu0CMGoBVPhGi0ACmTZmIPVdWVTVbiy5ZuII5RAw8Ic~w8oSzyMiBtXwzzX8t2-7e7YwoWfoxeXt-p1Ttizu7ZO4urPDxyQ8S48ISVjlNN-M8fI4Hog__"
//             alt="Email Icon"
//             className="icon"
//           />
//         </div>
//         <h3 className="title">Verify your Email Address</h3>
//         <p className="message">
//           Hey Fola, Thank you for signing up. <br />
//           Use the link below to verify your email.
//         </p>
//         <Link className='verify-button' to="#" onClick={handleConfirm}>Verify Email</Link>
//         <p className="resend-text">
//           Didn’t get the mail? <span className="resend-link">Resend Email</span>
//         </p>
//         <div className="footer">
//           <a href="/" className="footer-link">Terms of use</a> |
//           <a href="/" className="footer-link">Privacy Policy</a> |
//           <a href="/" className="footer-link">Customer Service</a>
//         </div>
//         <ToastContainer />
//       </div>
//     </div>
//   );
// };

// export default Emailverification;
