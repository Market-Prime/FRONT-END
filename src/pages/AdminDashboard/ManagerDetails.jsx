import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../../layout/AdminDashboardLayout";
import ApiClient from "../../api/admin";
import profile from "../../assets/admin-avatar.png";

const ManagerDetails = () => {
    const [managerDetails, setManagerDetails] = useState();
    const { staff_id } = useParams();
    const getDetails = async () => {
        ApiClient.getManager(staff_id)
            .then((data) => {
                setManagerDetails(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        ApiClient && staff_id && getDetails();
    }, [ApiClient, staff_id]);

    return (
        <Layout>
            <div className="managers">
                <div className="py-4 px-3 flex flex-col">
                    <h1 className="flex justify-center">
                        <img
                            src={managerDetails?.admin_img || profile}
                            alt="profile"
                            srcset=""
                            className="w-24 h-24 bg-slate-200 rounded-full"
                        />
                    </h1>
                    <ul className="my-2">
                        <li className="p-2 text-lg"><strong>First Name: </strong> {managerDetails?.user?.first_name}</li>
                        <li className="p-2 text-lg"><strong>Last Name: </strong> {managerDetails?.user?.last_name}</li>
                        <li className="p-2 text-lg"><strong>Email: </strong> {managerDetails?.user?.email}</li>
                        <li className="p-2 text-lg"><strong>Staff Id: </strong> {managerDetails?.staff_id}</li>
                        <li className="p-2 text-lg"><strong>Phone: </strong> {managerDetails?.user?.phone_number}</li>
                        <li className="p-2 text-lg">
                            <strong>Date created: </strong>{" "}
                            {new Date(managerDetails?.created_at).toLocaleString()}
                        </li>
                        <li className="p-2 text-lg">
                            <strong>Profile last updated at: </strong>{" "}
                            {new Date(managerDetails?.updated_at).toLocaleString()}
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    );
};

export default ManagerDetails;
