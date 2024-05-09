import { useSelector } from "react-redux";
import { useGetUserQuery } from "../../../../Redux/Features/userApis/userApi";
import { RxExit } from "react-icons/rx";
import Calendar from "react-calendar";
import { useState } from "react";
import useAuth from "../../../../Router/useAuth";


const Profile = () => {
  const [value, setValue] = useState(new Date());
  const {logout, user} = useAuth()
  const email = user?.email
  const { data } = useGetUserQuery({ email });
 
  const handleLogout = () => {
    logout()
  };
  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <div className="grid gap-5 grid-cols-9 grid-rows-3">
        <div className="badge-ghost shadow-md flex flex-col justify-between p-10 border min-h-52 row-span-3 col-span-3">
          <div>
            <div className="flex mb-10 gap-5">
              {data?.profilepic ? (
                <img src={data?.profilepic} />
              ) : (
                <div
                  style={{ background: `hsl(${data?.name.length},50%, 50%)` }}
                  className={`flex items-center justify-center h-20 w-20 text-4xl text-white rounded-lg>`}
                >
                  {data?.name.slice(0, 1)}
                </div>
              )}
              <div>
                <h1 className="text-3xl">{data?.name}</h1>
                <h1>{data?.email}</h1>
              </div>
            </div>
            <hr />
            <div className="flex flex-col ">
              <h1 className="py-5">other Profile section</h1>
              <button className="bg-green-300 rounded-sm py-2 px-3 text-slate-800">
                Edit profile
              </button>
            </div>
          </div>
          <div className="">
            <button
              onClick={handleLogout}
              className="py-2 gap-2 flex items-center badge-warning rounded-sm px-3"
            >
              {" "}
              <span>
                <RxExit />
              </span>{" "}
              Logout
            </button>
          </div>
        </div>
        <div className="badge-ghost row-span-1 shadow-md py-10 flex items-center justify-center col-span-3">
          <div className="h-40 w-40 rounded-full border"></div>
        </div>
        <div className="badge-ghost shadow-md row-span-1 p-5 col-span-3">
          <Calendar onChange={setValue} value={value}></Calendar>
        </div>
        <div className="badge-ghost row-span-1 shadow-md col-span-6"></div>
        <div className="badge-ghost row-span-1 shadow-md col-span-6"></div>
      </div>
    </div>
  );
};

export default Profile;
