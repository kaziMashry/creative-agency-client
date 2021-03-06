import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ShowClientFeedback from '../ShowClientFeedback/ShowClientFeedback';

const ClientFeedback = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetch('https://murmuring-journey-21904.herokuapp.com/getReviews')
            .then(res => res.json())
            .then(data => setClients(data));
    }, []);

    return (
        <section className="mt-4 mb-4 pt-4 pb-4 mw-75">
            <h2 className="text-center font-weight-bolder pt-4 pb-4">Clients <span style={{ color: "#7AB259" }}>Feedback</span></h2>
            <div className="row d-flex justify-content-center mw-100 pt-4 pb-4">
                {
                    clients.length > 0 ?
                        clients.map(client => <ShowClientFeedback client={client} key={client._id} />)
                        : <div className="spinner-border text-warning" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                }
            </div>
        </section>
    );
};

export default ClientFeedback;