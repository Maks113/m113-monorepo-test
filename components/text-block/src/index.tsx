import * as React from 'react';

interface IText {
	text: string;
}

export const Text = ({ text }: IText) => {
	return <div
		style={{
			fontWeight: 'bold',
			fontSize: 18,
		}}
	>
		{text}
	</div>;
};
