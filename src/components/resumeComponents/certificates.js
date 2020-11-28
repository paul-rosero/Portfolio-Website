import { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

const certificateArray = [
    {date: "10/08/2020", name: "JavaScript Essential Training 2019", school: "LinkedIn Learning"},
    {date: "11/04/2020", name: "Learning Node.js", school: "LinkedIn Learning"},
    {date: "08/26/2020", name: "Software Engineering Virtual Experience 2020", school: "JP Morgan Chase & CO."},
]

const renderCertificate = certificateArray.map((certificate, index) => {
    return <Grid className="certificate-grid" key={ index }>
        <Cell col={ 4 }>
            <p>{ certificate.date }</p>
        </Cell>
        <Cell col={ 8 }>
        <h6 style={{ marginTop: '0px', fontWeight: 'bold' }}>{ certificate.name }</h6>
            <p>{ certificate.school }</p>
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