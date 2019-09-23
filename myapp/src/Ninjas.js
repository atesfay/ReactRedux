import React, {Component} from 'react';

const Ninjas =({ninjas}) =>{

    // console.log(this.props)
    // const {name, age, color} = this.props;
    // const {ninjas} = props;
    const ninjaList = ninjas.map(ninja =>{
        if (ninja.age > 20){
            return (
                <div className="ninja" key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Color: {ninja.color}</div>
                </div>
            )
        } else {
            return null
        }

    })
    // we can also use terniray opreator 
    // const ninjaList = ninjas.map( ninja => {
    //     return ninja.age > 20 ? (
    //         <div className="ninja" key={ninja.id}>
    //             <div>Name: {ninja.name}</div>
    //             <div>Age: {ninja.age}</div>
    //             <div>Color: {ninja.color}</div>
    //         </div>
    //     ) :null;
    // });
    return(
        <div className="ninja-list">
        {ninjaList}
        </div>
    )
}
export default Ninjas;