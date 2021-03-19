import React, { useEffect, useRef } from 'react'

const Card = ({ quote, newQuote, newColor }) => {
    const { text, author } = quote;

    const quoteRef = useRef();
    const authorRef = useRef();

    useEffect(() => {
        quoteRef.current.classList.add("fade-in")
        quoteRef.current.classList.remove("fade-out")
        authorRef.current.classList.add("fade-in")
        authorRef.current.classList.remove("fade-out")
    }, [quote])

    return (
        <div id="quote-box" className="card mt-5">
            <div className="card-body mx-5 text-center">
                <blockquote className="blockquote mt-3">
                    <p id="text" ref={quoteRef} className="fade-in" style={{ color: newColor }}>{text || "..."}</p>
                    <footer id="author" ref={authorRef} style={{ color: newColor }} className="blockquote-footer mt-2 text-end me-5 fst-italic fade-in">{author || "Someone"}</footer>
                </blockquote>
            </div>
            <div className="card-footer d-flex justify-content-between">
                <div>
                    <span className="mx-3">Share on: </span>
                    <a id="tweet-quote" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(`"${text}" - ${author}`)}`} rel="noreferrer" className="btn btn-sm mx-2" target="_blank" title="Post this on Twitter!"><i className="bi bi-twitter"></i> Twitter</a>
                </div>
                <div>
                    <button id="new-quote" className="btn btn-sm" onClick={() => {
                        quoteRef.current.classList.add('fade-out');
                        authorRef.current.classList.add('fade-out');
                        setTimeout(() => newQuote(), 800);
                    }
                    }>New quote</button>
                </div>
            </div>
        </div>
    )
}

export default Card
