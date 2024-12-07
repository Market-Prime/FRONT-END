const ToastConfig = () => {
    const _default = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
    };
    return {
        success: {
            ..._default,
            style: { backgroundColor: "#017501" },
        },
        error: {
            ..._default,
            style: { backgroundColor: "#EA5454" },
        },
    };
};

export default ToastConfig();
