import React from 'react'

function Modal({ id, title, img, src, ins, FavouritesArr, MealData, handleFavouriteClick }) {
    let IsRemovesFromFav = FavouritesArr.find((e) => e.id == id) ? true : false

    return (
        <>
            <div
                className="modal fade"
                id={`Modal${id}`}
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <img src={img} className="card-img-top" alt={title} height="300px" />
                        <div className="modal-body">
                            <h5 className="card-title"> {title}</h5>
                            <p className='mt-1'>{ins}</p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btnHeart" onClick={() => handleFavouriteClick('', id, title, ins, img, src)}
                                data-bs-dismiss={IsRemovesFromFav ? 'modal' : ''}
                            >
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
                                {FavouritesArr.find((e) => e.id == id) ? 'Remove From Favourites' : 'Add To Favourites'}
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <a href={src} target="_blank" className="btn btn-primary">
                                Original Source
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal