import React, { Component } from 'react';
import ReactDOM from "react-dom";

class Modal extends Component {
    render() {
        const modal = {
            width:500,
            height:400,
            border:"solid black 1px",
            background:"white",
            position:"absolute",
            left:"50%",
            right:"50%",
            
        }
        if(!this.props.isOpen || !document.getElementById('modal')){
            return null
        }
        return ReactDOM.createPortal(<div style={modal}>{this.props.children}</div>,document.getElementById('modal'));
    }
}

export default Modal;