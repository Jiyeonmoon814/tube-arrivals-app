import { useState, useEffect } from 'react'
import { TableRow, TableStyles } from '../App.styled'
import { ArrivalsHeader } from './ArrivalsHeader'

export const ArrivalsList = ({ arrivalsList }) => {
  const [showMore, setShowMore] = useState(false)
  const [updateList, setUpdateList] = useState([])

  useEffect(() => {
    // slice list when showMore state is false 
    if(!showMore){
      setUpdateList(arrivalsList.slice(0,5))
    }else{ // show fullList when the state is true 
      setUpdateList(arrivalsList)
    }
  },[arrivalsList, showMore])

  return (
    <TableStyles>
        <ArrivalsHeader showMore={showMore} setShowMore={setShowMore} />
        <tbody>
          {updateList.length > 0 && updateList.map((li,idx) => (
              <TableRow key={idx}>
                  <td>{idx+1}</td>
                  <td>{li.towards}</td>
                  <td>{Math.floor(li.timeToStation / 60) === 0 ? 'due' : Math.floor(li.timeToStation / 60) + ' mins'  }</td>
                  <td>{li.currentLocation}</td>
              </TableRow>
          ))}
        </tbody>
    </TableStyles>
  )
}
