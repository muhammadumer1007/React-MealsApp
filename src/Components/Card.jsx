import React, { useState } from 'react'
import Modal from './Modal'
function Card({ MealData, handleFavouriteClick, FavouritesArr, IsRemovesFromFav }) {
    return (

        <>
            <div className="col-sm-12 col-xm-12 col-md-6 col-lg-4 mt-3" style={{ height: '500px' }} id='Card'>
                <div className="card mx-auto" style={{ width: "18rem" }}>
                    <img src={MealData.strMealThumb} className="card-img-top" alt={MealData.strMeal} height="250px" />
                    <div className="card-body">
                        <div id='Card-title'>
                            <h5 className="card-title" >{MealData.strMeal}</h5>
                            <p className="card-text" > {(MealData.strInstructions.slice(0, (MealData.strInstructions.indexOf(MealData.strInstructions.split(" ")[13]))) + '....')}</p>
                        </div>
                        <div className="CardBottomContainer">
                            <div className="d-flex justify-content-center">
                                <button
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target={`#Modal${MealData.idMeal}`}
                                    className="btn btn-primary"
                                >
                                    Read More
                                </button>
                            </div>
                            <div className="d-flex justify-content-center mt-2">
                                <button className="btn btnHeart" onClick={() => handleFavouriteClick(MealData, MealData.idMeal, MealData.strMeal, MealData.strInstructions, MealData.strMealThumb, MealData.strSource)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={22}
                                        height={22}
                                        fill="pink"
                                        className="bi bi-heart"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                    </svg>&nbsp;&nbsp;
                                    {FavouritesArr.find((e) => e.id == MealData.idMeal) ? 'Remove From Favourites' : 'Add To Favourites'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                id={MealData.idMeal} title={MealData.strMeal} img={MealData.strMealThumb}
                src={MealData.strSource} ins={MealData.strInstructions}
                MealData={MealData} FavouritesArr={FavouritesArr} handleFavouriteClick={handleFavouriteClick}
                IsRemovesFromFav={IsRemovesFromFav}
            />
        </>
    )
}

export default Card