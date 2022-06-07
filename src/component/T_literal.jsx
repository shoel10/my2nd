import React from 'react';
const n="sunday";
let print="";
let cssStyle={};
let img="";
if(n=="sunday"){
    print="we will be going to watch bhulbhuliya 2 in rdb cinema hall";
    cssStyle.color="red";
    img="img/hallim.jpeg"; 

}
else{
    print="today is office";
    cssStyle.color="yellow";

}
const TLiteral = () =>{
    return(
        <>
            <h1 style={cssStyle}>{print}</h1>
            <img src={img} height="200px" width="200px"></img>
        </>
    )
}
export default TLiteral ;