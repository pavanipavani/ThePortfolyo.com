import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './skills.css';

const Skills = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
        console.log("API response:", response.data); 
        setUserData(response.data.user); 
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    console.log("userData:", userData);
  }, [userData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !userData || !userData.skills || userData.skills.length === 0) {
    console.error("Error:", error || "Skills data not found or empty"); 
    return <div>Error: {error || "Skills data not found or empty"}</div>;
  }

  return (
    <div>
      <h1 className='skillsTitle'>Skills</h1>
      <div className='dataDecoration'>
        {userData.skills.map((skill) => (
          <div className='border' key={skill._id}>
            <img className='imagesize' src={skill.image.url} alt={skill.name} />
            <h3>{skill.name}</h3>
            <p>Percentage: {skill.percentage}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
