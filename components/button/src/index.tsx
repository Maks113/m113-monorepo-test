import * as React from 'react';
import { format } from 'date-fns';
import { useState } from "react";

interface IButton {
	name: string;
}

export const Button = ({ name }: IButton) => {
	const [clicks, setClicks] = useState(0);
	const onClick = () => {
		setClicks(clicks + 1);
	};
	return <button
		className={'button'}
		onClick={onClick}
	>
		{name}
		{' -<-1-> '}
		{format(new Date(), 'dd.MM.yyyy hh:mm')}
	</button>;
};
