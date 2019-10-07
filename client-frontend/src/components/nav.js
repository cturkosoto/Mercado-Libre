import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Input, Row, Button } from 'antd';
import '../css/styles.scss';
import imgLogo from  '../static/assets/Logo_ML.png';
import imgSerch from '../static/assets/ic_Search.png';

class Nav extends Component{
    constructor() {
        super(); // Para heredar propiedades de React
        this.state = {
            searchWord: '',
          }
    };
    onChange = (e) => {
        const { value } = e.target;
        this.setState({ searchWord: value, searchedWord: '' });
    };

    onPressEnter = (e) => {
        // this.setState({ searchedWord: e }, () => {
        //     console.log(this.props);
        // });
        console.log(e);
    };

    render() {
        const { searchWord } = this.state;
        const { searchedWord } = this.props;

        const searchUrl = searchWord ? `items?search=${searchWord}` : '/';
        
        return (
        <Row type='flex' justify='center' className='nav-container' >
            <nav className='nav-search' >
            <ul>
                <li>
                    <a href='/'>
                        <img src={imgLogo} alt="Logo ML"/>
                    </a>
                </li>
                <li className='search-container'>
                    <div className='search-box'>
                        <Input value={searchWord || searchedWord} placeholder='Nunca dejes de buscar' onChange={this.onChange} onPressEnter={this.onPressEnter} />
                        <Link to={searchUrl} >
                            <Button>
                                <img src={imgSerch} alt="imgSerch"/>
                            </Button>
                        </Link>
                    </div>
                </li>
            </ul>
            </nav>
        </Row>
        );
    }
}

export default Nav;