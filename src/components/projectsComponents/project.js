import React from 'react';

function toggleTabs(activeTab) {
    return activeTab
}

export default function Project(props) {
    return (
        <div>
            <h2>project</h2>
            { toggleTabs(props.activeTab) }
        </div>
    )
}

