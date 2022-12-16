import React from 'react'
import Search from './Search'

function Header({ SaerchInp, handleSearchChange, handleOnSearchClick, RandomMealClick }) {
    return (
        <>
            <header className='header'>
                <div className="logo">
                    <h4>Meals App</h4>
                </div>
                <nav className="nav">
                    <Search SaerchInp={SaerchInp} handleSearchChange={handleSearchChange} handleOnSearchClick={handleOnSearchClick} RandomMealClick={RandomMealClick} />
                </nav>
            </header>
        </>
    )
}

export default Header