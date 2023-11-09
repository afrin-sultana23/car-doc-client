import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import { useNavigate } from "react-router-dom";


const Allbooking = () => {

    const { user } = useContext(AuthContext);
    const [ bookings, setBookings] = useState([])
    const navigate = useNavigate();

    const url =  `http://localhost:5000/bookings?email=${user?.email}`
    useEffect( () => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}` 
            },
        })
        .then(res => res.json())
        .then(data => {
            if(!data.error){
                setBookings(data);
            }
            else {
                // log out and navigate
                navigate('/');
            }
        })
    }, [url, navigate]);

    // delete bookings from the database using 
    const handleDelete = id => {

        const proceed = confirm('Are you sure you want to delete');

        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            })

        }
    };

    const handleConfirm = id => {

            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'PATCH',
                headers: { 
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify({ status: 'confirm' }),
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm';
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }
            })

    };

    return (
        <div>
            <h1>bookings:  {bookings.length}</h1>
            <div className="overflow-x-auto my-10">
                <table className="table">
                    {/* head */}
                    <thead className="bg-purple-400 text-white">
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <th>Name</th>
                        <th>services</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                       {
                           bookings.map(booking => <BookingRow
                               key={booking._id}
                               booking={booking}
                               handleDelete={handleDelete}
                               handleConfirm={handleConfirm}
                               
                           ></BookingRow>)
                        }

                    </tbody>
                    
                </table>
                </div>
        </div>
    );
};

export default Allbooking;