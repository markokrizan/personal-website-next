const PostCard = () => {
    return (
        <div class="col-padding">
            <div class="post-card">
                <a href="#" class="blog-img"><img src="https://dummyimage.com/vga"/></a>
                <div class="desc">
                    <h3><a href="#">Inspirational Website</a></h3>
                    <span><small>by Admin </small> / <small> Web Design </small> / <small> <i class="icon-comment"></i> 14</small></span>
                    <p>Design must be functional and functionality must be translated into visual aesthetics</p>
                    <a href="#" class="lead">Read More <i class="icon-arrow-right3"></i></a>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
