
import Carousel from 'react-bootstrap/Carousel'
import React, { useEffect, useState } from "react";


const Slider = () => {

    const [news, setNews] = useState()


    useEffect(() => {
        fetch("http://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=8fad904276eb45d3a83e22aa32f67b66")
            .then(response => response.json())
            .then(response => setNews(response))
    }, [])
    console.log(news)
    // const divStyle = {
    //     height: '400px',
    //     width: '800px'
    // };


    return (

        <Carousel>
            {news.articles.map((a, i) => {
                return (
                    <Carousel.Item key={i}>
                        <img

                            className="d-block w-100"
                            src={a.urlToImage}
                            alt={a.title}
                        />
                        <Carousel.Caption>
                            <h3>{a.title}</h3>
                            <p>{a.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>)
            })}

        </Carousel>






    )
}

export default Slider
