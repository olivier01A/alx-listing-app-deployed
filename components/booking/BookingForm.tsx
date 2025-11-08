// const BookingForm = () => (
//   <div className="bg-white p-6 shadow-md rounded-lg">
//     <h2 className="text-xl font-semibold">Contact Detail</h2>
//     <form>
//       {/* Contact Information */}
//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <label>First Name</label>
//           <input type="text" className="border p-2 w-full mt-2" />
//         </div>
//         <div>
//           <label>Last Name</label>
//           <input type="text" className="border p-2 w-full mt-2" />
//         </div>
//       </div>
//       <div className="grid grid-cols-2 gap-4 mt-4">
//         <div>
//           <label>Email</label>
//           <input type="email" className="border p-2 w-full mt-2" />
//         </div>
//         <div>
//           <label>Phone Number</label>
//           <input type="text" className="border p-2 w-full mt-2" />
//         </div>
//       </div>

//       {/* Payment Information */}
//       <h2 className="text-xl font-semibold mt-6">Pay with</h2>
//       <div className="mt-4">
//         <label>Card Number</label>
//         <input type="text" className="border p-2 w-full mt-2" />
//       </div>
//       <div className="grid grid-cols-2 gap-4 mt-4">
//         <div>
//           <label>Expiration Date</label>
//           <input type="text" className="border p-2 w-full mt-2" />
//         </div>
//         <div>
//           <label>CVV</label>
//           <input type="text" className="border p-2 w-full mt-2" />
//         </div>
//       </div>

//       {/* Billing Address */}
//       <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
//       <div className="mt-4">
//         <label>Street Address</label>
//         <input type="text" className="border p-2 w-full mt-2" />
//       </div>
//       <div className="grid grid-cols-2 gap-4 mt-4">
//         <div>
//           <label>City</label>
//           <input type="text" className="border p-2 w-full mt-2" />
//         </div>
//         <div>
//           <label>State</label>
//           <input type="text" className="border p-2 w-full mt-2" />
//         </div>
//       </div>
//       <div className="grid grid-cols-2 gap-4 mt-4">
//         <div>
//           <label>Zip Code</label>
//           <input type="text" className="border p-2 w-full mt-2" />
//         </div>
//         <div>
//           <label>Country</label>
//           <input type="text" className="border p-2 w-full mt-2" />
//         </div>
//       </div>

//       {/* Submit Button */}
//       <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full">
//         Confirm & Pay
//       </button>
//     </form>
//   </div>
// );

// export default BookingForm;


import React from "react";

interface BookingFormProps {
  propertyName?: string;
  price?: number;
}

const BookingForm: React.FC<BookingFormProps> = ({ propertyName, price }) => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    {/* Property Info */}
    {propertyName && (
      <div className="mb-6 border-b pb-4">
        <h2 className="text-2xl font-semibold">{propertyName}</h2>
        {price && (
          <p className="text-indigo-600 font-medium mt-2">${price}/night</p>
        )}
      </div>
    )}

    <h2 className="text-xl font-semibold mb-2">Contact Details</h2>
    <form>
      {/* Contact Information */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            className="border p-2 w-full mt-1 rounded-md focus:ring focus:ring-indigo-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            className="border p-2 w-full mt-1 rounded-md focus:ring focus:ring-indigo-200"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="border p-2 w-full mt-1 rounded-md focus:ring focus:ring-indigo-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            className="border p-2 w-full mt-1 rounded-md focus:ring focus:ring-indigo-200"
          />
        </div>
      </div>

      {/* Payment Information */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Payment Information</h2>
      <div className="mt-2">
        <label className="block text-sm font-medium text-gray-700">
          Card Number
        </label>
        <input
          type="text"
          className="border p-2 w-full mt-1 rounded-md focus:ring focus:ring-indigo-200"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Expiration Date
          </label>
          <input
            type="text"
            className="border p-2 w-full mt-1 rounded-md focus:ring focus:ring-indigo-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">CVV</label>
          <input
            type="text"
            className="border p-2 w-full mt-1 rounded-md focus:ring focus:ring-indigo-200"
          />
        </div>
      </div>

      {/* Billing Address */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Billing Address</h2>
      <div className="mt-2">
        <label className="block text-sm font-medium text-gray-700">
          Street Address
        </label>
        <input
          type="text"
          className="border p-2 w-full mt-1 rounded-md focus:ring focus:ring-indigo-200"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            className="border p-2 w-full mt-1 rounded-md focus:ring focus:ring-indigo-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            State
          </label>
          <input
            type="text"
            className="border p-2 w-full mt-1 rounded-md focus:ring focus:ring-indigo-200"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Zip Code
          </label>
          <input
            type="text"
            className="border p-2 w-full mt-1 rounded-md focus:ring focus:ring-indigo-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Country
          </label>
          <input
            type="text"
            className="border p-2 w-full mt-1 rounded-md focus:ring focus:ring-indigo-200"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md w-full transition"
      >
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;
