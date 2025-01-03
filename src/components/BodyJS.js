import { restList } from "../utils/resList";
import ResCard from "./ResCard";

const BodyJS = () => {
    let listofRestaurants = restList;
    return (
        <div className='body'>
            <div className='filter'>
                <button className='filter-button' onClick={() => {
                    /**
                     * if we use restList=restList in place of listofRestaurants 
                     * Cannot set property restList of #<Object> which has 
                     * only a getter TypeError: Cannot set property restList 
                     * of #<Object> which has only a getter at onClick
                     * 
                     * occurs because you are trying to directly modify the restList
                     *  imported from ../utils/resList, which is likely defined 
                     * as a constant or an immutable object. In JavaScript, 
                     * you cannot reassign or mutate imported constants directly.
                     */
                    listofRestaurants = listofRestaurants.filter(restaurant => restaurant.data.avgRating > 4);
                    console.log(restList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className='search'>
                Search
            </div>
            <div className='res-container'>
                {restList.map(restaurant => <ResCard key={restaurant.data.id} restData={restaurant} />)}

            </div>
        </div>
    );
};

export default Body;