import { useEffect, useRef, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { RiMenu2Line } from "react-icons/ri";
import { GiCancel } from "react-icons/gi";
import { IoTrashOutline } from "react-icons/io5";
import profile from "../../../assets/admin-avatar.png";
import { useNavigate } from "react-router-dom";

const ManagersListing = ({
    first_name,
    last_name,
    staff_id,
    work_status,
    profile_image,
    setIdActive = () => {},
    openDeleteModal = () => {},
    openDisableModal = () => {},
    setDisableAction = () => {},
}) => {
    const [actionsActive, setActionsActive] = useState(false);
    const actionsRef = useRef(null);

    const navigate = useNavigate();

    const toogleActions = () => {
        setActionsActive((prev) => !prev);
    };
    const handleOutFocus = (e) => {
        if (actionsRef.current && !actionsRef.current.contains(e.target)) {
            setActionsActive(false);
        }
    };

    useEffect(() => {
        if (actionsActive) setIdActive(staff_id);
    }, [actionsActive]);

    useEffect(() => {
        document.addEventListener("click", handleOutFocus);
        return () => {
            document.removeEventListener("click", handleOutFocus);
        };
    }, []);

    return (
        <div
            className="flex items-center justify-between bg-white px-4 py-3 rounded-sm relative"
            ref={actionsRef}
        >
            <img
                className="rounded-full w-10 h-10 bg-slate-200"
                src={profile_image || profile}
            />
            <p className="text-sm font-medium">
                {last_name} {first_name}
            </p>
            <p className="text-sm font-medium">{staff_id}</p>
            <p
                className={`text-white font-medium px-2 py-1 rounded-md ${
                    work_status ? "bg-green-700" : "bg-red-600"
                }`}
            >
                {work_status ? "Active" : "Inactive"}
            </p>
            <button
                className="p-3 hover:bg-slate-300 rounded-full"
                onClick={toogleActions}
            >
                <HiDotsVertical />
            </button>
            {actionsActive && (
                <div className="p-sm absolute right-2 top-auto bg-sky-100 shadow-md rounded-md z-10">
                    <ul className="flex flex-col">
                        <li className="p-2 border-slate-200 hover:shadow-lg">
                            <button
                                className="flex items-center gap-1 text-sm"
                                onClick={() => {
                                    navigate(`/admin/manager/${staff_id}`);
                                }}
                            >
                                <RiMenu2Line />
                                Details
                            </button>
                        </li>
                        <li className="p-2 border-slate-200 hover:shadow-lg">
                            <button
                                className="flex items-center gap-1 text-sm"
                                onClick={() => {
                                    setDisableAction(!work_status);
                                    openDisableModal(true);
                                }}
                            >
                                <GiCancel />
                                {work_status ? "Disable" : "Enable"}
                            </button>
                        </li>
                        <li className="p-2 border-slate-200 hover:shadow-lg">
                            <button
                                className="flex items-center gap-1 text-sm"
                                onClick={openDeleteModal}
                            >
                                <IoTrashOutline />
                                Remove
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ManagersListing;
