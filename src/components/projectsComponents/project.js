import React from 'react';
import { Button, Card, CardActions, CardMenu, CardText, CardTitle } from 'react-mdl';

function toggleTabs(activeTab) {
    if (activeTab === 0) {
        return (
            <Card shadow={ 0 } style={{ width: '75%', margin: 'auto' }}>
                <CardTitle style={{ color: '#fff', height: '500px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>Starks</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                    <Button colored>Get Started</Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                    <i className="fas fa-share-alt"/>
                </CardMenu>
            </Card>
        )
    } else if (activeTab === 1) {
        return (
            <Card shadow={ 0 } style={{ width: '75%', margin: 'auto' }}>
                <CardTitle style={{ color: '#fff', height: '500px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>Lannisters</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                    <Button colored>Get Started</Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                    <i className="fas fa-share-alt"/>
                </CardMenu>
            </Card>
        )
    } else if (activeTab === 2) {
        return (
            <Card shadow={ 0 } style={{ width: '75%', margin: 'auto' }}>
                <CardTitle style={{ color: '#fff', height: '500px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>Targaryens</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                    <Button colored>Get Started</Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                    <i className="fas fa-share-alt"/>
                </CardMenu>
            </Card>
        )
    }
}

export default function Project(props) {
    return (
        <div>
            { toggleTabs(props.activeTab) }
        </div>
    )
}

