import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import './SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="container">
        <div data-testid="solar-system" />
        <section className="title">
          <Title headline="Planetas" />

        </section>
        <section className="system">
          {planets.map((element) => (
            <PlanetCard
              key={ element.name }
              planetName={ element.name }
              planetImage={ element.image }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default SolarSystem;
