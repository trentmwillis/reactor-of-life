import * as React from 'react';

export default function CitizenComponent(citizen: { alive: boolean }) {
  const className = citizen.alive ?
    'citizen alive' :
    'citizen dead';
  return <div className={className}></div>;
}
