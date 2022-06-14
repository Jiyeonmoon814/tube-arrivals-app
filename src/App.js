import axios from 'axios'
import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { ArrivalsList } from './components/ArrivalsList'

export const App = () => {
  const [count, setCount] = useState(0)
  const [stopPointId, setStopPointId] = useState('')
  const [platforms, setPlatforms] = useState([])
  const [arrivalsList, setArrivalsList] = useState([])

  useEffect(() => {
    // call arrivals data from server every 1 min
    const interval = setInterval(() => {
      setCount(count => count + 1) // doesn't depend on count variable outside 
    },60000) 

    return () => clearInterval(interval) 
    // it doesn't use any variables in the component scope 
  },[])


  useEffect(() => {
    if(count === 0){
        getStopPointId()
    }else{
        getArrivalsList()
    }

  },[count])

  useEffect(() => {
    if(stopPointId !== ''){
        getArrivalsList()
    }
  },[stopPointId])

  //get arrivals from server with stopPointId 
  const getArrivalsList = async () => {
    try{
      const res = await axios.get(`https://api.tfl.gov.uk/StopPoint/${stopPointId}/Arrivals?mode=tube`)

      //sort arrivals List by timeToStation
      const sortData = res.data.sort(sortList)
     
      setArrivalsList(sortData)
      
      // filter list by platformNames
      const platformNames = sortData.map(el => el.platformName)
      const filterPlatforms = new Set(platformNames)
      let platforms = []

      for(var i of  filterPlatforms){
        platforms.push(i)
      }

      setPlatforms(platforms)


    }catch(err){
      console.log(err)
    }
  }
  
  //sort arrivals List by timeToStation
  const sortList = (a, b) => {
    return ((a.timeToStation < b.timeToStation) ? -1 : ((a.timeToStation > b.timeToStation) ? 1 : 0));
  }
  
  //get station's stop point id from server 
  const getStopPointId = async () => {
    const stopPointName = 'Oxford Circus Underground Station'
    
    try{
      const res = await axios.get(`https://api.tfl.gov.uk/Stoppoint/Search/${stopPointName}?modes=tube`)

      setStopPointId(res.data.matches[0].id)
    }catch(err){
      console.log(err)
    }
  }


  return (
    <>
      {platforms.map(el => (
        <>
        <Header platform={el} />
        <ArrivalsList arrivalsList={arrivalsList.filter(item => item.platformName == el)} />
        </>
      ))}
    </>
  )
}
