import React from 'react';
import iwocaLogo from 'assets/logo.svg';
import {Grid,Container} from 'semantic-ui-react';

const Logo = (props) => {
    return <img src={iwocaLogo} alt="Iwoca Calculator Demo!"/>
}

export default (props) => {
    return (
        <header>
            <Grid padded >
                <Grid.Column>
                    <Logo />
                </Grid.Column>
              
            </Grid>
        </header>
    )
}