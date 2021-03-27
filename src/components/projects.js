import React, { useState, useEffect } from 'react';
import Project from './projectsComponents/project';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://api.github.com/users/paul-rosero/starred")
        .then(promise => promise.json())
        .then(data => { 
            setIsLoaded(true);
            setProjects(data);
        }, (error) => {
            setIsLoaded(true)
            setError(error);
        })
    }, [projects]);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="container" id="projects">
                <h1 style={{ textAlign: "center" }}>My Projects:</h1>
                <Project projects={ projects }/>
            </div>    
        );
    }
}

export default Projects;


