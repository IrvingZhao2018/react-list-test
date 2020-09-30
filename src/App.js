import React, {useState} from 'react';
import Validation from "./Validation/Validation";
import CharComponent from "./CharComponent/CharComponent";

function App() {
    const [inputState, setInputState] = useState({input: ''});

    const deleteCharHandler = (charIndex) => {
        const input = inputState.input.split('');
        input.splice(charIndex, 1);
        const newInput = input.join('');
        setInputState({input: newInput});
    }

    const inputChangeHandler = (event) => {
        const input = event.target.value;
        setInputState({input: input});
    };

    return (
        <div>
            <input
                type="text"
                onChange={inputChangeHandler}
                value={inputState.input}
            />
            <p>{inputState.input}</p>
            <p>{inputState.input.length}</p>
            <Validation input={inputState.input}/>
            {inputState.input.split('').map(
                (singleChar, index) => {
                    return <CharComponent
                        text={singleChar}
                        key={index}
                        delete={() => deleteCharHandler(index)}
                        index={index}
                    />
                }
            )}
        </div>
    );
}

export default App;
