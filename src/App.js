import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Spinner from './Components/Spinner';
import { MEALS_API_URL } from './Api/Api.js'
import Meals from './Components/Meals';
import Alert from './Components/Alert';
import Favourite from './Components/Favourite';
import Pagination from './Components/Pagination';
import Footer from './Components/Footer';

function App() {

  const [data, setdata] = useState([])
  const [SaerchMeal, setSaerchMeal] = useState('')
  const [SaerchInp, setSaerchInp] = useState('')
  const [Loader, setLoader] = useState(false)
  const [RandomMeal, setRandomMeal] = useState(false)
  const [ShowAlertVal, setShowAlertVal] = useState(false)
  const [ShowAlertMsg, setShowAlertMsg] = useState('')
  const [IsRemovesFromFav, setIsRemovesFromFav] = useState(false)
  const [FavouritesArr, setFavouritesArr] = useState(JSON.parse(localStorage.getItem('FavouriteMeal')))

  let FavouritesObj = {};
  let FavouritesArray = []

  const fetchMeal = async (e) => {
    setLoader(true)
    let result
    try {
      if (RandomMeal) {
        result = await fetch(`${MEALS_API_URL}/random.php`)
      }
      else {
        result = await fetch(`${MEALS_API_URL}/search.php?s=${e}`)
      }
      let response = await result.json()
      setdata(await response.meals)

    } catch (error) {
      console.log(error);
    }
    setLoader(false)
    setRandomMeal(false)
  }

  useEffect(() => {
    fetchMeal(SaerchMeal)
  }, [])

  useEffect(() => {
    setSaerchMeal(SaerchInp)
  }, [SaerchInp])

  const handleSearchChange = (e) => {
    setSaerchInp(e.target.value)
  }

  const handleOnSearchClick = (e) => {
    e.preventDefault()
    fetchMeal(SaerchMeal)
  }

  const RandomMealClick = () => {
    setRandomMeal(true)
  }

  useEffect(() => {
    if (RandomMeal) {
      fetchMeal()
    }
  }, [RandomMeal])

  const handleFavouriteClick = (e, id, title, ins, img, src) => {
    if (!(FavouritesArr.find((e) => e.id == id))) {
      FavouritesObj = {
        id: id,
        title: title,
        ins: ins,
        img: img,
        src: src
      }
      FavouritesArray = [...FavouritesArr, FavouritesObj]
      localStorage.setItem('FavouriteMeal', JSON.stringify(FavouritesArray))
      setShowAlertMsg('Added To Favourites')
      setIsRemovesFromFav(false)
    }
    else {
      FavouritesArray = FavouritesArr.filter((e) => e.id !== id)
      localStorage.setItem('FavouriteMeal', JSON.stringify(FavouritesArray))
      setShowAlertMsg('Removed From Favourites')
      setIsRemovesFromFav(true)
    }
    setShowAlertVal(false)
    setFavouritesArr(JSON.parse(localStorage.getItem('FavouriteMeal')))
    FavouritesArray = []
    setShowAlertVal(true)
    setTimeout(() => {
      setShowAlertVal(false)
    }, 2300);
  }
  useEffect(() => {
    if (!FavouritesArr) {
      localStorage.setItem('FavouriteMeal', '[]')
      setFavouritesArr(JSON.parse(localStorage.getItem('FavouriteMeal')))
    }
  }, [FavouritesArr])

  return (
    <>
      <Header SaerchInp={SaerchInp} handleSearchChange={handleSearchChange} handleOnSearchClick={handleOnSearchClick} RandomMealClick={RandomMealClick} />
      {FavouritesArr && FavouritesArr.length > 0 &&
        <Favourite
          FavouritesArr={FavouritesArr} data={data} handleFavouriteClick={handleFavouriteClick}
          IsRemovesFromFav={IsRemovesFromFav} 
        />}
      <Pagination
        data={data ? data : []} RandomMealClick={RandomMealClick} handleFavouriteClick={handleFavouriteClick}
        FavouritesArr={FavouritesArr ? FavouritesArr : []} IsRemovesFromFav={IsRemovesFromFav}
        Loader={Loader} fetchMeal={fetchMeal}
      />

      {ShowAlertVal && <Alert ShowAlertMsg={ShowAlertMsg} />}
      <Footer/>
    </>
  );
}

export default App;
