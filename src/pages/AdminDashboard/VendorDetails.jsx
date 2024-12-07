import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../../layout/AdminDashboardLayout";
import ApiClient from "../../api/admin";
import profile from "../../assets/vendor-profile.png";

const VendorDetails = () => {
    const [vendorDetails, setVendorDetails] = useState();
    const { store_id } = useParams();
    const getDetails = async () => {
        ApiClient.getVendor(store_id)
            .then((data) => {
                setVendorDetails(data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        ApiClient && store_id && getDetails();
    }, [ApiClient, store_id]);

    return (
        <Layout>
            <div className="managers">
                <div className="py-4 px-3 flex flex-col">
                    <div
                        className="flex justify-center bg-no-repeat bg-center bg-cover w-full border p-1 bg-slate-700"
                        style={{
                            backgroundImage: `url("${vendorDetails?.store_splash_image}")`,
                        }}
                    >
                        <img
                            src={vendorDetails?.store_logo || profile}
                            alt="profile"
                            srcset=""
                            className="w-24 h-24 bg-slate-200 rounded-full"
                        />
                    </div>
                    <ul className="my-2">
                        <li className="p-2 text-lg">
                            <strong>First Name: </strong>{" "}
                            {vendorDetails?.user?.first_name}
                        </li>
                        <li className="p-2 text-lg">
                            <strong>Last Name: </strong>{" "}
                            {vendorDetails?.user?.last_name}
                        </li>
                        <li className="p-2 text-lg">
                            <strong>Email: </strong>{" "}
                            {vendorDetails?.user?.email}
                        </li>
                        <li className="p-2 text-lg">
                            <strong>Phone: </strong>{" "}
                            {vendorDetails?.user?.phone_number}
                        </li>
                        <li className="p-2 text-lg">
                            <strong>Date created: </strong>{" "}
                            {new Date(vendorDetails?.created_at).toLocaleString()}
                        </li>
                        <li className="p-2 text-lg">
                            <strong>Profile last updated at: </strong>{" "}
                            {new Date(vendorDetails?.updated_at).toLocaleString()}
                        </li>
                        <li className="p-2 text-lg">
                            <strong>Store Id: </strong>{" "}
                            {vendorDetails?.store_id}
                        </li>
                        <li className="p-2 text-lg">
                            <strong>Business Name: </strong>{" "}
                            {vendorDetails?.business_name}
                        </li>
                        <li className="p-2 text-lg">
                            <strong>Business Description: </strong>{" "}
                            {vendorDetails?.business_description}
                        </li>
                        <li className="p-2 text-lg">
                            <strong>Business Address: </strong>{" "}
                            {vendorDetails?.business_address}
                        </li>
                        <li className="p-2 text-lg">
                            <strong>KYC Documents Uploaded: </strong>{" "}
                            {vendorDetails?.kyc_uploaded ? "Yes" : "No"}{" "}
                            {vendorDetails?.kyc_uploaded && (
                                <button className="bg-blue-600 text-white font-semibold text-sm ml-4 py-1 px-2 rounded-md hover:shadow-md">
                                    View and take action
                                </button>
                            )}
                        </li>
                        <li className="p-2 text-lg">
                            <strong>KYC status: </strong>{" "}
                            {!vendorDetails?.kyc_submitted
                                ? "not submitted"
                                : vendorDetails?.kyc_approved
                                ? "accepted"
                                : "pending"}
                        </li>
                        <li className="p-2 text-lg">
                            <strong>Store is Setup: </strong>{" "}
                            {vendorDetails?.setup_complete ? "Yes" : "No"}
                        </li>
                        <li className="p-2 text-lg">
                            <strong>Bank name: </strong>{" "}
                            {vendorDetails?.bank_name}
                        </li>
                        <li className="p-2 text-lg">
                            <strong>Bank Account Number: </strong>{" "}
                            {vendorDetails?.account_number}
                        </li>
                        <li className="p-2 text-lg">
                            <strong>Bank Account Name: </strong>{" "}
                            {vendorDetails?.account_holder_name}
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    );
};

export default VendorDetails;
