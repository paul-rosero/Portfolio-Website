import { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

const certificateArray = [
    {date: "", name: "", school: ""},
    {date: "", name: "", school: ""},
    {date: "", name: "", school: ""},
]

const renderCertificate = certificateArray.map(certificate => {
    return <Grid>
        <Cell>
            
        </Cell>
    </Grid>
})
class Certificates extends Component {
    render() {
        return (
            <></>
        )
    }
}
export default Certificates;