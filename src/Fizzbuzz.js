import React from 'react';
import { useState } from 'react';

const Fizzbuzz = () =>{

    const [count,setCount] = useState(0);
    return(
        <div>
            <button onClick={()=> setCount(count+1)} style={{margin:20}}>Increment</button> 
            <button onClick={()=> setCount(count-1)}>Decrement</button><br/>

        { 
            (
            count % 15 === 0) ? "FizzBuzz" :
            (count % 3 === 0)  ? "Fizz"    : 
            (count % 5 === 0)  ? "Buzz"    : 
            count
        }
        </div>
    )
}

export default Fizzbuzz;
  