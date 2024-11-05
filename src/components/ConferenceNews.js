import React from 'react';
import './ConferenceNews.css';

const ConferenceNews = () => {
    const events = [
        {
            image: 'https://jthemes.net/themes/wp/eventor/wp-content/uploads/2022/11/alex-kotliarskyi-ourQHRTE2IM-unsplash-2048x1365.jpg', // replace with actual image path
            tag: 'Conference 2023',
            title: 'The Business of Events confirms ICC Wales as latest official partner',
            description: 'The Business of Events has confirmed ICC Wales as its latest official partner...',
            link: '/path-to-article-1' // replace with actual link
        },
        {
            image: 'https://jthemes.net/themes/wp/eventor/wp-content/uploads/2022/11/evangeline-shaw-xRlI-L-kvrw-unsplash-2048x1365.jpg',
            tag: 'Conference 2023',
            title: 'Events Industry Council announces Recipients of 2022 Global Awards',
            description: 'The Events Industry Council (EIC), the global voice of the events industry...',
            link: '/path-to-article-2'
        },
        {
            image: 'https://jthemes.net/themes/wp/eventor/wp-content/uploads/2022/11/md-duran-dEjMN6JXcj8-unsplash-2048x1365.jpg',
            tag: 'Conference 2023',
            title: 'Event Technology Awards coveted People’s Choice Award voting open',
            description: 'Voting has opened today for #EventProfs to choose their favourite EventTech supplier...',
            link: '/path-to-article-3'
        }
    ];

    return (
        <div className="conference-news">
            <h2>Conference news and event industry trends</h2>
            <div className="news-grid">
                {events.map((event, index) => (
                    <div key={index} className="news-card">
                        <img src={event.image} alt={event.title} className="news-image" />
                        <div className="overlay">
                            <a href={event.link} className="view-button">VIEW</a>
                        </div>
                        <p className="tag">{event.tag}</p>
                        <h3>{event.title}</h3>
                        <p className="description">{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ConferenceNews;
