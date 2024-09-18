"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Property } from '@/types/property';
import { propertyService } from '@/api/propertyService';
import { projectImages } from '@/constants/projectImages';

export default function PropertyDetailsPage({
  params,
}: {
  params: { propertyId: string };
}) {
  const [property, setProperty] = useState<Property | null>(null);

  useEffect(() => {
    async function fetchPropertyDetails() {
        const data = await propertyService.getById(params.propertyId);
        setProperty(data);
    }
    fetchPropertyDetails();
  }, [params.propertyId]);

  if (!property) return <div className="text-center mt-8">Property not found</div>;

  const imagePath = projectImages[property.projectInfo.project as keyof typeof projectImages] || '/images/placeholder-image.jpg';

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64 sm:h-80 md:h-96">
          <Image
            src={imagePath}
            alt={`${property.type} in ${property.projectInfo.project}`}
            fill
            objectFit='contain'
          />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{property.type} in {property.projectInfo.project}</h1>
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
                <p className="text-gray-600">Project</p>
                <p className="font-semibold">{property.projectInfo.project}</p>
              </div>
              <div>
                <p className="text-gray-600">Developer</p>
                <p className="font-semibold">{property.projectInfo.developer}</p>
              </div>
              <div>
                <p className="text-gray-600">Location</p>
                <p className="font-semibold">{property.projectInfo.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}