import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

function Account() {
    const CLIENT_ID = "de0a866d4c4c46d9918f84a0372b4984"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const [token, setToken] = useState("")
    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

    }, [])

    const disconnectAcct = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    return (
        <div className="flex p-4 mb-20 bg-gray-800 h-[100vh]">
            <Navbar />
            <div className="">
                <h1 className="font-bold m-4 mt-20">EMMY MUSIC APP</h1>
                <div className="block">
                    <p className="font-bold">User name: <span className="font-light"></span></p>
                    <p className="font-bold">User email: <span className="font-light"></span></p>
                </div>
                {!token ? <button className="text-white font-bold text-xl border-none rounded-xl bg-yellow-400 py-2 px-4 hover:bg-yellow-500 transition-all m-4"><a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Connect Account</a></button> : <button className="text-white font-bold text-xl border-none rounded-xl bg-yellow-400 py-2 px-4 hover:bg-yellow-500 transition-all m-4" onClick={disconnectAcct}>Disconnect Account</button>}
                <br />
                <Link to='/home' className="text-white font-bold text-xl border-none rounded-xl bg-yellow-400 py-2 px-4 hover:bg-yellow-500 transition-all m-4">Home</Link>
            </div>
        </div>
    )
}

export default Account