import React, { useState } from "react";
import ApiClient from "../api";

const LoginForm = () => {
    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState([true, ""]);

    const login = async () => {
        await ApiClient.login(formData)
            .then((data) => {
                if (!(data.access && data.refresh)) {
                    setMessage([false, "Unknown Error. Please try again"]);
                    return;
                }
                localStorage.setItem("accessToken", data.access);
                localStorage.setItem("refreshToken", data.refresh);
                setMessage([true, "Login Sucessful. Please wait"]);

                const currentPath = window.location.pathname;
                if (
                    !(
                        currentPath == "/account/login" ||
                        currentPath == "/account/login/"
                    )
                ) {
                    return window.location.reload();
                }
                let redirectTo = "/";
                const params = new URLSearchParams(window.location.search);
                if (params.has("redirect")) redirectTo = params.get("redirect");

                setTimeout(() => {
                    window.location.href = redirectTo;
                }, 300);
            })
            .catch((err) => {
                console.log(err);
                setMessage([false, err]);
            });
    };

    return (
        <>
            <div className="txt flx-col items-center">
                <p className="head">Login to your account</p>
                <p className="pre">Input your details to login</p>
            </div>
            <div className="input-cont flx-col">
                <label for="email">Email</label>
                <div className="input-context flx items-center">
                    <input
                        type="email"
                        name="email"
                        id="login-email"
                        className="brdls bgls"
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                email: e.target.value,
                            });
                        }}
                    />
                </div>
            </div>
            <div className="input-cont flx-col">
                <label for="">Password</label>
                <div className="input-context flx items-center">
                    <input
                        type="password"
                        name="password"
                        id="login-password"
                        className="brdls bgls"
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                password: e.target.value,
                            });
                        }}
                    />
                    <button type="button" id="auth-pswd-toogle">
                        <i className="fa fa-eye"></i>
                    </button>
                </div>
            </div>
            <div className="auth-tc flx-col items-center justify-center">
                <p className="txt">
                    By continuing you agree to MarketPrime&apos;s
                </p>
                <p>
                    <a href="">Terms and Conditions</a>
                </p>
            </div>
            <div className="input-cont">
                <input type="checkbox" name="remme" id="remme" />
                <label for="remme">Remember me</label>
            </div>
            <p className={`mess ${message[0] ? "success" : "error"}`}>
                {message[1]}
            </p>
            <div className="input-cont">
                <button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        login();
                    }}
                >
                    Continue
                </button>
            </div>
        </>
    );
};

export default LoginForm;
