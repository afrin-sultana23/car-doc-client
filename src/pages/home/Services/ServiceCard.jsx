import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {

    const {_id, title, img, price} = service;


    return (
        <div>
            <div className="card w-96 bg-purple-300 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="" className="min-h-[206px]  rounded-xl" />
                </figure>
                <div className="card-body flex">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-lg text-orange-600 font-semibold">Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/checkout/${_id}`}>
                            <button className="btn ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            </button>                       
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;