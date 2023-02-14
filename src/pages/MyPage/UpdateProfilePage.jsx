// import { useState } from "react";
import { useLocation } from "react-router-dom";
import UpadateProfile from "../../components/MyPage/UpadateProfile";

export default function UpdateProfilePage() {
  const location = useLocation();
  const originProfileInfo = location.state;

  return (
    <div>
      <UpadateProfile originProfileInfo={originProfileInfo} />
    </div>
  );
}
