import { LuRefreshCw } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import ManagersListing from "../components/viewChunks/ManagersListing";
import React, { useEffect, useState } from "react";
import FormModal from "../components/viewChunks/FormModal";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Layout from "../layout/AdminDashboardLayout";
import ApiClient from "../api";
import toastConfig from "../../shared/helpers/react-toastConfig";

const Managers = () => {
    const [managersData, setManagersData] = useState([]);

    const [currentManagerIdOnAction, setCurrentManagerIdOnAction] = useState();
    const [currentManagerIdStatus, setCurrentManagerIdStatus] = useState(true);

    const getManagers = () => {
        ApiClient.getManagers()
            .then((data) => {
                setManagersData(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        ApiClient && getManagers();
    }, [ApiClient]);

    const createManager = () => {
        ApiClient.createManager(formdata)
            .then((data) => {
                setCreateFormActive(false);
                toast.success(data.message, toastConfig.success);
                getManagers();
            })
            .catch((err) => {
                toast.error(err.message || err, toastConfig.error);
            });
    };

    const deleteManager = () => {
        ApiClient.deleteManager(currentManagerIdOnAction)
            .then((data) => {
                console.log(data);
                setDeleteModalActive(false);
                toast.success(data.message, toastConfig.success);
                getManagers();
            })
            .catch((err) => {
                toast.error(err.message || err, toastConfig.error);
            });
    };

    const toogleManagerState = () => {
        ApiClient.toogleManagerStatus(
            disableModalPSK,
            currentManagerIdOnAction,
            disableModalAction
        )
            .then((data) => {
                console.log(data);
                setDisableModalActive(false);
                toast.success(data.message, toastConfig.success);
                getManagers();
            })
            .catch((err) => {
                toast.error(err.message || err, toastConfig.error);
            });
    };

    const [createFormActive, setCreateFormActive] = useState(false);
    const [deleteModalActive, setDeleteModalActive] = useState(false);
    const [disableModalActive, setDisableModalActive] = useState(false);
    const [disableModalAction, setDisableModalAction] = useState(false); //false = disable, true=enable

    const [disableModalPSK, setDisableModalPSK] = useState();

    const [formdata, setformdata] = useState({
        psk: "",
        email: "",
        first_name: "",
        last_name: "",
        phone_number: "",
    });

    const handleInputChange = (e) => {
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Layout>
            <ToastContainer />
            <div className="managers">
                <div className="head flex flex-col gap-2 sticky top-0 z-10">
                    <h1>Managers</h1>
                    <div className="actions flex justify-end gap-4">
                        <button
                            onClick={getManagers}
                            className="action flex gap-1 p-2 items-center justify-between bg-sky-100 rounded-lg hover:bg-sky-200 transition-all"
                        >
                            <LuRefreshCw />
                            <span>Refresh</span>
                        </button>
                        <button
                            className="action flex gap-1 p-2 items-center justify-between bg-sky-100 rounded-lg hover:bg-sky-200 transition-all"
                            onClick={() => setCreateFormActive(true)}
                        >
                            <IoMdAdd />
                            <span>Add</span>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-4 p-2 py-6">
                    {managersData.map((data) => (
                        <ManagersListing
                            key={data?.staff_id}
                            first_name={data?.user?.first_name}
                            last_name={data?.user?.last_name}
                            profile_image={data.admin_img}
                            work_status={data.work_status}
                            staff_id={data.staff_id}
                            setIdActive={setCurrentManagerIdOnAction}
                            openDeleteModal={() => setDeleteModalActive(true)}
                            setDisableAction={setDisableModalAction}
                            openDisableModal={setDisableModalActive}
                        />
                    ))}
                </div>
                {createFormActive && (
                    <FormModal close={() => setCreateFormActive(false)}>
                        <div className="py-4 px-2 bg-white rounded-md flex flex-col w-full max-w-lg shadow-lg sm:m-x-2">
                            <h1 className="font-semibold text-center">
                                Create new Manager
                            </h1>
                            <form className="space-y-2">
                                <div>
                                    <label className="block text-gray-700">
                                        PassKey
                                    </label>
                                    <input
                                        type="text"
                                        name="psk"
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="Enter your PassKey"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        name="first_name"
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="Enter Manager's first name"
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="Enter Manager's last name"
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="Enter Manager's email address"
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        name="phone_number"
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="Enter Manager's phone number"
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <Link
                                    onClick={createManager}
                                    to=""
                                    className="w-full py-3 mt-6 block text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                >
                                    Create Manager
                                </Link>
                            </form>
                        </div>
                    </FormModal>
                )}
                {deleteModalActive && (
                    <FormModal close={() => setDeleteModalActive(false)}>
                        <div className="py-4 px-2 bg-white rounded-md flex flex-col w-full max-w-lg shadow-lg sm:m-x-2">
                            <h1 className="font-semibold text-center">
                                Delete Manager:{" "}
                                <em>{currentManagerIdOnAction}</em>
                            </h1>
                            <div className="flex items-center justify-around p-3 mt-4">
                                <button
                                    className="py-1 px-3 hover:shadow-md font-semibold rounded-md bg-red-600 text-gray-200"
                                    onClick={deleteManager}
                                >
                                    Delete
                                </button>
                                <button
                                    className="py-1 px-3 hover:shadow-md font-semibold rounded-md bg-gray-500 text-gray-200"
                                    onClick={() => setDeleteModalActive(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </FormModal>
                )}
                {disableModalActive && (
                    <FormModal close={() => setDisableModalActive(false)}>
                        <div className="py-4 px-2 bg-white rounded-md flex flex-col w-full max-w-lg shadow-lg sm:m-x-2">
                            <h1 className="font-semibold text-center">
                                {disableModalAction
                                    ? "Enable Admin "
                                    : "Disable Admin "}
                                <em>{currentManagerIdOnAction}</em>
                            </h1>

                            <div>
                                <label className="block text-gray-700">
                                    PassKey
                                </label>
                                <input
                                    type="text"
                                    name="psk"
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder="Enter PassKey"
                                    onChange={(e) => {
                                        setDisableModalPSK(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="flex items-center justify-center mt-8">
                                <button
                                    className="py-2 px-6 bg-blue-600 rounded-md text-white font-semibold hover:shadow-lg hover:bg-blue-500"
                                    onClick={toogleManagerState}
                                >
                                    {disableModalAction
                                        ? "Enable Admin "
                                        : "Disable Admin "}
                                </button>
                            </div>
                        </div>
                    </FormModal>
                )}
            </div>
        </Layout>
    );
};

export default Managers;
