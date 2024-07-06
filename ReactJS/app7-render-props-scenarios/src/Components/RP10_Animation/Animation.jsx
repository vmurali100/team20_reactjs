import React from 'react'
import AnimationWrapper from './AnimationWrapper'

const Animation = () => {
  return (
    <div>
       <h1>Animation Example</h1>
      <AnimationWrapper duration={2000}>
        {({ progress, startAnimation, isAnimating }) => (
          <div>
            <div
              style={{
                width: '100px',
                height: '100px',
                backgroundColor: 'blue',
                transform: `translateX(${progress * 300}px)`,
                transition: 'transform 0.1s',
              }}
            />
            <button onClick={startAnimation} disabled={isAnimating}>
              {isAnimating ? 'Animating...' : 'Start Animation'}
            </button>
          </div>
        )}
      </AnimationWrapper>
    </div>
  )
}

export default Animation
