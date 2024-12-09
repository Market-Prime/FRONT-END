import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { LuRefreshCw } from "react-icons/lu";

import Layout from "../../../layout/AdminDashboardLayout";
import ApiClient from "../../api/admin";
import toastConfig from "../../helpers/react-toastConfig";
import FormModal from "./viewChunks/FormModal";
import VendorsListing from "./viewChunks/VendorsListing";

const Vendors = () => {
    const [vendorsData, setVendorsData] = useState([]);

    const getVendorsData = () => {
        ApiClient.getVendors()
            .then((data) => {
                setVendorsData(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        ApiClient && getVendorsData();
    }, [ApiClient]);

    return (
        <Layout>
            <ToastContainer />
            <div className="managers">
                <div className="head flex flex-col gap-2 sticky top-0 z-10">
                    <h1>Vendors</h1>
                    <div className="actions flex justify-end gap-4">
                        <button
                            className="action flex gap-1 p-2 items-center justify-between bg-sky-100 rounded-lg hover:bg-sky-200 transition-all"
                            onClick={getVendorsData}
                        >
                            <LuRefreshCw />
                            <span>Refresh</span>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-4 p-2 py-6">
                    {vendorsData.map((data) => (
                        <VendorsListing data={data} />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Vendors;
