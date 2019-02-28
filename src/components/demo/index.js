import React, { useContext } from "react";
import { context } from "../../context-redux";
const sleep = wait => {
	return new Promise(resolve => {
		setTimeout(() => resolve(), wait);
	});
};
const increaseCount = async dispatch => {
	await sleep(1000);
	dispatch({ type: "increase" });
};
const Demo = () => {
	const { state, dispatch } = useContext(context);

	return (
		<div>
			counter:{state.count}
			<div>
				<button
					onClick={() => {
						dispatch(increaseCount);
					}}
				>
					increase
				</button>
				<button
					onClick={() => {
						dispatch({ type: "decrease" });
					}}
				>
					decrease
				</button>
			</div>
		</div>
	);
};
export default Demo;
