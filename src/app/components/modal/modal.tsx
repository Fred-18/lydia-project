import { ModalProps } from "@/app/types/modalTypes";

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <button
          className="absolute top-2 right-2 text-red-500 font-bold text-5xl cursor-pointer"
          onClick={onClose}
        >
          &times;
        </button>
        {
          <div>
            <h2 className="text-xl font-bold mb-4">Transaction Details</h2>
            <table className="border-collapse border-4 border-gray-400 ">
              <thead>
                <tr className="bg-gray-200 border-4 ">
                  <th className=" border-gray-900 border-4 p-5 space-x-1 font-[poppins] ">
                    Payment ID
                  </th>
                  <th className=" border-gray-900 border-4 p-5 space-x-1 font-[poppins]">
                    FirstName
                  </th>
                  <th className=" border-gray-900 border-4 p-5 space-x-1 font-[poppins]">
                    Last Name
                  </th>
                  <th className=" border-gray-900 border-4 p-5 space-x-1 font-[poppins]">
                    Date
                  </th>
                  <th className=" border-gray-900 border-4 p-5 space-x-1 font-[poppins]">
                    Amount
                  </th>
                  <th className=" border-gray-900 border-4 p-5 space-x-1 font-[poppins]">
                    Status
                  </th>
                  <th className=" border-gray-900 border-4 p-5 space-x-1 font-[poppins]">
                    Label
                  </th>
                </tr>
              </thead>
              <tbody>
                <td className=" border-gray-900 border-4 p-5 space-x-1 font-[poppins] text-center">
                  weee
                </td>
                <td className=" border-gray-900 border-4 p-5 space-x-1 font-[poppins] text-center">
                  weee
                </td>
                <td className=" border-gray-900 border-4 p-5 space-x-1 font-[poppins] text-center">
                  weee
                </td>
                <td className=" border-gray-900 border-4 p-5 space-x-1 font-[poppins] text-center">
                  weee
                </td>
                <td className=" border-gray-900 border-4 p-5 space-x-1 font-[poppins] text-center">
                  weee
                </td>
                <td className=" border-gray-900 border-4 p-5 space-x-1 font-[poppins] text-center">
                  weee
                </td>
                <td className=" border-gray-900 border-4 p-5 space-x-1 font-[poppins] text-center">
                  weee
                </td>
              </tbody>
            </table>
          </div>
        }
      </div>
    </div>
  );
};
export default Modal;
