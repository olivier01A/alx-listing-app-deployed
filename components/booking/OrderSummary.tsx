import Image from "next/image";

type BookingDetails = {
  propertyName: string;
  startDate: string;
  totalNights: number;
  bookingFee: number;
  price: number;
};

type OrderSummaryProps = {
  bookingDetails: BookingDetails;
};

const OrderSummary: React.FC<OrderSummaryProps> = ({ bookingDetails }) => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold">Review Order Details</h2>

    {/* Property Info */}
    <div className="flex items-center mt-4">
      <Image
        src="/assets/img/Image_container2.png"
        alt="Property"
        width={128}
        height={128}
        className="object-cover rounded-md"
      />
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
        <p className="text-sm text-gray-500">4.76 (345 reviews)</p>
        <p className="text-sm text-gray-500">
          {bookingDetails.startDate} • {bookingDetails.totalNights} Nights
        </p>
      </div>
    </div>

    {/* Price Breakdown */}
    <div className="mt-6">
      <div className="flex justify-between">
        <p>Booking Fee</p>
        <p>${bookingDetails.bookingFee.toFixed(2)}</p>
      </div>
      <div className="flex justify-between mt-2">
        <p>Subtotal</p>
        <p>${bookingDetails.price.toFixed(2)}</p>
      </div>
      <div className="flex justify-between mt-2 font-semibold">
        <p>Grand Total</p>
        <p>
          $
          {(bookingDetails.bookingFee + bookingDetails.price).toFixed(2)}
        </p>
      </div>
    </div>
  </div>
);

export default OrderSummary;
