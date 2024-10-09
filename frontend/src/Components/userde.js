import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserAction } from "../redux/User";
import { bindActionCreators } from "redux";

const user = JSON.parse(localStorage.getItem("user"));
const Userde = () => {
  // const user = useSelector((state) => state.User);
  // const dispatch = useDispatch();
  // const { UserD } = bindActionCreators(UserAction, dispatch);

  // useEffect(() => {
  //   UserD();
  // }, []);
  console.log(user);
  return (
    <>
      <div class="bg-white overflow-hidden shadow rounded-lg border">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            My Profile
          </h3>
         
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl class="sm:divide-y sm:divide-gray-200">
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Full name</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.data.fname + " " + user.data.lname}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Email address</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.data.email}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">PinCode</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.data.pincode}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Address</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.data.address}
                <br />
                {user.data.city}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

export default Userde;