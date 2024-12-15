import React, { useEffect, useState } from "react";

const NavCategoryFlow = () => {
    console.log(window.__CATEGORIES_DATA__);

    const [rootCategoriesData, setRootCategoriesData] = useState([]);
    const [subCategoriesData, setSubCategoriesData] = useState([]);
    const [activeRootCategoryId, setActiveRootCategoryId] = useState(1);

    useEffect(() => {
        if (window.__CATEGORIES_DATA__) {
            const _rootCatData = window.__CATEGORIES_DATA__.filter(
                (item) => !item?.parent
            );
            const _subCatData = window.__CATEGORIES_DATA__.filter(
                (item) => item?.parent
            );
            setRootCategoriesData(_rootCatData);
            setSubCategoriesData(_subCatData);
        }
    }, [window.__CATEGORIES_DATA__]);

    return (
        <div className="w-full flex flex-col gap-3">
            <div className="head flex overflow-x-scroll gap-2 no-scrollbar">
                {rootCategoriesData.map((item) => (
                    <button
                        className="px-2 py-1 text-nowrap hover:shadow-lg rounded-md font-semibold"
                        key={item?.id}
                        onClick={() => {
                            setActiveRootCategoryId(item?.id);
                        }}
                    >
                        {item?.name}
                    </button>
                ))}
            </div>
            <div className="body grid grid-cols-3">
                {subCategoriesData
                    .filter((item) => item?.parent == activeRootCategoryId)
                    .map((item) => (
                        <a
                            href={`/categories?q=${item?.name}`}
                            className="hover:bg-neutral-200 flex items-center justify-start gap-2 p-1 rounded-md"
                        >
                            <img
                                src={item?.image}
                                alt={item?.name}
                                srcset=""
                                className="w-6 h-6 rounded-full"
                            />
                            <span className="text-sm">{item?.name}</span>
                        </a>
                    ))}
            </div>
        </div>
    );
};

export default NavCategoryFlow;
