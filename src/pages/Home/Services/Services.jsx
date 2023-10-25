import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('./services.json')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="mt-5">
            <div className="text-center space-y-2">
                <h3 className="tet-2xl font-bold text-[#FF3811]">Service</h3>
                <h4 className="text-5xl font-bold text-[#151515]">Our Service Area</h4>
                <p className="text-xl text-[#737373]">The majority have suffered alteration in some form, by injected humour, or randomized <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service =><ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;