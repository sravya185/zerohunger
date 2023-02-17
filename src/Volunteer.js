import React from 'react';
import axios from 'axios';
import { useState,useEffect} from 'react';
import {useForm} from 'react-hook-form';

const Volunteer = () => {
    const [data,setData] = useState('');
    const [location,setLocation] = useState(null);

    const {register,handleSubmit,formState:{errors}} = useForm()
    // const {register2,handleSubmit2,formState:{errors2}} = useForm()

    let url;
    const onchange = (input) =>{
        setData(input.City);
    };
    //getting data and storing in a variable

    useEffect(()=>{
        axios
            .get('https://api.openweathermap.org/data/2.5/weather?q='+data+'&appid=e30b6fed10150cfad520f81ad9797897')
            .then((res) => {
                setLocation(res.data.coord);
            })
            .catch((err) => {
                setLocation(null);
            });
    },[data])

    location?url='https://map.google.com/maps?q=' + location.lat + ',' + location.lon +  '&hl=es;&output=embed'    : url="";
    
    return (
        <div className='volunteer'>
        <div className='volunteer-details'>
            <h2>TAKE FOOD</h2>
            <div className="volunteer-input">
                <form  onSubmit={handleSubmit(onchange)}>
                    <div class="ui icon input">
                        <input type="text" placeholder="Search City" {...register("City")}/>
                        <i class="search icon"></i>
                    </div>
                </form>
            </div>
            {location?
                <div className="Location">
                    <iframe src={url} frameborder="0"></iframe>
                    <p>Here there is a food availability in this Location</p>
                    <button>Contant Us</button>
                </div> : <div>data not found</div>            
            } 
        </div>
        <div className='volunteer-details'> 
                <h2>GIVE FOOD</h2>           
                <div className="Location" style={{marginTop:"83px"}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61194
            .52888415325!2d81.48103540627308!3d16.543351894233513!2m3!1f0!2f0!3f0!3m2
            !1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37d2a6a86d3e4b%3A0x4eed21243d2dcfed!2sBhimavaram%2C%20
            Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1669301010182!5m2!1sen!2sin" frameborder="0"></iframe>
                    <p>Here there is a food Need in this Location</p>
                    <button>Contant Us</button>
                </div>
        </div>
        </div>
    );
};

export default Volunteer;