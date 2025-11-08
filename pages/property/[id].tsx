import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingForm from "@/components/booking/BookingForm";

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  rating?: number;
  description?: string;
  image?: string;
}

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchProperty = async () => {
      try {
        const res = await axios.get<Property>(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/properties/${id}`
        );
        setProperty(res.data);
      } catch (err) {
        console.error("Error fetching property details:", err);
        setError("Failed to load property details");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center mt-10 text-gray-500">
        Loading property details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 mt-10">
        {error}
      </div>
    );
  }

  if (!property) {
    return (
      <div className="text-center mt-10 text-gray-500">
        Property not found.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Property details */}
      <PropertyDetail property={property} />

      {/* Booking Form Section */}
      <div className="mt-12 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Book This Property</h2>
        <BookingForm
          propertyName={property.title}
          price={property.price}
        />
      </div>
    </div>
  );
}
