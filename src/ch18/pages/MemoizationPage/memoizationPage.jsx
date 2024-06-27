import React, { useCallback, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

function MemoizationPage(props) {
    const [value , setValue] = useState(0);
    const [num , setNum] = useState(0);
    const [num2 , setNum2] = useState(0);

    const a = useMemo(() =>{
        console.log(num);
        return num+10;
    }, [num] );

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    },[])

    const handleChange2 = (e) => {
        setValue(e.target.value);
    }

    const handleClick = useCallback(() => {
        setNum(parseInt(value));
    },[value])


    return (
        <div>
            <h1>{a}</h1>
            <input type="text" onChange={handleChange} ></input>
            <input type="text" onChange={handleChange2} ></input>
            <button onClick={handleClick}></button>
            
        </div>
    );
}

export default MemoizationPage;