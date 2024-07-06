import React from 'react'
import Responsive from './Responsive'

const MediaQueries = () => {
  return (
    <div>
      <h1>Responsive Example</h1>
      <Responsive query="(max-width: 600px)">
        {(isMobile) => (
          isMobile ? (
            <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>
              <h2>Mobile View</h2>
              <p>This is displayed on mobile devices.</p>
            </div>
          ) : (
            <div style={{ backgroundColor: 'lightgreen', padding: '20px' }}>
              <h2>Desktop View</h2>
              <p>This is displayed on desktop devices.</p>
            </div>
          )
        )}
      </Responsive>
    </div>
  )
}

export default MediaQueries
