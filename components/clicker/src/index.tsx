import * as React from 'react';
import { useState } from "react";

export const Clicker = () => {
	const [clicks, setClicks] = useState(0);
	const onClick = () => {
		setClicks(clicks + 1);
	};

	return <button onClick={onClick}>
		{clicks}
	</button>;
};
