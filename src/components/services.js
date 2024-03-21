import React, { useEffect, useState } from "react";
import './services.css';
import axios from "axios";

function Services(){
    const [serviceData, setServiceData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error ,setError] = useState(null);

    useEffect(() => {
        const fetchServiceData = async ()=>{
            try{
                const response = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
                console.log(response.data);
                setServiceData(response.data.user.services);
                setIsLoading(false);
            }catch (error){
                setError(error.message);
                setIsLoading(false);
            }
        };
        fetchServiceData();
    },[])
    useEffect(() => {
        console.log(serviceData);
    },[serviceData]);

    if(isLoading){
        return <div>Loading ...</div>
    }
    if(error || !serviceData || serviceData.length === 0){
        console.error(error || "services data is not found");
        return <div>Error : {error || "services data is empty"}</div>
    }

    return(
        <div>
            <h1 className="serviceTitle">Services</h1>
            <div className="borderService">
                { serviceData.map((service) => (
                    <div className="borderserviceinfo" key={service._id}>
                        <div>
                            <img className="imagesize2" src={service.image.url} alt={service.name} />
                        </div>
                        <div className="textingborderinfo">
                            <h2 className="servicename">{service.name}</h2>
                            <div className="text">service charge : {service.charge}</div>
                            <div className="text1">service desc : {service.desc}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Services;
