import React from 'react';
import styled from 'styled-components';
import './header-style.scss';

const Wrapper = styled.header`
  font-size: 1em;
  padding: 15px 0;
  > * {
    text-align: center;
    h1 {
        color: #ccc;
    }
  }
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

class Header extends React.Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         openMenu: false,
  //     };
  // }

  // /*eslint-disable*/
  // printMessage = message => console.log(message);
  // /*eslint-enable*/

  // sendMessage = (message) => this.printMessage(message);

  // openMenu = () => this.setState({openMenu: !this.state.openMenu})

  render() {
    return (
      <Wrapper>
        <div className='container'>
          <Flex>
            <h1>React Redux Boilerplate</h1>
          </Flex>
        </div>
      </Wrapper>
    );
  }
}

export default Header;