import profile from "../../../assets/vendor-profile.png";
import { Link } from "react-router-dom";

const VendorsListing = ({ data }) => {
    return (
        <Link to={`/admin/vendor/${data.store_id}`}>
            <div className="flex items-center justify-between bg-white px-4 py-3 rounded-sm relative hover:bg-gray-300">
                <img
                    className="rounded-full w-10 h-10 bg-slate-200"
                    src={data.store_logo || profile}
                />
                <p className="text-sm font-medium">
                    {data?.user?.last_name} {data?.user?.first_name}
                </p>
                <p className="text-sm font-medium">{data?.store_id}</p>
                <p className="text-sm font-medium">{data?.business_name}</p>
                <p className="text-sm font-medium">
                    KYC: {data?.kyc_uploaded ? "Yes" : "No"}
                </p>
                <p className="text-sm font-medium">
                    Verified: {data?.kyc_completed ? "Yes" : "No"}
                </p>
                <p className="text-sm font-medium">
                    Store setup: {data?.setup_complete ? "Yes" : "No"}
                </p>
                <div className="absolute top-1 left-1 flex gap-1">
                    { data?.kyc_uploaded && !data?.kyc_completed && <span className="bg-red-500 w-3 h-3 flex rounded-full"></span>}
                    {data?.has_unchecked_products && <span className="bg-red-500 w-3 h-3 flex rounded-full"></span>}
                </div>
            </div>
        </Link>
    );
};

export default VendorsListing;
