import React from "react";
import {Link} from "react-router-dom";
const Error = () => {
    return (
        <div className="text-center my-8 space-y-8">
            <h2 className="font-bold text-3xl">Error,page not found</h2>
            <p className="pb-2"> Please go back to login<br /></p>
            <Link to="/signin" className="bg-blue-500 py-1 px-3 rounded-full text-white">
                Login/SignUp
            </Link>
        </div>
    );
};

export default Error;