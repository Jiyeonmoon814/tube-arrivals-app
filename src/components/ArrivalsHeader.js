import { TableRow } from '../App.styled'

export const ArrivalsHeader = ({ showMore, setShowMore }) => {
  return (
    <thead>
      <TableRow>
        <th style={{cursor:'pointer'}} onClick={(e)=>setShowMore(!showMore)}>	
          { showMore ? 'Close' : 'More'} 
        </th>
        <th>Towards</th>
        <th>Due</th>
        {/* <th>Current Location</th> */}
        <th>Platform names</th>
      </TableRow>
    </thead>
  )
}
