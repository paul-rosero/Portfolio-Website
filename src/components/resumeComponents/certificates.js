import { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

const certificateArray = [
    {date: "10/08/2020", name: "JavaScript Essential Training 2019", school: "LinkedIn Learning"},
    {date: "11/04/2020", name: "Learning Node.js", school: "LinkedIn Learning"},
    {date: "08/26/2020", name: "Software Engineering Virtual Experience 2020", school: "JP Morgan Chase & CO."},
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