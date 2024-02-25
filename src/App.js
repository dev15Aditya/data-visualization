import GammaTable from './Components/GammaTable';
import Flavanoids from './Components/Flavanoids';
import data from './Wine-Data.json';

function App() {
  return (
    <div
      style={{
        marginLeft: '50px',
      }}
    >
      <h1>a.</h1>
      <Flavanoids dataset={data} />

      <br />

      <h1>b.</h1>
      <GammaTable dataset={data} />
    </div>
  );
}

export default App;
