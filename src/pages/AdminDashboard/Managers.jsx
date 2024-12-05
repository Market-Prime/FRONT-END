import { LuRefreshCw } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import ManagersListing from "./viewChunks/ManagersListing";
import { useState } from "react";
import FormModal from "./viewChunks/FormModal";

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

    return (
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
                <FormModal close={() => setCreateFormActive(false)}></FormModal>
            )}
        </div>
    );
};

export default Managers;
