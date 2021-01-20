import * as React from 'react';
import { Text } from '@maks113/text-block';

interface IButton {
	text: string;
	onClick?: () => {};
}

export const Button = ({ text, onClick }: IButton): JSX.Element => {
	return <button
		className={'button'}
		onClick={onClick}
	>
		<Text text={text}/>
	</button>;
};
