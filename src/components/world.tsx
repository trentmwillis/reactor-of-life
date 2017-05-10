import * as React from 'react';
import CitizenComponent from './citizen';
import Citizen from '../utils/citizen';

export default function WorldComponent(world: { citizens: Array<Citizen> }) {
  const citizens = world.citizens.map((citizen, index) => <CitizenComponent alive={citizen.alive} key={index} />);
  return <div className="world">
    {citizens}
  </div>;
}
