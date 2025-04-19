import { apiRequest } from "@/utils/apiCall";
import React from "react";

const page = async ({ params }) => {
  const { user } = await params;
  const apiCalling = await apiRequest("get", `/users/${user}`);
  const { id, name, email, role } = apiCalling?.userInfo[0];
  return (
    <div className="text-center">
      <h1 className="font-bold  text-2xl my-5">Products Details</h1>
      <div className="product p-5 inline-block" style={{ border: "1px solid" }}>
        <p>{id}</p>
        <h1 className="font-bold">{name}</h1>
        <p>{email}</p>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default page;
