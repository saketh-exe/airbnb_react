
import './App.css';
import Nav from './nav/Nav';
import Hero_img from './Hero_img/Hero_img';
import Title from './Title/Title';
import Card from './Card/Card';
import path from './Hero_img/Group 77.png'
import CardData from './data.js'

function App() {

  const CardComponents = CardData.map((item) =>{
    return(<Card
   {...item}
      img = {`images/${item.coverImg}`}
    />)

    
  })

  return (
    <div className="App">
      <Nav/>
      <Hero_img path = {path}></Hero_img>
      <Title/>
      <div className='cards_warpper'>
      {CardComponents}

      </div>
    </div>
  );
}

export default App;
