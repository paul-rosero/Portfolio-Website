import React from 'react';
import { Cell, Grid } from 'react-mdl';

function toggleTabs(activeTab) {
    if (activeTab === 0) {
        return activeTab
    } else if (activeTab === 1) {
        return activeTab
    } else if (activeTab === 2) {
        return activeTab
    }
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

