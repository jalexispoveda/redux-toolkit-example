import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
	increment,
	decrement,
	incrementByAmount,
} from "./store/slices/counter/counterSlice";
import { useState } from "react";

function App() {
	const [number, setNumber] = useState(5);
	const count = useSelector(state => state.counter.counter);
	const dispatch = useDispatch();
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				{count}
				<button
					className="btn btn-primary"
					onClick={() => dispatch(increment())}
				>
					Increment
				</button>
				<button
					className="btn btn-primary"
					onClick={() => dispatch(decrement())}
				>
					Decrement
				</button>
				<input
					type="text"
					onChange={e => setNumber(+e.target.value)}
					value={number}
				></input>
				<button
					className="btn btn-primary"
					onClick={() => dispatch(incrementByAmount(number))}
				>
					Increment by
				</button>
			</header>
		</div>
	);
}

export default App;
