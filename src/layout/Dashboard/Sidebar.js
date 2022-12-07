import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="col-span-2 bg-indigo-200 h-[calc(100vh-25px)] p-5 rounded-lg">
      <ul className="flex gap-3  flex-col h-full">
        <li>
          <h1 className="font-bold text-lg">Admin Dashboard</h1>
        </li>
        <li>
          <Link to="/dashboard">Blog List</Link>
        </li>
        <li>
          <Link to="add-blog">Add blog</Link>
        </li>
        <li className="mt-auto">
          <Link to="/">Back To Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
