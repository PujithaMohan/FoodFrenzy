import { useState, useEffect } from "react";
import RestCard from "./ResCard"
import React from 'react';
import ShimmerUI from "./Shimmer";

const Body = () => {
    const [listofRestaurants, setListofRestaurants] = useState([]);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    useEffect(() => { fetchData() }, []);

    return listofRestaurants.length === 0 ? <ShimmerUI /> : (
        <div className='body'>
            <div className="all">
                <button className="all-btn" onClick={() => {
                    setListofRestaurants(listofRestaurants.map((restaurant) => (
                        <RestCard key={restaurant.info.id} restData={restaurant} />
                    )));
                }} >All</button>
            </div>
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        const filterTopRated = listofRestaurants.filter((restaurant) =>
                            restaurant.info.avgRating > 4.3

                        );
                        setListofRestaurants(filterTopRated);
                    }} > Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    listofRestaurants.map((restaurant) => (
                        <RestCard key={restaurant.info.id} restData={restaurant} />
                    ))
                }
            </div>
        </div >

    )
}

export default Body;