"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Property {
  id: number;
  type: string;
  location: string;
  price: number;
  area: number;
  noBeds: number;
  noBaths: number;
}

export default function PropertyDetailsPage({
  params,
}: {
  params: { propertyId: string };
}) {
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPropertyDetails() {
      try {
        const response = await fetch(`http://localhost:8000/property/${params.propertyId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch property details');
        }
        const data = await response.json();
        setProperty(data);
      } catch (err) {
        setError('Error fetching property details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPropertyDetails();
  }, [params.propertyId]);

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;
  if (!property) return <div className="text-center mt-8">Property not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64 sm:h-80 md:h-96">
          <Image
            src="/placeholder-property-image.jpg"
            alt={`${property.type} in ${property.location}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{property.type} in {property.location}</h1>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-gray-600">Price</p>
              <p className="text-xl font-semibold">{property.price.toLocaleString()} EGP</p>
            </div>
            <div>
              <p className="text-gray-600">Area</p>
              <p className="text-xl font-semibold">{property.area} m²</p>
            </div>
            <div>
              <p className="text-gray-600">Bedrooms</p>
              <p className="text-xl font-semibold">{property.noBeds}</p>
            </div>
            <div>
              <p className="text-gray-600">Bathrooms</p>
              <p className="text-xl font-semibold">{property.noBaths}</p>
            </div>
          </div>
          <div className="border-t pt-6">
            <h2 className="text-2xl font-semibold mb-4">Property Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Type</p>
                <p className="font-semibold">{property.type}</p>
              </div>
              <div>
                <p className="text-gray-600">Location</p>
                <p className="font-semibold">{property.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}