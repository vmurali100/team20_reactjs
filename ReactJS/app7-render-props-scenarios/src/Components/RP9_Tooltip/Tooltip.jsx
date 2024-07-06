import React from 'react'
import TooltipProvider from './TooltipProvider'

const Tooltip = () => {
  return (
    <div>
      <h1>Tooltip Example</h1>
      <TooltipProvider>
        {({ showTooltip, hideTooltip }) => (
          <div>
            <TooltipTrigger
              text="Hover over me"
              tooltipText="This is a tooltip!"
              showTooltip={showTooltip}
              hideTooltip={hideTooltip}
            />
            <TooltipTrigger
              text="Hover over me too"
              tooltipText="Another tooltip!"
              showTooltip={showTooltip}
              hideTooltip={hideTooltip}
            />
          </div>
        )}
      </TooltipProvider>
    </div>
  )
}

export default Tooltip

// TooltipTrigger Component
const TooltipTrigger = ({ text, tooltipText, showTooltip, hideTooltip }) => (
    <div
      onMouseEnter={(e) => showTooltip(tooltipText, { top: e.clientY + 10, left: e.clientX + 10 })}
      onMouseLeave={hideTooltip}
      style={{ display: 'inline-block', margin: '10px', padding: '5px', border: '1px solid black' }}
    >
      {text}
    </div>
  );