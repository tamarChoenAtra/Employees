import React from 'react';
import Employees from '../../assets/Employees.png'
import Grid from '@material-ui/core/Grid';

class Home extends React.Component {

    render() {

        return (
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{ backgroundColor: '#3f51b5' }}
            >
                <img src={Employees} />
            </Grid >
        )
    }
}

export default Home;