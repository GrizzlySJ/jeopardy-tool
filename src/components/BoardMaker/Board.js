import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
    /* display: ${({value, index}) => value === index ? 'block' : 'none'}; */
`;

export default class Board extends React.PureComponent {    
    render() {
        const { value, index, children } = this.props;

        return (
            <Root>
                {value === index && children}
            </Root>
        );
    }
}
