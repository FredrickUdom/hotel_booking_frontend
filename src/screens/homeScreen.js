import { useState, useEffect } from "react";
import axios from 'axios';

const Homescreen = () => {
    const [rooms, setRooms] = useState([]);
    const[loading, setLoading]=useState();
    const[error,setError]=useState();
    const roomData = async ()=>{
        try {
            setLoading(true)
            const data = (await this.axios.get('http://localhost:4000/api'));  // get the data from server
            setRooms(data);   //set the state with the fetched data
            setLoading(false)
        } catch (error) {
            setError(true)
            console.log(error);
            setLoading(false)
        }
    };
   
    return ( 
        <div className="homescreen">
           {loading ? (<h1>loading...</h1>): error ? (<h1>Error</h1>):(rooms.map(room=>{
            return (
                <div></div>
            )
           }))}
        </div>
     );

    //  useEffect(()=>roomData());
}
 
export default Homescreen;