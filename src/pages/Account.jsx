import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

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
        <div className="">
            <Navbar />
            {!token ? <button className="text-white font-bold text-xl border-none rounded-xl bg-yellow-400 p-4 hover:bg-yellow-500 transition-all mb-20"><a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Connect Account</a></button> : <button className="text-white font-bold text-xl border-none rounded-xl bg-yellow-400 p-4 hover:bg-yellow-500 transition-all mb-20" onClick={disconnectAcct}>Disconnect Account</button>}
            <br />
            <button className="text-white font-bold text-xl border-none rounded-xl bg-yellow-400 p-4 hover:bg-yellow-500 transition-all mb-20" onClick={disconnectAcct}>Disconnect Account</button>
        </div>
    )
}

export default Account