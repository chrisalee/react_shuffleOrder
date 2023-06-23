import { useEffect, useState } from 'react';
import './App.css';
import data from  './data.js';

const shuffle = arr => {
  let ctr = arr.length, temp, index;
  while(ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = arr[ctr];
    arr[ctr] = arr[index];
    arr[index] = temp;
  }
  return arr;
}

const App = () => {
  const [list, setList] = useState(data);

  useEffect(() => {
    const generateArr = shuffle(data);
    setList(generateArr);
  }, []);

  const handleShuffle = () => {
    const changes = shuffle([...list]);
    setList(changes);
  }
  return (
    <div className="app">
      <h2>Types of Pets</h2>
      {
        list.map((x, index) => (
          <div key={x.name + x.index}>
            {x.name}: {x.count}
            <button onClick={() => setList([...list], (x.count = x.count + 1))}>+</button>
          </div>
        ))
      }
      <button onClick={handleShuffle}>Shuffle</button>

    </div>
  );
}

export default App;
