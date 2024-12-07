import { MdCancel } from "react-icons/md";

const FormModal = ({ close = () => {}, children }) => {
    return (
        <div className="bg-transparent backdrop-blur-md flex justify-center items-center fixed top-0 left-0 w-full h-full z-50">
            <button
                className="absolute p-2 rounded-full bg-slate-200 top-3 right-3 hover:shadow-lg text-2xl"
                onClick={close}
            >
                <MdCancel />
            </button>
            {children}
        </div>
    );
};

export default FormModal;
