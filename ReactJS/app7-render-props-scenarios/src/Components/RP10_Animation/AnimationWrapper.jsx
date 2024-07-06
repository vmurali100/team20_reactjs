import React, { useEffect, useState } from 'react'

const AnimationWrapper = ({children,duration}) => {
    const [progress, setProgress] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
  
    const startAnimation = () => {
      setIsAnimating(true);
      setProgress(0);
    };
  
    useEffect(() => {
      if (!isAnimating) return;
  
      const start = Date.now();
      const tick = () => {
        const elapsed = Date.now() - start;
        const newProgress = Math.min(elapsed / duration, 1);
        setProgress(newProgress);
  
        if (newProgress < 1) {
          requestAnimationFrame(tick);
        } else {
          setIsAnimating(false);
        }
      };
  
      requestAnimationFrame(tick);
    }, [isAnimating, duration]);
  
    return children({ progress, startAnimation, isAnimating });
}

export default AnimationWrapper
