import React from "react";
const hasSecretToLife = (WrappedComponent) =>{
    class HOC extends React.Component{
        render(){
            return <WrappedComponent hasSecretToLife={42}/>
        }
    }
    return HOC
}

export default hasSecretToLife;