import { useForm } from "react-hook-form";
import './addProperties.css'

function AddProperties() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      function onSubmit(data) {
        console.log(data);
        
      }
    return (
        <div>
            <h1>Add Properties</h1>

            <div className="add-properties-container">
                <form className="add-properties-form" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="mainImage">Main Image:<input type="url" id="mainImage" name="mainImage" {...register('mainImage')} /></label>
                    
                    {/* read 3 images */}
                    <label htmlFor="subImages1">Sub Images1: <input type="url" id="subImages1" name="subImages1" multiple {...register('subImages1')} /></label>

                    <label htmlFor="subImages2">Sub Images2: <input type="url" id="subImages2" name="subImages2" multiple {...register('subImages2')}  /></label>
                    <label htmlFor="subImages3">Sub Images3: <input type="url" id="subImages3" name="subImages3" multiple {...register('subImages3')} /></label>
                    <label htmlFor="name">Name:  <input type="text" id="name" name="name" {...register('name')} /></label>

                    <label htmlFor="location">Location: <input type="text" id="location" name="location" {...register('location')} /></label>
                    <label htmlFor="description">Description: </label>
                    <textarea id="description" name="description" {...register('description')}></textarea>

                    <label htmlFor="price">Price:<input type="number" id="price" name="price" {...register('price')} /></label>

                    <label htmlFor="numberOfBed">Number of Bedrooms:<input type="number" id="numberOfBed" name="numberOfBed" {...register('numberOfBed')} /></label>

                    <label htmlFor="numberOfBathRoom">Number of Bathrooms:<input type="number" id="numberOfBathRoom" name="numberOfBathRoom" {...register('numberOfBathRoom')} /></label>
                    <button type="submit">Add Property</button>
                </form>
            </div>
        </div>
    )
}

export default AddProperties
