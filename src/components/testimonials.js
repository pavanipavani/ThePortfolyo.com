import React, { useEffect, useState } from "react";
import './testimonials.css';
import axios from "axios";

function Testimonials (){
    const [testimonialsData , setTestimonialsData] = useState(null);
    const [isLoading ,setIsLoading] = useState(true);
    const [error ,setError] = useState(null);

    useEffect(() =>{
        const fetchTestimonialsdata = async ()=>{
            try{
                const response = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
                console.log(response.data);
                setTestimonialsData(response.data.user.testimonials);
                setIsLoading(false);
            }
            catch(error){
                setError(error.message);
                setIsLoading(false);
            }
        };
        fetchTestimonialsdata();
    },[]);

    useEffect(() =>{
        console.log(testimonialsData);
    },[testimonialsData])
    if(isLoading){
        return <div>Loading...</div>
    }

    if(error || !testimonialsData || testimonialsData.length === 0){
        console.error(error || "testimonialData is not found");
        return <div> {error || "testimanialData is not found"}</div>
    }
    return(
        <div>
            <h1 className="testimonialTitle">Testimonials</h1>
            <div className="display-flex">
                {testimonialsData.map((testimonials) =>(
                    <div className="borderingtestimonial" key={testimonials._id}>
                        <div className="images1">
                            <img className="simagesize4" src={testimonials.image.url} alt={testimonials.name} />
                        </div>
                        <div className="textingtestmonial">
                            <h2 className="center">{testimonials.name}</h2>
                            <h3>{testimonials.position}</h3>
                            <div className="review">{testimonials.review}</div>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}
export default Testimonials;