import React, { useState } from 'react'
import Card from './Card'
function Meals({ data, handleFavouriteClick, FavouritesArr, IsRemovesFromFav, currentItems, fetchMeal }) {
    const ReversedData = [...currentItems].reverse()
    return (
        <>
            <div className="mx-auto container row">

                {
                    ReversedData.map((e) => {
                        return (
                            <Card key={e.idMeal}
                                MealData={e} handleFavouriteClick={handleFavouriteClick} FavouritesArr={FavouritesArr}
                                IsRemovesFromFav={IsRemovesFromFav}
                            />
                        )
                    })
                }
                <div className={data.length <= 0 ? '' : 'd-none'}>
                    <h5 className='mx-auto mt-3'>Search Result Not Found</h5>
                    <h6 className='mt-4 AllMeals' onClick={() => fetchMeal('')}>See All Meals</h6>

                </div>
            </div>
        </>
    )
}

export default Meals