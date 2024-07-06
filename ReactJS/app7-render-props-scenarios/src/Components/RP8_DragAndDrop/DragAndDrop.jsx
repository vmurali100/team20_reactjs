import React from "react";
import DragAndDropProvider from "./DragAndDropProvider";

const DragAndDrop = () => {
  const items = ["Item 1", "Item 2", "Item 3"];

  return <div>
    <h1>Drag and Drop Example</h1>
      <DragAndDropProvider>
        {({ draggingItem, handleDragStart, handleDragEnd }) => (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                {items.map(item => (
                  <DraggableItem
                    key={item}
                    item={item}
                    handleDragStart={handleDragStart}
                    handleDragEnd={handleDragEnd}
                  />
                ))}
              </div>
              <DroppableArea draggingItem={draggingItem} />
            </div>
          </div>
        )}
      </DragAndDropProvider>
  </div>;
};

export default DragAndDrop;

// DraggableItem Component
const DraggableItem = ({ item, handleDragStart, handleDragEnd }) => (
    <div
      draggable
      onDragStart={() => handleDragStart(item)}
      onDragEnd={handleDragEnd}
      style={{ padding: '8px', margin: '4px', border: '1px solid black', cursor: 'move' }}
    >
      {item}
    </div>
  );
  
  // DroppableArea Component
  const DroppableArea = ({ draggingItem }) => (
    <div
      style={{
        padding: '20px',
        margin: '4px',
        border: '1px solid red',
        minHeight: '100px',
        backgroundColor: draggingItem ? 'lightyellow' : 'white',
      }}
    >
      {draggingItem ? `Drop here: ${draggingItem}` : 'Drag an item here'}
    </div>
  );