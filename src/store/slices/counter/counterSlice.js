import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	counter: 10,
};

//Los slices son como los reducers, tenemos un estado inicial, un nombre y los metodos con los que afectaremos el estado
export const counterSlice = createSlice({
	name: "counter",
	//estado inicial
	initialState,
	//acciones, son reducers
	reducers: {
		increment: state => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.counter += 1;
		},
		decrement: state => {
			state.counter -= 1;
		},
		incrementByAmount: (state, action) => {
			console.log(action);
			state.counter += action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
