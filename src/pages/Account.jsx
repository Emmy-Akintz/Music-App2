import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Account() {
    const CLIENT_ID = "de0a866d4c4c46d9918f84a0372b4984"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    return (
        <div className="">
            <Navbar />
            <button className="text-white font-bold text-xl border-none rounded-xl bg-yellow-400 p-4 hover:bg-yellow-500 transition-all mb-20">
                <Link to={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Connect Account</Link>
            </button>
        </div>
    )
}

export default Account