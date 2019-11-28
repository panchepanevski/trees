import React from "react";
import { Link } from "react-router-dom";

function BottomNavigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/add">Add</Link>
      <Link to="/categories">Categories</Link>
    </div>
  );
}

export default BottomNavigation;
