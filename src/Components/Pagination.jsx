import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import Meals from './Meals';
import Spinner from './Spinner';

function Pagination({ data, handleFavouriteClick, FavouritesArr, IsRemovesFromFav, RandomMealClick, Loader , fetchMeal}) {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching data from another resources.
    // (This could be data from props; or data loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + 6;
    let currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / 6);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * 6) % data.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        currentItems = data
    }, [data])



    return (
        <>
            {
                Loader ? <Spinner /> :
                    (
                        <div>
                            <Meals currentItems={currentItems}
                                data={data} RandomMealClick={RandomMealClick} handleFavouriteClick={handleFavouriteClick}
                                FavouritesArr={FavouritesArr} IsRemovesFromFav={IsRemovesFromFav} fetchMeal={fetchMeal}
                            />
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel="Next"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={5}
                                pageCount={pageCount}
                                previousLabel="Prev."
                                renderOnZeroPageCount={null}
                                pageClassName="pageClassName"
                                containerClassName='containerClassName'
                                pageLinkClassName='pageLinkClassName'
                                nextClassName='nextClassName'
                                previousClassName='previousClassName'
                                previousLinkClassName='previousLinkClassName'
                                nextLinkClassName='nextLinkClassName'
                                disabledLinkClassName='disabledLinkClassName'
                                activeLinkClassName='activeLinkClassName'
                            />

                        </div>
                    )
            }



        </>
    )
}

export default Pagination