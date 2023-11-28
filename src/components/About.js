import { Card, Container } from 'react-bootstrap';

const About = () => {
    return (
        <div className='aboutbg'>
            <Container>
                <Card className="bg-dark text-white text-center" border="info">
                    <Card.Body>
                        <Card.Title>About Us</Card.Title>
                        <Card.Text>
                            Welcome to our Online Recipe Database!
                            <br />
                            Our platform is dedicated to food enthusiasts who love cooking and sharing their favorite recipes with the world.
                            <br />
                            Whether you're a seasoned chef or a beginner in the kitchen, our community-driven platform offers a vast collection of recipes for all tastes and occasions.
                            <br />
                            Join our community to:
                            <ul className="text-left">
                                <li>Discover a wide range of recipes from various cuisines.</li>
                                <li>Share your culinary creations with fellow food lovers.</li>
                                <li>Interact, comment, and rate recipes shared by others.</li>
                                <li>Create and edit your recipes with ease.</li>
                            </ul>
                            We aim to create an engaging and user-friendly experience for our members, fostering a vibrant community passionate about cooking and exploring new flavors.
                            <br />
                            Thank you for being a part of our journey. Happy cooking!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default About;
