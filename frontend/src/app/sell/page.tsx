"use client"
import { useState } from 'react';

export default function SellPage() {
    const [formData, setFormData] = useState({
        propertyType: '',
        price: '',
        beds: 1,
        baths: 1,
        project: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Here you would typically send the data to your backend
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
                            id="propertyType"
                            name="propertyType"
                            value={formData.propertyType}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a property type</option>
                            <option value="apartment">Apartment</option>
                            <option value="villa">Villa</option>
                            <option value="studio">Studio</option>
                            <option value="twinhouse">Twinhouse</option>
                            <option value="townhouse">Townhouse</option>
                            <option value="duplex">Duplex</option>
                            <option value="chalet">Chalet</option>
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
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="beds">
                            Number of Beds
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="beds"
                            type="number"
                            name="beds"
                            value={formData.beds}
                            onChange={handleChange}
                            min="1"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="baths">
                            Number of Baths
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="baths"
                            type="number"
                            name="baths"
                            value={formData.baths}
                            onChange={handleChange}
                            min="1"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="project">
                            Project
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="project"
                            name="project"
                            value={formData.project}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a project</option>
                            <option value="tagSultan">Tag Sultan</option>
                            <option value="mountainView">Mountain View</option>
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