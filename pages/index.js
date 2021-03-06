import Layout from '../components/Layout';
import TypewriterText from '../components/TypewriterText';

const typewriterText = 'Marko Križan';
const typewriterDelay = 2500;

const Index =  () => {
    
    return (
        <Layout showParticles={true} showNav={true}>
            <div class="overlay"></div>
            <main id="home">
                <h1 className="lg-heading text-strong">
                    <TypewriterText text={typewriterText} delay={typewriterDelay} />
                </h1>
                <h2 className="text-background">Junior Web Developer</h2>
                <div className="icons">
                    <a href="https://github.com/markokrizan"><i className="fab fa-github fa-2x"></i></a>
                </div>
            </main>
        </Layout>
    );
};

export default Index;
