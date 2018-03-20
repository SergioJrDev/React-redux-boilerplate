import React from 'react';
import styled from 'styled-components';
import './header-style.scss';

const Wrapper = styled.header`
  font-size: 1.5em;
  color: #fff;
  padding: 15px 0;
  > * {
    h1 {
        color: red;
    }
  }
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openMenu: false,
        };
    }

    /*eslint-disable*/
    printMessage = message => console.log(message);
    /*eslint-enable*/

    sendMessage = (message) => this.printMessage(message);

    openMenu = () => this.setState({openMenu: !this.state.openMenu})

    render() {
        const { openMenu } = this.state;

        return (
            <Wrapper>
                <div className='container'>
                    <Flex>
                        <h1>Logo</h1>
                        <span onClick={this.openMenu}>Menu</span>
                    </Flex>
                    {openMenu ? <p className='menuOpened'>Menu aberto</p> : <p className='menuClosed'>Menu fechado</p>}
                </div>
            </Wrapper>
        );
    }
}

export default Header;