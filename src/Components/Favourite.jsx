import React from 'react'
import FavouriteItem from './FavouriteItem'

function Favourite({ FavouritesArr, data, handleFavouriteClick, IsRemovesFromFav }) {
    if (FavouritesArr) {
        return (
            <>

                <section className="container mt-3 Favourites" id="Favourites">

                    <div className="accordion" id="">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    <h1 className='text-center'>Favourites</h1>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div className="accordion-body">

                                    <div className="FavouriteItemsContainer" id="FavouriteItemsContainer">
                                        {
                                            FavouritesArr.length > 0 &&
                                            FavouritesArr.map((e) => {
                                                return (
                                                    <FavouriteItem key={e.id}
                                                        id={e.id} title={e.title} img={e.img}
                                                        ins={e.ins} src={e.src} FavouritesArr={FavouritesArr}
                                                        data={data} handleFavouriteClick={handleFavouriteClick}
                                                        IsRemovesFromFav={IsRemovesFromFav}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Favourite