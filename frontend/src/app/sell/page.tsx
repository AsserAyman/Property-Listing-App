"use client"
import { useState } from 'react';
import { propertyTypes } from '@/constants/propertyTypes';
import { projects } from '@/constants/projects';
import { propertyService } from '@/api/propertyService';
import FormInput from '@/components/FormInput';
import FormSelect from '@/components/FormSelect';

export default function SellPage() {
    const [formData, setFormData] = useState({
        type: '',
        price: 100000,
        noBeds: 1,
        noBaths: 1,
        project: '',
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
        await propertyService.create(formData);
        window.location.href = '/property';
    };

    return (
        <div className="container mx-auto px-4 flex justify-center items-center min-h-screen">
            <div className="w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mb-6">Sell Your Property</h1>
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <FormSelect
                        label="Property Type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        options={propertyTypes}
                        required
                        placeholder="Select a property type"
                    />
                    <FormInput
                        label="Price (EGP)"
                        name="price"
                        type="number"
                        value={formData.price}
                        onChange={handleChange}
                        required
                        min={100000}
                        step={100000}
                    />
                    <FormInput
                        label="Number of Beds"
                        name="noBeds"
                        type="number"
                        value={formData.noBeds}
                        onChange={handleChange}
                        required
                        min={1}
                    />
                    <FormInput
                        label="Number of Baths"
                        name="noBaths"
                        type="number"
                        value={formData.noBaths}
                        onChange={handleChange}
                        required
                        min={1}
                    />
                    <FormInput
                        label="Area (m²)"
                        name="area"
                        type="number"
                        value={formData.area}
                        onChange={handleChange}
                        required
                        min={1}
                    />
                    <FormSelect
                        label="Project"
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        options={projects}
                        required
                        placeholder="Select a project"
                    />
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