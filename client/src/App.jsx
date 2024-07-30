import { useState, useEffect } from 'react'
import './App.css'

import { ChakraProvider, extendBaseTheme,
  theme as chakraTheme, } from '@chakra-ui/react'

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/people');
        const data = await response.json();
        setPeople(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchPeople();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <div className="App">
      <h1>List of People</h1>
      <ul>
        {people.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
~    </div>
    </ChakraProvider>
    
  );
}

export default App
