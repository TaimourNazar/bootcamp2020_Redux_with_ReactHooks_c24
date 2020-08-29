export const INCREMENT="INCREMENT";
export const DECREMENT="DECREMENT";
export const INCREMENT_BY_VALUE="INCREMENT_BY_VALUE";

export const increment=()=>{
    return{
        type:INCREMENT
    }
}

export const decrement=()=>{
    return{
        type:DECREMENT
    }
}

export const incrementByValue=(number)=>{
    return{
        type:INCREMENT_BY_VALUE,
        payload:number
    }
}