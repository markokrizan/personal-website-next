import Layout from '../components/Layout';
import TypewriterText from '../components/TypewriterText';

const NotFound = () => {
    return (
        <Layout>
            <div className="overlay"></div>
            <div className="center full-heigth">
                <h1 className="lg-heading text-strong">
                    <TypewriterText text={"Not found."} delay={2000} />
                </h1>
            </div>
        </Layout>
    );
}

export default NotFound;
