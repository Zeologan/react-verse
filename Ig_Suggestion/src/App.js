
import './App.css';
import Card from './Components/Card';
import img1 from './Components/img1.png';
import img2 from './Components/img2.png';
import img3 from './Components/img3.png';
import img4 from './Components/img4.png';
import img5 from './Components/img5.png';

function App() {
  return (
    <>
      <div className="App">
        <div>
          <div className='title'>
            <h3 style={{ fontWeight: "500" }}>Suggestion</h3>
            <p style={{ fontSize: "12px", color: "#318CE7" }}>read more</p>
          </div>
          <div className='suggestion'>
            <Card name={'Fitness Workouts'} imgP={img1} />
            <Card name={'Sagar Giri'} imgP={img2} />
            <Card name={'Archana Pawar'} imgP={img3} />
            <Card name={'Sayli Deshmukh'} imgP={img4} />
            <Card className="btn" name={'Sartak kokate'} imgP={img5} />
          </div>
        </div>
      </div>
    </>

  );
}

export default App;
