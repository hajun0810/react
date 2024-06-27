import { useState } from "react";

export function useInput(defaultValue, lenght) {
    const [value,setValue] = useState(defaultValue);

    const onChange = (e) =>{
        if(e.target.value.lenght < lenght +1){
            setValue(e.target.value);
        }
        console.log(e.target.value);

    }

    return {
        "value" : value, 
        "setValue" : setValue,
        "onChange" : onChange
    }
}


