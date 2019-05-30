import React, {Component} from 'react';
import Background from './img/head.png';

const myHeader = {
    backgroundImage: `url( ${Background} )`,
    height: '917px',
    BackgroundSize: 'cover'
}
class Header extends Component {
    render(){
        return (
            <header style = {myHeader}>

            </header>
        )
    }
};

export default Header;