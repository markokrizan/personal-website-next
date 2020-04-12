import Layout from '../../components/Layout';
import PostCard from '../../components/Blog/PostCard';

const Blog = () => {
    return (
        <Layout showParticles={false} showNav={false}>
            <main className="blog-main">
                <h2 className="md-heading text-background">Recent Articles</h2> 
                <ul className="post-list-container">
                    <li className="post-list-item"><PostCard/></li>
                    <li className="post-list-item"><PostCard/></li>
                    <li className="post-list-item"><PostCard/></li>
                    <li className="post-list-item"><PostCard/></li>
                    <li className="post-list-item"><PostCard/></li>
                    <li className="post-list-item"><PostCard/></li>
                </ul>
            </main>
        </Layout>
    );
}

export default Blog;
