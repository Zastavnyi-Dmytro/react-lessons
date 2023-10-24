import './App.css';
import AlbertEinstein from './components/albert_einstein';
import AlienMorty from './components/alien_morty';
import AlienRick from './components/alien_rick';
import AmishCyborg from './components/amish_cyborg';
import Annie from './components/annie';
import AntennaMorty from './components/antenna_morty';
import AntennaRick from './components/antenna_rick';
import BethSmith from './components/beth_smith';
import MortySmith from './components/morty_smith';
import RickSanchez from './components/rick_sanchez';

function App() {
  return (
    <div className="App">
      <RickSanchez/>
      <MortySmith/>
      <BethSmith/>
      <AlbertEinstein/>
      <AlienMorty/>
      <AlienRick/>
      <AmishCyborg/>
      <Annie/>
      <AntennaMorty/>
      <AntennaRick/>
    </div>
  );
}

export default App;
