import * as React from 'react';

interface IButton {
  name: string;
}

export const Button = ({ name }: IButton) => {
  return <button className={'button'}>{name}</button>;
};
