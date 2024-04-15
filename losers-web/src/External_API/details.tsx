import { useEffect, useState } from "react";
import Nav from "../Nav";
import { Repository } from "./client";
import * as client from "./client"

function Details() {

    const [currentRepo, setRepo] = useState<Repository>({});

    const fetchRepo = async () => {
        const response = await client.getRepo("a382259104", "Losers");
        if (response.data) setRepo(response.data);
    };


    useEffect(() => {
        fetchRepo();
    }, []);


    return (
        <>
            <Nav />
            <h1>External API Page</h1>
            {/* Display repository details */}
            <div>
                <h2>Repository Details</h2>
                <p>ID: {currentRepo.id}</p>
                <p>Name: {currentRepo.name}</p>
                <p>Full Name: {currentRepo.full_name}</p>
                <p>Visibility: {currentRepo.visibility}</p>
                <p>URL: {currentRepo.html_url}</p>
                <p>Description: {currentRepo.description? currentRepo.description:"No description given"}</p>
                {/* Add more details as needed */}
            </div>
        </>
    );
};

export default Details;