import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../contants'; // Ensure the path to your constants file is correct

export const RestrauntDetails = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [menu, setMenu] = useState({ itemCards: [] }); // Initialize as an object with an empty itemCards array
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

            const restaurantData = json?.data;
            // Corrected extraction of menu data from JSON response
            const menuData = json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};

            console.log('Menu data:', menuData);

            if (restaurantData) {
                setRestaurant(restaurantData);
                setMenu(menuData); // Set the entire menu object
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
        <div className='MENU'>
           <div>
           <h2>Restaurant ID: {id}</h2>
            <h2>{restaurant.cards[2]?.card?.card?.info.name}</h2>
            {restaurant.cards[2]?.card?.card?.info.cloudinaryImageId && (
                <img
                    src={`${IMG_CDN_URL}${restaurant.cards[2]?.card?.card?.info.cloudinaryImageId}`}
                    alt={restaurant.cards[2]?.card?.card?.info.name}
                />
            )}
            <h3>{restaurant.cards[2]?.card?.card?.info.locality}</h3>
            <h3>{restaurant.cards[2]?.card?.card?.info.city}</h3>
            <h3>{restaurant.cards[2]?.card?.card?.info.costForTwoMsg}</h3>
           </div>
            <div>
                <h1>Menu</h1>
                <ul>
                    {menu.itemCards?.map((item) => (
                        <li key={item.card.info.id}>{item.card.info.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RestrauntDetails;
