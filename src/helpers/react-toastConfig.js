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
            style: { backgroundColor: "green" },
        },
        error: {
            ..._default,
            style: { backgroundColor: "red" },
        },
    };
};

export default ToastConfig();
