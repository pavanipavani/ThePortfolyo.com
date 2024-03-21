import React, { useEffect, useState } from "react";
import './social.css';
import axios from "axios";

function Social(){
    const [socialData ,setSocialData] = useState(null);
    const [isLoading ,setIsLoading] = useState(true);
    const [error , setError] = useState(null);

    useEffect(() =>{
        const fetchSocialData = async () =>{
            try {
                const response = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
                console.log(response.data);
                setSocialData(response.data.user.social_handles);
                setIsLoading(false);
            }
            catch(error){
                setError(error.message)
                setIsLoading(false);
            }
        }
        fetchSocialData();
    },[]);

    useEffect(() =>{
        console.log(socialData);
    },[socialData])

    if(isLoading){
        return <div>Loading...</div>
    }
    if(error || !socialData || socialData.length === 0){
        console.error(error || "social data is not found");
        return <div>{error || "social data is not found"}</div>
    }
    return(
        <div>
            <h1 className="socialTitle">Social Media Handles</h1>
            <div className="socialinfo">
                {   socialData.map((social_handles)=>(
                        <div className="socialborder"  key={social_handles._id}>
                            <img className="socialimage" src={social_handles.image.url} alt= {social_handles.platform} />
                            <h1>{social_handles.platform}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Social;