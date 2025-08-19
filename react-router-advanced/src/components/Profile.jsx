import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import ProfileDetails from "./ProfileDetails.jsx";
import ProfileSettings from "./ProfileSettings.jsx";

export default function Profile() {
  const { id } = useParams(); // dynamic route param

  return (
    <div>
      <h2>Profile Page - User ID: {id}</h2>
      <nav>
        <Link to="details">Details</Link> | <Link to="settings">Settings</Link>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
        <Route path="" element={<p>Select a sub-section.</p>} />
      </Routes>
    </div>
  );
}
