import { useState } from "react";
import "./App.css"


const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)
  const [message, setMessage] = useState('')

  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]
  )

  const handleAddFighter = (zombieFighter) => {    
    if (money >= zombieFighter.price){      
      setTeam([...team, zombieFighter])
      setMoney(money - zombieFighter.price)
      setTotalAgility(totalAgility + zombieFighter.agility)
      setTotalStrength(totalStrength + zombieFighter.strength)
    } else {
      setMessage('Not enough money')
    }
  }

  const handleRemoveFighter = (zombieFighterToRemove, fighterIndex) => {
    setTeam(team.filter((fighter, index) => fighterIndex !== index))
    setMoney(money + zombieFighterToRemove.price)
    setTotalAgility(totalAgility - zombieFighterToRemove.agility)
    setTotalStrength(totalStrength - zombieFighterToRemove.strength)
    setMessage('')
    
  }
    
  
  
  return ( 
    <div className="fighters">
      
      <h1>Zombie Wars</h1>
      <h3>Create the best team of Zombie Figters</h3>
      <h3>Total Money: {money}</h3>
      <h3>{message}</h3>
      <ul>
        {zombieFighters.map((zombieFighter) => (
          <li key={zombieFighter.name}>
          <img src={zombieFighter.img} alt={zombieFighter.name}/><br/>
          Name: {zombieFighter.name}<br />
          Price: {zombieFighter.price}<br />
          Strength: {zombieFighter.strength}<br />
          Agility: {zombieFighter.agility}<br />
          <button type="button" onClick={()=> handleAddFighter(zombieFighter)}>Add</button>
          </li>        
        ))}
      </ul>
      <h2>Your Chosen Fighters</h2>
      {team.length === 0 ? (
        <p>Add a Fighter to your team</p>
      ) : (      
      <ul>
        {team.map((zombieFighter, index) => (
          <li key={index}>
            <img src={zombieFighter.img} /><br/>
            Name: {zombieFighter.name}<br />
            Price: {zombieFighter.price}<br />
            Strength: {zombieFighter.strength}<br />
            Agility: {zombieFighter.agility}<br />            
            <button onClick={() => handleRemoveFighter(zombieFighter, index)}>Remove</button>
          </li>        
        ))}
      </ul>
    )}
      <div>
        <h3> Total Team Agility: {totalAgility}</h3>
        <h3>Total Team Strength: {totalStrength}</h3>
      </div>
    </div> 
  );
}

export default App
