import React from 'react'
import { UserContextConsumer } from './UserContext'

const Child = ({message}) => {
  return (
    <div id='child'>
      <h2 style={{color:'white'}}>{message}</h2>
      <UserContextConsumer>
        {(value)=>{
            return <h2>{value}</h2>
        }}
      </UserContextConsumer>
    </div>
  )
}

export default Child
