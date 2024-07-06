import React, { useState } from 'react'

const DragAndDropProvider = ({children}) => {
    const [draggingItem, setDraggingItem] = useState(null);

    const handleDragStart = (item) => {
      setDraggingItem(item);
    };
  
    const handleDragEnd = () => {
      setDraggingItem(null);
    };
  
    return children({
      draggingItem,
      handleDragStart,
      handleDragEnd,
    });
}

export default DragAndDropProvider
