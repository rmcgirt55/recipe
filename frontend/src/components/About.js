import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const About = () => {
    return (
        <div className='aboutbg'>
            <Container>
                <Card className="bg-dark text-white text-center" border="info">
                    <Card.Body>
                        <Card.Title>About "CulinaryCanvas"</Card.Title>
                        <Card.Text>
                            Welcome to CulinaryCanvas, the ultimate platform for culinary enthusiasts to share, discover, and create mouthwatering recipes! Our app is designed to bring together a community of passionate food lovers, where you can not only explore a wide array of recipes but also contribute your own culinary masterpieces.
                        </Card.Text>

                        <Card.Text>
                            <strong>Join the Culinary Community</strong>
                            <br />
                            At CulinaryCanvas, we believe that cooking is an art, and everyone deserves a place to showcase their creativity in the kitchen. Whether you're a seasoned chef or a kitchen novice, our platform invites you to join a vibrant community where sharing and discovering delicious recipes is at the heart of what we do.
                        </Card.Text>

                        <Card.Text>
                            <strong>Features That Empower You</strong>
                            <br />
                            Signing up with CulinaryCanvas grants you access to a multitude of features:
                            <ul>
                                <li>User-Friendly Interface: Our app boasts an intuitive and easy-to-navigate interface, ensuring a seamless experience for users of all levels.</li>
                                <li>Create, Edit, and Share: Share your favorite recipes with the world! Create your own recipes, edit them as you refine your culinary skills, and share them effortlessly with our community.</li>
                                <li>Personalized Profiles: Customize your profile to reflect your cooking style and preferences. Showcase your recipes and interact with other users who share your passion for food.</li>
                                <li>Recipe Management: Manage your recipes effortlessly. Edit, update, or delete your creations whenever you desire, giving you complete control over your culinary portfolio.</li>
                                <li>Interactive Community: Engage with fellow foodies through comments, likes, and shares. Exchange cooking tips, tricks, and experiences to enhance your culinary journey.</li>
                            </ul>
                        </Card.Text>

                        <Card.Text>
                            <strong>Our Commitment</strong>
                            <br />
                            At CulinaryCanvas, we are committed to providing a safe, inclusive, and inspiring environment for all users. We encourage creativity, diversity, and respect within our community. Your culinary journey is unique, and we're here to support and celebrate that uniqueness.
                        </Card.Text>

                        <Card.Text>
                            <strong>Join Us Today</strong>
                            <br />
                            Embark on a delectable journey with CulinaryCanvas. Sign up now to start exploring, sharing, and savoring the world of recipes. Whether you're seeking new cooking ideas or eager to showcase your culinary expertise, CulinaryCanvas is the canvas for your gastronomic creations.
                            <br />
                            Let's paint the world with flavors together! Join CulinaryCanvas and share your love for cooking today.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default About;