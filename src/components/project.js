import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './project.css'; 

const Projects = () => {
  const [projectData, setProjectData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
        console.log(response.data);
        setProjectData(response.data.user.projects);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    fetchProjectData();
  }, []);

  useEffect(() => {
    console.log("projectData:", projectData);
  }, [projectData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !projectData || projectData.length === 0) {
    console.error("Error:", error || "Project data not found or empty");
    return <div>Error: {error || "Project data not found or empty"}</div>;
  }

  return (
    <div>
      <h1 className='projectsTitle'>Projects</h1>
      <div className='borders'>
        {projectData.map((project) => (
          <div className='projectBorder' key={project._id}>
            <img className='imagesize1' src={project.image.url} alt={project.title} />
            <h2>{project.title}</h2>
            <p>sequence: {project.sequence}</p>
            <p>Technologies Used: {project.techStack.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

