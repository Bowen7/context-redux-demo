import React, { useReducer } from "react";

const initialState = {
	count: 0
};

const reducer = (state, action) => {
	switch (action.type) {
		case "increase":
			return { ...state, count: state.count + 1 };
		case "decrease":
			return { ...state, count: state.count - 1 };
		default:
			return state;
	}
};

const context = React.createContext();

const Provider = props => {
	const [state, origin_dispatch] = useReducer(reducer, initialState);
	const dispatch = action => {
		if (typeof action === "function") {
			return action(origin_dispatch);
		}
		return origin_dispatch(action);
	};
	return (
		<context.Provider value={{ state, dispatch }}>
			{props.children}
		</context.Provider>
	);
};

export { Provider, context };
