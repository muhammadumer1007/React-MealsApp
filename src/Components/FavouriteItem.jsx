import React from 'react'
import Modal from './Modal'

function FavouriteItem({ id, title, img, ins, src, FavouritesArr, data, handleFavouriteClick, IsRemovesFromFav }) {
    return (
        <>
            <div className="FavouriteItems" href="#" data-bs-toggle="modal" data-bs-target={`#Modal${id}`}>
                <img src={img} className="rounded-pill mx-1" width="120px" height="120px"
                    alt={title} />
                <h5 className="mt-1">{title} </h5>
            </div>

            <Modal
                id={id} title={title} img={img} src={src} ins={ins}
                FavouritesArr={FavouritesArr} MealData={data}
                handleFavouriteClick={handleFavouriteClick}
                IsRemovesFromFav={IsRemovesFromFav}
            />
        </>
    )
}

export default FavouriteItem