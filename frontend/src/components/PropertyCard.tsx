import Link from "next/link";
import Image from 'next/image';
import { Property } from '@/types/property';

export default function PropertyCard({ property }: { property: Property }) {
    return (
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
    )
}