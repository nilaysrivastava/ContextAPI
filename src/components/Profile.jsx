import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user)
    return (
      <div className="flex items-center justify-center pt-10">
        <h1 className="text-3xl">Not logged in!</h1>
      </div>
    );
  return (
    <div className="flex items-center justify-center pt-10">
      <div>
        <h1 className="text-3xl">Welcome : {user.username} !</h1>
      </div>
    </div>
  );
}

export default Profile;
