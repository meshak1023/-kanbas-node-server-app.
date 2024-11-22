import React, { useEffect, useState } from "react";
import * as client from "./client";

export default function HttpClient() {
    const [welcomeOnClick, setWelcomeOnClick] = useState("");
    const [welcomeOnLoad, setWelcomeOnLoad] = useState("");

    // Function to fetch the welcome message when the button is clicked
    const fetchWelcomeOnClick = async () => {
        const message = await client.fetchWelcomeMessage();
        setWelcomeOnClick(message);
    };

    // Function to fetch the welcome message when the component loads
    const fetchWelcomeOnLoad = async () => {
        const welcome = await client.fetchWelcomeMessage();
        setWelcomeOnLoad(welcome);
    };

    // useEffect to trigger fetchWelcomeOnLoad on component load
    useEffect(() => {
        fetchWelcomeOnLoad();
    }, []);

    return (
        <div>
            <h3>HTTP Client</h3>
            <hr />
            <h4>Requesting on Click</h4>
            <button className="btn btn-primary me-2" onClick={fetchWelcomeOnClick}>
                Fetch Welcome
            </button>
            <br />
            Response from server (on click): <b>{welcomeOnClick}</b>
            <hr />
            <h4>Requesting on Load</h4>
            Response from server (on load): <b>{welcomeOnLoad}</b>
            <hr />
        </div>
    );
}
