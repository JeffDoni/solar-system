import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import './Missions.css';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="mission">
        <section className="title">
          <Title headline="Missões" />

        </section>
        <section className="alinhamento">
          {missions.map(({ name, year, country, destination }) => (
            <MissionCard
              key={ name }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Missions;
