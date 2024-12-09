import { useState, useEffect } from "react";
import RestCard from "./ResCard"
import React from 'react';
import ShimmerUI from "./Shimmer";

const Body = () => {
    const [listofRestaurants, setListofRestaurants] = useState([]);
    const [modifiedListofRestaurants, setModifiedListofRestaurants] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState([""]);
    const fetchData = async () => {
        // const data1 = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        // const json1 = await data1.json();
        // const fetched1 = json1?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        const data2 = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=17.406498&lng=78.47724389999999&str=Indian&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=762f44a3-fb32-94ca-b187-cae421f60921&metaData=%7B%22type%22%3A%22CUISINE%22%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Cuisine%22%7D");
        const json2 = await data2.json();
        const fetched2 = json2?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards;
        console.log(fetched2);
        const combinedFetchedData = [...fetched2];
        setListofRestaurants(combinedFetchedData);
        setModifiedListofRestaurants(combinedFetchedData);
    };

    useEffect(() => { fetchData() }, []);

    return listofRestaurants.length === 0 ? <ShimmerUI /> : (
        <div className='body'>
            <div className="options">
                <div className="all">
                    <button onClick={() => {
                        setModifiedListofRestaurants(listofRestaurants)
                    }}>All Restaurants</button>
                </div>
                <div className="search">
                    <input className="search-bar" type="text" value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}></input>
                    <button className="search-btn" onClick={() => {
                        setModifiedListofRestaurants(listofRestaurants.filter((restaurant) =>
                            restaurant.card.card.info.name.toLowerCase().includes(searchKeyword.toLowerCase())
                        ));
                    }} >Search</button>
                </div>
                <div className="filter">
                    <button className="filter-btn"
                        onClick={() => {
                            const filterTopRated = listofRestaurants.filter((restaurant) =>
                                restaurant.card.card.info.avgRating > 4.3

                            );
                            setModifiedListofRestaurants(filterTopRated);
                        }} > Top Rated Restaurants</button>
                </div>
            </div>
            <div className="res-container">
                {
                    modifiedListofRestaurants.map((restaurant) => (
                        <RestCard key={restaurant.card.card.info.id} restData={restaurant} />
                    ))
                }
            </div>
        </div >

    )
}

export default Body;