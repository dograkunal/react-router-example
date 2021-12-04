import React from 'react'

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}
function ReducerExample() {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return (
        <div>
            <button onClick={() => dispatch({ type: 'decrement' })}>
                Decrease count
            </button>
            <h1>Reducer Count Is {state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>
                Add count
            </button>
        </div>
    )
}

export default ReducerExample
