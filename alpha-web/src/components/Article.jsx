/* eslint-disable react/prop-types */
import '../styles/Article.css'
const  Article = ({ title, text, image }) => {
    const texts = text.split('.').filter(p => p.trim().length > 0);

    return(
        <div className="article-section">
            <section className="article-info">
                <h1>{title}</h1>
                {texts.map((para, index) => (
                    <p key={index} className="text-article">{para.trim()}.</p>
                ))}
            </section>
            <section className="article-image">
                <img src={image} alt="Image" className="imagen-article"/>
            </section>
        </div>
    )
}

export default Article;