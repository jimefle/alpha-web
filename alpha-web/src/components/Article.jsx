/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import '../styles/Article.css';
import {Link} from 'react-router-dom'

const  Article = ({ title, text, image , imagePosition = 'left' , path = null, btnText}) => {
    const texts = text.split('/n').filter(p => p.trim().length > 0);
    const [isVisible, setIsVisible] = useState(false)
    const articleRef = useRef(null)

    useEffect(()=>{
        const handleScroll = () => {
            if (isVisible) return // para que solo lo haga la primera vez

            const element = articleRef.current
            if(element){
                const rect = element.getBoundingClientRect()
                const isElementVisible = rect.top < window.innerHeight && rect.bottom > 0;
                if (isElementVisible){
                    setIsVisible(true)
                }
            }
        }
        window.addEventListener('scroll', handleScroll);
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[isVisible])

    return(
        <div ref={articleRef} className={`article-section ${imagePosition} ${isVisible ? 'article-enter-active' : ''}`}>
            <section className="article-info">
                <h1>{title}</h1>
                {texts.map((para, index) => (
                    <p key={index} className="text-article">{para.trim()}</p>
                ))}
            </section>
            <section className="article-image">
                <img src={image} alt="" className="imagen-article"/>
            </section>
            <div className='btn'>
                {path && (
                    <Link to={path} className="cta" preventScrollReset={false}>
                        <span>{btnText}</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Article;