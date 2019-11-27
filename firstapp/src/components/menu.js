import React, { Component } from 'react';

class Menu extends Component{
    render(){
        var menuOptions = this.props.menuOptions;
        var options = menuOptions.map(function(element){
            return(
                <span className="badge badge-pill badge-light ml-2">
                    {element}
                </span>
            )
        });

        return(
            <nav className="navbar navbar-dark">
                {options}
            </nav>
        );
    }
}

export default Menu;

