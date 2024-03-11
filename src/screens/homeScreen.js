import { useState, useEffect } from "react";
import axios from 'axios';

const Homescreen = () => {
    const [rooms, setrooms] = useState([]);
    const roomData = async ()=>{
        try {
            const data = (await this.axios.get('http://localhost:4000/api'));  // get the data from server
            setrooms(data);   //set the state with the fetched data
        } catch (error) {
            console.log(error);
        }
    };
   
    return ( 
        <div className="homescreen">
            <h1>welcome to home screen</h1>
            <h2>we have {rooms.length} rooms for you.</h2>
        </div>
     );

    //  useEffect(()=>roomData());
}
 
export default Homescreen;