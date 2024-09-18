"use client"
import PropertyCard from '@/components/PropertyCard';
import { Property } from '@/types/property';
import { useState, useEffect } from 'react';
import Pagination from '@/components/Pagination';
import SearchBar from '@/components/SearchBar';
import { propertyService } from '@/api/propertyService';

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProperties, setTotalProperties] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const pageSize = 9;

  useEffect(() => {
    async function fetchProperties() {
        const data = await propertyService.getAll(currentPage, pageSize, searchTerm);
        setProperties(data.properties);
        setTotalProperties(data.total);
    }
    fetchProperties();
  }, [currentPage, searchTerm]);

  const totalPages = Math.ceil(totalProperties / pageSize);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center my-8 ">
        <h1 className="text-3xl font-bold">Properties</h1>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}