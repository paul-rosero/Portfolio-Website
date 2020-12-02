import React from 'react';
import { Cell, Grid } from 'react-mdl';

function toggleTabs(activeTab) {
    return activeTab
}

export default function Project(props) {
    return (
        <Grid className="content-grid">
            <Cell col={ 12 }>
                { toggleTabs(props.activeTab) }
            </Cell>
            
        </Grid>
    )
}

