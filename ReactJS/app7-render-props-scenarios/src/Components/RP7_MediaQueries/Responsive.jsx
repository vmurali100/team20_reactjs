import React, { useEffect, useState } from 'react'

const Responsive = ({ query, children }) => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);
  
    useEffect(() => {
      const media = window.matchMedia(query);
      const listener = () => setMatches(media.matches);
      media.addListener(listener);
  
      return () => media.removeListener(listener);
    }, [query]);
  
    return children(matches);
  };

export default Responsive
