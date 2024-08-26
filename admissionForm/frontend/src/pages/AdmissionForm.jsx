import React, { useState } from "react";
import { defaultAvatar, indianStates } from "../constants";
import { Link } from "react-router-dom";
import useAddStudent from "../hooks/useAddStudent";
import { MdPhotoCamera } from "react-icons/md";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../firebase";
import toast from "react-hot-toast";

const AdmissionForm = () => {
  const { loading, addStudent } = useAddStudent();
  const [filePerc, setFilePerc] = useState(null);
  const [imgUploadLoading, setImgUploadLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    state: "",
    studentImage: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setImgUploadLoading(true);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file?.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        toast.error(`failed! only upto 4mb image size allowed.`);
        setImgUploadLoading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, studentImage: downloadURL });
          // console.log(formData);
          setImgUploadLoading(false);
        });
      }
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addStudent(formData);
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      gender: "",
      dateOfBirth: "",
      address: "",
      state: "",
    });
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white border border-gray-300 shadow-md rounded-md">
        <h2 className="text-xl font-semibold mb-4">Student Admission Form</h2>

        {/* image upload ui */}
        <div className="flex justify-center  ">
          <div className="relative  ">
            <img
              src={
                formData.studentImage ? formData.studentImage : defaultAvatar
              }
              className="h-16 w-16 rounded-full object-cover "
            />
            <label
              className="block text-gray-700 text-sm font-bold mb-2 absolute -bottom-2 right-0 "
              htmlFor="userPhoto"
            >
              <div className="text-gray-300 rounded-full bg-white p-1 border border-gray-300 cursor-pointer">
                <MdPhotoCamera size={16} />
              </div>
              <input
                type="file"
                id="userPhoto"
                accept="image/*"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 ">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gender
            </label>
            <div className="flex items-center mt-1">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={handleChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label
                htmlFor="male"
                className="ml-2 mr-4 block text-sm font-medium text-gray-700"
              >
                Male
              </label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={handleChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label
                htmlFor="female"
                className="ml-2 block text-sm font-medium text-gray-700"
              >
                Female
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="dateOfBirth"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              State
            </label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option className="px-2 py-1" value="">
                Select a state
              </option>
              {indianStates.map((state, index) => (
                <option key={`state--${index}`} className="py-1" value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-themeColor text-white rounded-md hover:bg-themeColorHover focus:outline-none focus:bg-indigo-700"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AdmissionForm;
