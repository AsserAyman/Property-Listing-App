"use client"
import PropertyCard from '@/components/PropertyCard';
import { Property } from '@/types/property';
import { useState, useEffect } from 'react';
import Pagination from '@/components/Pagination';
import SearchBar from '@/components/SearchBar';

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProperties, setTotalProperties] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const pageSize = 9;

  useEffect(() => {
    async function fetchProperties() {
      try {
        const response = await fetch(`http://localhost:8000/api/property?page=${currentPage}&limit=${pageSize}&search=${searchTerm}`);
        if (!response.ok) {
          throw new Error('Failed to fetch properties');
        }
        const data = await response.json();
        setProperties(data.properties);
        setTotalProperties(data.total);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
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
      <h1 className="text-3xl font-bold my-8">Properties</h1>
      <SearchBar onSearch={handleSearch} />
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