import React, {useState} from 'react'
import { Button } from 'semantic-ui-react';

const TestHookCounter = () => {
    const [count, setCount] = useState(0);
    
    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1); 

    return (
        <div>
            <Button onclick={increase}></Button>
            <Button onclick={decrease}></Button>
        </div>
    )
}

export default TestHookCounter;