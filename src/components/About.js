import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const About = () => {
    return (
        <div className='aboutbg'>
        <Container>
            <Card className="bg-dark text-black text-center" border="info">
                <Card.Img style={{ objectFit: "cover" }} src="" alt="" />
                <Card.ImgOverlay>
                    <Card.Text>
                        About Us
                        <br></br>
                        
                            I created this app to find and share recipes. 
                            I hope you enjoy it!
                        <br></br>

                            
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Container>
        </div>
    );
}

export default About;