import Layout from '../../components/Layout';

const Post = () => {
    return (
        <Layout>
            <div className="overlay"></div>
            <div>
                <div className="post-heading center">
                    <h2 className="md-heading">Post Title</h2> 
                    <h3 className="sm-heading text-background">By Marko Krizan / 12.3.2020</h3> 
                </div>
                <div className="post-body">
                    Figure out how to import some sort of file to use as format for posts
                </div>
            </div>
        </Layout>
    );
}

export default Post;
