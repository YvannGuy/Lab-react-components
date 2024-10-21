//import Title from "./Title";

function RandomNumber() {
    const max = 100;
    const randomValue = Math.floor(Math.random() * max)
    return (
      <>
        <h2>Your random number is <button>{randomValue}</button></h2>
      </>
    );
  }
  
  export default RandomNumber;
  