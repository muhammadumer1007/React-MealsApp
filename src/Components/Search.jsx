import React from 'react'

function Search({ SaerchInp, handleSearchChange, handleOnSearchClick, RandomMealClick }) {
    return (
        <>
            <form className="d-flex" onSubmit={handleOnSearchClick}>

                <input className="form-control me-2 " value={SaerchInp} type="search" placeholder="Search" onChange={(e) => handleSearchChange(e)} aria-label="Search" id="search" />
                <button className="btnPink" id="searchBtn" type="submit">Search</button>
            </form>
            <button className="btnPink mx-1 btnRandom" id="searchBtn" type="submit" onClick={RandomMealClick}>Random Meal</button>
        </>
    )
}

export default Search