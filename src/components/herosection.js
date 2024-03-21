import React, { useEffect, useState } from "react";
import './herosection.css';
import axios from "axios";


function Herosection(){
    const [herosectionData, setHerosectionData] = useState(null);
    const [isLoading ,setIsLoading] = useState(true);
    const [error ,setError] = useState(null);
    const [about, setAbout] = useState(null);

    useEffect(() =>{
        const fetchHerosectionData = async () =>{
            try{
                const response = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
                console.log(response.data);
                setAbout(response.data.user.about);
                setHerosectionData(response.data.user.timeline);
                setIsLoading(false)
            }
            catch(error){
                setError(error.message);
                setIsLoading(false)
            }
        }
        fetchHerosectionData();
    },[])

    useEffect(() =>{
        console.log(herosectionData);
    },[herosectionData])

    if(isLoading){
        return <div>Loading ...</div>
    }

    if(error || !about || !herosectionData || herosectionData.length ===0){
        console.error(error || "herosection data is not found");
        return <div>{error || "herosection data is not found"}</div>
    }

    return(
        <div>
            <h1 className="herosectionTitle">Hero Section</h1>
            <div className="aboutborder">
                <h1 className="abouttitle">About</h1>
               
                    <div className="flexDirection">
                        <div>
                            <img className="avatarimage" src={about.avatar.url} alt={about.name} />
                            <h1 className="name_middle">{about.name}</h1>
                         </div>
                        <div className="aboutinfo">
                            <h2>{about.title}</h2>
                            <h3>Subtitle : {about.subTitle}</h3>
                            <h3>Address : {about.address}</h3>
                            <h2>Quote : {about.quote}</h2>
                            <div>{about.description}</div>
                        </div>  
                    </div>
            </div>
            <div className="herosectioninfo">
                {
                    herosectionData.map((herosection) =>(
                        <div className="herosectioninformation" key={herosection._id}>
                            <h2 className="company_Name">{herosection.company_name}</h2>
                            <h3>Job_Title : {herosection.jobTitle}</h3>
                            <h3>Location : {herosection.jobLocation}</h3>
                            <div className="herosectionpoints">{herosection.bulletPoints}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Herosection;