"use client";
import React, { useState } from "react";
import Link from "next/link";

function page() {
  const [value, setValue] = useState({
    licenseNo: "",
    orgName: "",
    orgType:"",
    noOfTeams: "",
    noOfMembers: "",
    areaofActivity: "",
    StationAddress: "",
    password: "",
    equipments: "",
    token:""
  });


  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        setLoading(true);
      const res = await fetch("http://192.168.208.1:8080/api/org/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          licenseNo: value.licenseNo,
          orgName: value.orgName,
          orgType:value.orgType,
          noOfTeams: value.noOfTeams,
          noOfMembers: value.noOfMembers,
          areaofActivity: value.areaofActivity,
          StationAddress: value.StationAddress,
          password:value.password,
          equipments:value.equipments,
          token:'abczy'
          }),
      });

      if (res.status === 200) {
        setValue({
          licenseNo: "",
          orgName: "",
          orgType:"",
          noOfTeams: "",
          noOfMembers: "",
          areaofActivity: "",
          StationAddress: "",
          password: "",
          equipments: "",

        });
        setStatus("success");
        // router.push("/writeall");
      } else {
        setStatus("failed");
      }
    } catch (err) {
      setStatus(err.message);
    }
    finally{
        setLoading(false);
    }
  };


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 border-2 border-black bg-gradient-to-r from-cyan-300 to-blue-400 text-black capitalize">
      <div className="bg-[#DFF9EE] h-[500px] w-[450px] rounded-lg shadow-md shadow-slate-900 flex flex-col p-8">
        <h1 className="mt-3 text-2xl text-center pr-[20px] text-[#3688F3]">
          Login
        </h1>
        <form className="mt-5" onSubmit={handleSubmit}>
            <div className="mt-2 flex flex-col w-[180px]">
              <label htmlFor="License No" className="text-[15px]">
                License No:
              </label>
              <input
                type="number"
                name="licenseNo"
                placeholder="Enter your license No: "
                value={value.licenseNo}
                onChange={handleChange}
                className="border-b-2 border-[#65D5FA] bg-[#DFF9EE] outline-none p-2 text-[12px] text-black"
                required
              />
            </div>
            <div className="mt-2 flex flex-col w-[180px]">
              <label htmlFor="Password" className="text-[15px]">
                Password :
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your Passworde: "
                value={value.password}
                onChange={handleChange}
                className="border-b-2 border-[#65D5FA] bg-[#DFF9EE] outline-none p-2 text-[12px] text-black"
                required
              />
            </div>
          <div className="mt-3 text-center pr-[25px]">
            <button
              type="submit"
              className="bg-[#3688F3] text-[#fff] text-[16px] rounded-md mt-2 p-2 px-14"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default page;