import { LuRefreshCw } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import ManagersListing from "./viewChunks/ManagersListing";
import { useState } from "react";
import FormModal from "./viewChunks/FormModal";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import AdminLayout1 from "./layout/adminLayout1";

const dummy = [
    {
        first_name: "Eze",
        last_name: "Theophilus",
        staff_id: "MP-A-11091",
        work_status: true,
        profile_image: "https://picsum.photos/200",
    },
    {
        first_name: "Chmod",
        last_name: "Taedez",
        staff_id: "MP-A-11092",
        work_status: true,
        profile_image: "https://picsum.photos/200",
    },
    {
        first_name: "David",
        last_name: "Akpan",
        staff_id: "MP-A-11089",
        work_status: true,
        profile_image: "https://picsum.photos/200",
    },
    {
        first_name: "Jeremy",
        last_name: "Lawyer",
        staff_id: "MP-A-11040",
        work_status: false,
        profile_image: "https://picsum.photos/200",
    },
    {
        first_name: "David",
        last_name: "Akpan",
        staff_id: "MP-A-11089",
        work_status: true,
        profile_image: "https://picsum.photos/200",
    },
    {
        first_name: "Jeremy",
        last_name: "Lawyer",
        staff_id: "MP-A-11040",
        work_status: false,
        profile_image: "https://picsum.photos/200",
    },
];

const Managers = () => {
    const [createFormActive, setCreateFormActive] = useState(false);

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

    const createManager = async () => {
        try {
            const response = await axios.post("");
        } catch (error) {}
    };

    return (
        <AdminLayout1>
            <div className="managers">
                <div className="head flex flex-col gap-2 sticky top-0 z-10">
                    <h1>Managers</h1>
                    <div className="actions flex justify-end gap-4">
                        <button className="action flex gap-1 p-2 items-center justify-between bg-sky-100 rounded-lg hover:bg-sky-200 transition-all">
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
                    <div className="flex items-center justify-between px-6 py-2 bg-blue-700">
                        <p className="font-bold text-sm text-white">
                            Profile Image
                        </p>
                        <p className="font-bold text-sm text-white">Name</p>
                        <p className="font-bold text-sm text-white">Staff-id</p>
                        <p className="font-bold text-sm text-white">Status</p>
                        <p className="font-bold text-sm text-white">Actions</p>
                    </div>
                    {dummy.map((data) => (
                        <ManagersListing
                            key={data.staff_id}
                            first_name={data.first_name}
                            last_name={data.last_name}
                            profile_image={data.profile_image}
                            work_status={data.work_status}
                            staff_id={data.staff_id}
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
                                        // onChange={handleInputChange}
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
                                        // onChange={handleInputChange}
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
                                        // onChange={handleInputChange}
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
                                        // onChange={handleInputChange}
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
                                        // onChange={handleInputChange}
                                    />
                                </div>

                                <Link
                                    // onClick={submitAdmin}
                                    to=""
                                    className="w-full py-3 mt-6 block text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                >
                                    Create Manager
                                </Link>
                            </form>
                        </div>
                    </FormModal>
                )}
            </div>
        </AdminLayout1>
    );
};

export default Managers;
