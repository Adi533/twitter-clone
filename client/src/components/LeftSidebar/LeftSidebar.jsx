import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import PersonIcon from "@mui/icons-material/Person";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";

const LeftSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const dispatch = useDispatch();

  const handleLogout = () => {
    if(location.includes('profile')) {
      navigate('/signin');
    }else{
      dispatch(logout());
      navigate('/signin');
    }
    
  };

return (
  <div className="flex flex-col h-full md:h-[85vh] justify-between mr-6">
    <div className="mt-6 flex flex-col space-y-4">
      <Link to="/">
        <div className="flex items-center space-x-6 px-2 py-2 hover:bg-slate-200 rounded-full cursor-pointer">
          <HomeIcon fontSize="large" />
          <p>Home</p>
        </div>
      </Link>
      <Link to="/explore">
        <div className="flex items-center space-x-6 px-2 py-2 hover:bg-slate-200 rounded-full cursor-pointer">
          <TagIcon fontSize="large" />
          <p>Explore</p>
        </div>
      </Link>
      <Link to={`/profile/${currentUser._id}`}>
        <div className="flex items-center space-x-6 px-2 py-2 hover:bg-slate-200 rounded-full cursor-pointer">
          <PersonIcon fontSize="large" />
          <p>Profile</p>
        </div>
      </Link>
    </div>
    <div className="flex justify-between">
      <div>
        <p className="font-bold">{currentUser.username}</p>
        <p className="font-bold">@{currentUser.username}</p>
      </div>
      <div>
        <button
          className="bg-red-500 px-4 py-2 text-white rounded-full"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  </div>
);
};

export default LeftSidebar;