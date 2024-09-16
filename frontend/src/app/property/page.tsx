"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
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

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    async function fetchProperties() {
      try {
        const response = await fetch('http://localhost:8000/property');
        if (!response.ok) {
          throw new Error('Failed to fetch properties');
        }
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    }

    fetchProperties();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-8">Properties</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <Link href={`/property/${property.id}`} key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden block hover:shadow-lg transition duration-300">
            <div className="relative h-48">
              <Image
                src="/placeholder-property-image.jpg"
                alt={`${property.type} in ${property.location}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{property.type}</h2>
              <p className="text-gray-600 mb-2">{property.location}</p>
              <p className="text-lg font-bold mb-2">{property.price.toLocaleString()} EGP</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{property.area} m²</span>
                <span>{property.noBeds} beds</span>
                <span>{property.noBaths} baths</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}