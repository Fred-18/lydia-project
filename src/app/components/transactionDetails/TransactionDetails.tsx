import { Transaction } from "@/app/types/transactionTypes";
import { statuesRules } from "../../../../statuesRules";

export const TransactionDetails = ({
  transactionItem
}: {
  transactionItem: Transaction;
}) => {
  const formattedDate = new Date(
    transactionItem.date * 1000
  ).toLocaleDateString("fr-FR");
  return (
    <div>
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
                  First Name
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
                <th className=" border-gray-900 border-4 p-5 space-x-1  font-[poppins]">
                  Status
                </th>
                <th className=" border-gray-900 border-4 p-5 space-x-1 font-[poppins]">
                  Label
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=" border-gray-900 border-4 p-5 space-x-1 font-[poppins] text-center">
                  {transactionItem.paymentId}
                </td>
                <td className=" border-gray-900 border-4 p-5 space-x-1 font-[poppins] text-center">
                  {transactionItem.firstname}
                </td>
                <td className=" border-gray-900 border-4 p-5 space-x-1 font-[poppins] text-center">
                  {transactionItem.lastname}
                </td>
                <td className=" border-gray-900 border-4 p-5 space-x-1 font-[poppins] text-center">
                  {formattedDate}
                </td>
                <td className=" border-gray-900 border-4 p-5 space-x-1 font-[poppins] text-center">
                  {transactionItem.amount}
                </td>
                <td
                  className={` border-gray-900 border-4 p-5 space-x-1 font-[poppins] text-center ${
                    statuesRules[
                      transactionItem.status as keyof typeof statuesRules
                    ]
                  }`}
                >
                  {transactionItem.status}
                </td>
                <td className=" border-gray-900 border-4 p-5 space-x-1 font-[poppins] text-center">
                  {transactionItem.label}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      }
    </div>
  );
};
export default TransactionDetails;
