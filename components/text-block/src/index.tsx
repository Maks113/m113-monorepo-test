import * as React from 'react';

interface IText {
	text: string;
}

export const Text = ({ text }: IText) => {
	return <div
		style={{
			fontWeight: 'bold',
			fontSize: 24,
		}}
	>
		{text}
	</div>;
};
