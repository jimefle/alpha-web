/* eslint-disable react/prop-types */
import '../styles/Blog.css'

const BlogCard = ({ image, title, description, content, onExpand, isExpanded }) => {
  const handleReadMore = () => {
    onExpand(); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClose = () => {
    onExpand();
  };

  return (
    <div className={`blog-card ${isExpanded ? 'expanded' : ''}`}>
      <img src={image} alt={title} className="blog-image" />
      <div className="blog-content">
        <h2 className="blog-title">{title}</h2>
        {isExpanded ? (
          <>
            <div
              className="blog-full-content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <div className="outer-close" onClick={handleClose}>
              <div className="inner-close">
                <label className='label-blog'>Cerrar</label>
              </div>
            </div>
          </>
        ) : (
          <>
            <p className="blog-description">{description}</p>
            <button className="read-more-button" onClick={handleReadMore}>
              Leer más
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
