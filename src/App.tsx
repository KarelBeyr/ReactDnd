import React, { useState } from 'react';
import './App.css';

function App() {
    const [state, setState] = useState(["a", "b", "c"]);
    
    function shuffleElements(where: string, what: string) {
        let newState = [...state];
        newState = newState.filter(_ => _ !== what)
        const idx = newState.indexOf(where);
        newState.splice(idx, 0, what);
        setState(newState);
    }

    const elms = state.map(element => 
        <div 
            key={element} 
            className="dnd" 
            draggable="true"
            onDragStart={event => event.dataTransfer.setData('text/plain', element)}
            onDragOver={event => event.preventDefault()}
            onDragEnter={event => event.preventDefault()}
            onDrop={event => {
                    const movedElementContent = event.dataTransfer.getData('text/plain')
                    shuffleElements(element, movedElementContent)
                }
            }
            >
                {element}
            </div>
    );
    return (
        <div className="App">
            {elms}
        </div>
    );
}

export default App;
