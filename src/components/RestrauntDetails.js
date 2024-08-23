import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../contants'; // Ensure the path to your constants file is correct

export const RestrauntDetails = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getRestroInfo();
    }, [id]);

    async function getRestroInfo() {
        try {
            setLoading(true); // Set loading state to true before fetching
            const response = await fetch(
                `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.95250&lng=75.71050&restaurantId=${id}`
            );

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const json = await response.json();
            console.log('JSON response:', json); // Log JSON response to verify its structure

            // Adjust this line according to the actual JSON structure returned by the API
            const restaurantData = json?.data?.cards[2]?.card?.card?.info;
            if (restaurantData) {
                setRestaurant(restaurantData);
            } else {
                setError('Restaurant data not found');
            }
        } catch (error) {
            console.error('Error fetching restaurant info:', error);
            setError(error.message);
        } finally {
            setLoading(false); // End loading state
        }
    }

    // Show loading spinner while fetching data
    if (loading) {
        return <div>Loading...</div>;
    }

    // Display error message if there is an error fetching data
    if (error) {
        return <div>Error: {error}</div>;
    }

    // Display message if no restaurant data is available
    if (!restaurant) {
        return <div>No restaurant data available.</div>;
    }

    // Render restaurant details
    return (
        <div>
            <h2>Restaurant ID: {id}</h2>
            <h2>{restaurant.name}</h2>
            {restaurant.cloudinaryImageId && (
                <img
                    src={`${IMG_CDN_URL}${restaurant.cloudinaryImageId}`}
                    alt={restaurant.name}
                />
            )}
            <h3>{restaurant.locality}</h3>
            <h3>{restaurant.city}</h3>
            <h3>{restaurant.costForTwoMsg}</h3>
        </div>
    );
};

export default RestrauntDetails;
