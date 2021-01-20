import * as React from 'react';
import { format } from 'date-fns';
interface IButton {
  name: string;
}

export const Button = ({ name }: IButton) => {
  return <button className={'button'}>
    {name}
    {' '}
    {format(new Date(), 'dd.MM.yyyy hh:mm:ss')}
  </button>;
};
