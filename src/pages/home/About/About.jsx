import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="lg:w-1/2  relative">
                        <img src={person} alt="" className="w-3/4  rounded-lg" />
                        <img src={parts} alt="" className="w-2/4 absolute right-5 top-1/2 border-white border-8 rounded-lg" />
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-xl text-orange-600 font-bold pb-7">About Us</h2>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="font-medium py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
                    <p className="font-medium py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
                    <button className="btn btn-primary">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;