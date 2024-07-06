import React, { useState } from 'react'

const TooltipProvider = ({ children }) => {
    const [tooltip, setTooltip] = useState({ visible: false, text: '', position: { top: 0, left: 0 } });
  
    const showTooltip = (text, position) => {
      setTooltip({ visible: true, text, position });
    };
  
    const hideTooltip = () => {
      setTooltip({ visible: false, text: '', position: { top: 0, left: 0 } });
    };
  
    return (
      <>
        {children({ showTooltip, hideTooltip })}
        {tooltip.visible && (
          <div
            style={{
              position: 'absolute',
              top: tooltip.position.top,
              left: tooltip.position.left,
              backgroundColor: 'black',
              color: 'white',
              padding: '5px',
              borderRadius: '3px',
              pointerEvents: 'none',
              zIndex: 1000,
            }}
          >
            {tooltip.text}
          </div>
        )}
      </>
    );
  };

export default TooltipProvider
