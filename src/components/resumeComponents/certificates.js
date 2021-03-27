import { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

const certificateArray = [
    {date: "10/08/2020", name: "JavaScript Essential Training 2019", school: "LinkedIn Learning"},
    {date: "11/04/2020", name: "Learning Node.js", school: "LinkedIn Learning"},
    {date: "08/26/2020", name: "Software Engineering Virtual Experience 2020", school: "JP Morgan Chase & CO."},
    { date: "11/14/2018 - 05/27/2020", school: "Flatiron School (Online, Self-Paced)", name: "Certificate of Completion for Software Engineer" }
]

const renderCertificate = certificateArray.map((certificate, index) => {
    return(
        <Row id="certificate-grid" key={ index }>
            <Col >
                <p>{ certificate.date }</p>
            </Col>
            <Col xs={ 7 }>
                <h6 style={{ marginTop: '0px', fontWeight: 'bold' }}>{ certificate.name }</h6>
                <p>{ certificate.school }</p>
            </Col>
        </Row>
    );
})
class Certificates extends Component {
    render() {
        return (
            <Container>
                <h5>Certificates</h5>
                { renderCertificate }
            </Container>
            
        )
    }
}
export default Certificates;