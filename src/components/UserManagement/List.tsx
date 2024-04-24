import { Link } from "react-router-dom";
import Header from "../Header";
import { useEffect, useState } from "react";
import API from "../../config/DataServices";
import { log } from "console";
import { toast } from "react-toastify";

interface GetAllUser {
  id: any;
  _id: string;
  userName: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  isActive: boolean;
}
const UserList = () => {
  const [status, setStatus] = useState(true);
  const [page, setPage] = useState(1);
  const PAGE_SIZE = [10, 20, 30, 50, 100];
  const [pageSize, setPageSize] = useState(PAGE_SIZE[0]);
  const [getAllData, setAllData] = useState<GetAllUser[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [id, setId] = useState('');

  const getUserData = () => {
    try {
      API.get(
        `/admin/user-management/get-user?search=${searchQuery}&page=${page}&perPage=${pageSize}`
      ).then((data) => {
        setAllData(data?.data?.data?.getAllUsers);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClick = (id: any) => {
    setId(id);
    setShowDeleteModal(true);
  };

  const handleCancelClick = () => {
    setShowDeleteModal(false);
  };

  const handleConfirmDelete = () => {
    API.delete(`admin/user-management/delete-user?id=${id}`)
    .then((data)=>{
      toast.success(data?.data.message)
      setShowDeleteModal(false);
      getUserData();
    })
    setConfirmDelete(true);
  };

  const toggleUserStatus = (id: string, isActive: boolean) => {
    const newStatus = !isActive; // Toggle the status
    API.put(`admin/user-management/user-status?id=${id}&status=${newStatus}`)
      .then((response) => {
        toast.success(response.data.message);
        getUserData();
      })
      .catch((error) => {
        toast.error("Failed to update user status.");
        console.error(error);
      });
  };

  const activeDeactiveToggal = () => {};

  useEffect(() => {
    getUserData();
  }, [searchQuery, page, pageSize]);

  return (
    <>
      <Header />

      <div className="container relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="pb-4 bg-white dark:bg-gray-900 flex justify-between items-center">
          <div className="relative mt-1 flex items-center">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block pt-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Link
            to="/add-user"
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-decoration-none"
          >
            Add User
          </Link>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                FullName
              </th>
              <th scope="col" className="px-6 py-3">
                UserName
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                PhoneNumber
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {getAllData &&
              getAllData.map((values, index) => {
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={index}
                  >
                    <td className="px-6 py-4">{values.userName}</td>
                    <td className="px-6 py-4">{values.fullName}</td>
                    <td className="px-6 py-4">{values.email}</td>
                    <td className="px-6 py-4">{values.phoneNumber}</td>
                    <td className="px-6 py-4">
                      <div className="inline-flex items-center" key={index}>
                        <div className="relative inline-block w-8 h-4 rounded-full cursor-pointer">
                          <input
                            id={`switch-component-${index}`}
                            type="checkbox"
                            checked={values.isActive === true}
                            onChange={() => toggleUserStatus(values._id, values.isActive)}
                            className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-blue-gray-100 checked:bg-gray-900 peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
                          />
                          <label
                            htmlFor={`switch-component-${index}`}
                            className="absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
                          >
                            <div
                              className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                              data-ripple-dark="true"
                            ></div>
                          </label>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        to="#"
                        className="mr-2 font-medium text-green-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </Link>
                      <Link
                        to="#"
                        onClick={()=> handleDeleteClick(values._id)}
                        className="mr-2 font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="flex justify-center items-center mt-4 space-x-2">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md disabled:opacity-50"
          >
            Previous
          </button>
          <div>Page {page}</div>
          <button
            onClick={() => setPage(page + 1)}
            disabled={getAllData.length < pageSize}
            className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
      {showDeleteModal && ( 
        <div
          id="deleteModal"
          tabIndex={-1}
          aria-hidden="true"
          className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
              <button
                type="button"
                onClick={handleCancelClick}
                className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <svg
                className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="mb-4 text-gray-500 dark:text-gray-300">
                Are you sure you want to delete this item?
              </p>
              <div className="flex justify-center items-center space-x-4">
                <button
                  onClick={handleCancelClick}
                  type="button"
                  className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  No, cancel
                </button>
                <button
                  onClick={handleConfirmDelete}
                  type="button"
                  className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                >
                  Yes, I'm sure
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default UserList;
