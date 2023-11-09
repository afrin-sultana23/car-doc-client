import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])


    return (
        <div className="my-4">
            <div className="text-center space-y-6 mb-5">
                <h1 className="font-bold text-orange-600 text-2xl">Service</h1>
                <h1 className="text-5xl text-slate-900 font-bold">Our Service Area</h1>
                <p className="text-xl font-medium">the majority have suffered alteration in some form, by injected humour, or randomised 
                <br /> words which dont look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;