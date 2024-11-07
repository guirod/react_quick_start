import './App.css';
import { useState } from 'react';

export function App() {
  return (
      <div>
          <h1>Hello, It's my first React App!</h1>
          <h2>Happy Coding!!</h2>
      </div>
  );
}

export function List() {
    return (
        <ul>
            <li>EL1</li>
            <li>EL2</li>
        </ul>
    );
}

export function MyButton() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
        console.log(count);
    }

    return (
        <button onClick={handleClick}>
            Click me
        </button>
    );
}

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

export function Profile() {
    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    );
}

export default App;