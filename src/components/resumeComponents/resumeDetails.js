import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';

class ResumeDetails extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startDate} - {this.props.endDate}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.institutionName}</h4>
                    <p>{ this.props.institutionDescription}</p>
                </Cell>
            </Grid>
        )
    }
}

export default ResumeDetails
