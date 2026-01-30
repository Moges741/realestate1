import { useForm } from "react-hook-form";
import { useState } from "react";
import './addProperties.css';
import axios from 'axios';

function AddProperties() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    async function onSubmit(data) {
        setIsLoading(true);
        setSuccessMessage("");
        
        try {
            // Combine subImages into an array
            const subImages = [
                data.subImages1,
                data.subImages2,
                data.subImages3
            ].filter(url => url && url.trim() !== "");

            const propertyData = {
                mainImage: data.mainImage,
                subImages: subImages,
                name: data.name,
                location: data.location,
                description: data.description,
                price: Number(data.price),
                numberOfBed: Number(data.numberOfBed),
                numberOfbathRoom: Number(data.numberOfBathRoom)
            };

            console.log('Sending data:', propertyData);

            // Send to backend
            const response = await axios.post('http://localhost:5000/api/properties', propertyData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.data.success) {
                setSuccessMessage('🎉 Property added successfully!');
                reset(); // Clear the form
                
                // Clear success message after 5 seconds
                setTimeout(() => {
                    setSuccessMessage("");
                }, 5000);
            }
        } catch (error) {
            console.error('Error adding property:', error);
            alert('Failed to add property: ' + (error.response?.data?.message || error.message));
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="add-properties-container">
            <h1>Add New Property</h1>
            
            {successMessage && (
                <div className="success-message">
                    {successMessage}
                </div>
            )}

            <form className="add-properties-form" onSubmit={handleSubmit(onSubmit)}>
                {isLoading && (
                    <div className="loading-overlay">
                        <div className="spinner"></div>
                    </div>
                )}
                
                {/* Main Image */}
                <label htmlFor="mainImage">
                    Main Image URL
                    <input 
                        type="url" 
                        id="mainImage" 
                        {...register('mainImage', { 
                            required: "Main image URL is required",
                            pattern: {
                                value: /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif|svg)(\?.*)?$/i,
                                message: "Please enter a valid image URL"
                            }
                        })}
                        className={errors.mainImage ? 'error' : ''}
                        placeholder="https://example.com/property-image.jpg"
                    />
                    {errors.mainImage && (
                        <span className="error-message">{errors.mainImage.message}</span>
                    )}
                </label>
                
                {/* Sub Images */}
                <div className="sub-images-group">
                    <label htmlFor="subImages1">
                        Sub Image 1
                        <input 
                            type="url" 
                            id="subImages1"
                            {...register('subImages1', {
                                pattern: {
                                    value: /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif|svg)(\?.*)?$/i,
                                    message: "Please enter a valid image URL"
                                }
                            })}
                            className={errors.subImages1 ? 'error' : ''}
                            placeholder="https://example.com/image1.jpg"
                        />
                        {errors.subImages1 && (
                            <span className="error-message">{errors.subImages1.message}</span>
                        )}
                    </label>

                    <label htmlFor="subImages2">
                        Sub Image 2
                        <input 
                            type="url" 
                            id="subImages2"
                            {...register('subImages2', {
                                pattern: {
                                    value: /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif|svg)(\?.*)?$/i,
                                    message: "Please enter a valid image URL"
                                }
                            })}
                            className={errors.subImages2 ? 'error' : ''}
                            placeholder="https://example.com/image2.jpg"
                        />
                        {errors.subImages2 && (
                            <span className="error-message">{errors.subImages2.message}</span>
                        )}
                    </label>

                    <label htmlFor="subImages3">
                        Sub Image 3
                        <input 
                            type="url" 
                            id="subImages3"
                            {...register('subImages3', {
                                pattern: {
                                    value: /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif|svg)(\?.*)?$/i,
                                    message: "Please enter a valid image URL"
                                }
                            })}
                            className={errors.subImages3 ? 'error' : ''}
                            placeholder="https://example.com/image3.jpg"
                        />
                        {errors.subImages3 && (
                            <span className="error-message">{errors.subImages3.message}</span>
                        )}
                    </label>
                </div>
                
                {/* Property Name */}
                <label htmlFor="name">
                    Property Name
                    <input 
                        type="text" 
                        id="name"
                        {...register('name', { 
                            required: "Property name is required",
                            minLength: {
                                value: 5,
                                message: "Name must be at least 5 characters"
                            }
                        })}
                        className={errors.name ? 'error' : ''}
                        placeholder="Beautiful Luxury Villa"
                    />
                    {errors.name && (
                        <span className="error-message">{errors.name.message}</span>
                    )}
                </label>
                
                {/* Location */}
                <label htmlFor="location">
                    Location
                    <input 
                        type="text" 
                        id="location"
                        {...register('location', { 
                            required: "Location is required"
                        })}
                        className={errors.location ? 'error' : ''}
                        placeholder="Bole, Addis Ababa"
                    />
                    {errors.location && (
                        <span className="error-message">{errors.location.message}</span>
                    )}
                </label>
                
                {/* Description */}
                <label htmlFor="description">
                    Description
                    <textarea 
                        id="description"
                        {...register('description', { 
                            required: "Description is required",
                            minLength: {
                                value: 20,
                                message: "Description must be at least 20 characters"
                            }
                        })}
                        className={errors.description ? 'error' : ''}
                        placeholder="Describe your property in detail..."
                    />
                    {errors.description && (
                        <span className="error-message">{errors.description.message}</span>
                    )}
                </label>
                
                {/* Price */}
                <label htmlFor="price">
                    Price (ETB)
                    <input 
                        type="number" 
                        id="price"
                        {...register('price', { 
                            required: "Price is required",
                            min: {
                                value: 1000,
                                message: "Price must be at least 1,000 ETB"
                            },
                            max: {
                                value: 1000000000,
                                message: "Price is too high"
                            }
                        })}
                        className={errors.price ? 'error' : ''}
                        placeholder="5000000"
                    />
                    {errors.price && (
                        <span className="error-message">{errors.price.message}</span>
                    )}
                </label>
                
                {/* Number of Bedrooms */}
                <label htmlFor="numberOfBed">
                    Bedrooms
                    <input 
                        type="number" 
                        id="numberOfBed"
                        {...register('numberOfBed', { 
                            required: "Number of bedrooms is required",
                            min: {
                                value: 1,
                                message: "At least 1 bedroom is required"
                            },
                            max: {
                                value: 20,
                                message: "Maximum 20 bedrooms allowed"
                            }
                        })}
                        className={errors.numberOfBed ? 'error' : ''}
                        placeholder="3"
                    />
                    {errors.numberOfBed && (
                        <span className="error-message">{errors.numberOfBed.message}</span>
                    )}
                </label>
                
                {/* Number of Bathrooms */}
                <label htmlFor="numberOfBathRoom">
                    Bathrooms
                    <input 
                        type="number" 
                        id="numberOfBathRoom"
                        {...register('numberOfBathRoom', { 
                            required: "Number of bathrooms is required",
                            min: {
                                value: 1,
                                message: "At least 1 bathroom is required"
                            },
                            max: {
                                value: 20,
                                message: "Maximum 20 bathrooms allowed"
                            }
                        })}
                        className={errors.numberOfBathRoom ? 'error' : ''}
                        placeholder="2"
                    />
                    {errors.numberOfBathRoom && (
                        <span className="error-message">{errors.numberOfBathRoom.message}</span>
                    )}
                </label>
                
                {/* Submit Button */}
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Adding Property...' : 'Add Property'}
                </button>
            </form>
        </div>
    );
}

export default AddProperties;