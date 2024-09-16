"use client"
import { useState } from 'react';
import { propertyTypes } from '@/constants/propertyTypes';
import { locations } from '@/constants/locations';

export default function SellPage() {
    const [formData, setFormData] = useState({
        type: '',
        price: 100000,
        noBeds: 1,
        noBaths: 1,
        location: '',
        area: 50
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: ['price', 'noBeds', 'noBaths', 'area'].includes(name)
                ? Number(value) 
                : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            console.log(formData);
            const response = await fetch('http://localhost:8000/api/property', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            if (!response.ok) {
                throw new Error('Failed to submit property data');
            }
            
            const result = await response.json();
            console.log('Property submitted successfully:', result);
            // Redirect to the property page after successful submission
            window.location.href = '/property';
            // You might want to add some user feedback here, like a success message
        } catch (error) {
            console.error('Error submitting property:', error);
            // You might want to add some user feedback here, like an error message
        }
    };


    return (
        <div className="container mx-auto px-4 flex justify-center items-center min-h-screen">
            <div className="w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mb-6">Sell Your Property</h1>
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="propertyType">
                            Property Type
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="type"
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a property type</option>
                            {propertyTypes.map(({ value, label }) => (
                                <option key={value} value={value}>
                                    {label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                            Price (EGP)
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="price"
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            min={100000}
                            step={100000}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="beds">
                            Number of Beds
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="noBeds"
                            type="number"
                            name="noBeds"
                            value={formData.noBeds}
                            onChange={handleChange}
                            min={1}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="baths">
                            Number of Baths
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="noBaths"
                            type="number"
                            name="noBaths"
                            value={formData.noBaths}
                            onChange={handleChange}
                            min={1}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="area">
                            Area (m²)
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="area"
                            type="number"
                            name="area"
                            value={formData.area}
                            onChange={handleChange}
                            min={1}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                            Location
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a location</option>
                            {locations.map(({ value, label }) => (
                                <option key={value} value={value}>
                                    {label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}