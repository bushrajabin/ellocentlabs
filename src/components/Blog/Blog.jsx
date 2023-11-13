
import { BlogImage } from "../../common/common"
import "./Blog.css"
const Blog = () => {
    return (

        <div className="blog">
            <div className="top-title">
                <h2>News and Blog</h2>
                <h3>Stay in the loop of tech world</h3>
            </div>
            <div className="images-for-blog">
                {

                    BlogImage.map((data, index, arr) => {
                        const {image,title1,title2,button}=data;
                        return (
                            <div className="blog-images">
                                <img src={image} alt="image" />
                                <h2>{title2}</h2>
                                <p>{title2}</p>
                                <button>{button}</button>
                            
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}



export default Blog;