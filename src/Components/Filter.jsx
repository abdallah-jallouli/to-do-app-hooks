import React from 'react'

const Filter = ({ChangeIsFiltered}) => {
  return (
    <div>
        <button onClick={()=>ChangeIsFiltered()}  >Filter</button>
    </div>
  )
}

export default Filter