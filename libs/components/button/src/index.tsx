import * as React from 'react';
import './style.css'

interface IButton {
  name: string;
}

export const Button = ({ name }: IButton) => {
  return <button className={'button'}>{name}</button>;
};
