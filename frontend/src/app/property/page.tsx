"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
interface Property {
  id: number;
  type: string;
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
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{property.type}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}