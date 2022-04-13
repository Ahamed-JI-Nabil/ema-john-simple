import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const user = useAuthState(auth)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhoneNumber] = useState('')
    const [error, setError] = useState('')

    // const navigate = useNavigate()

    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const handleAddressBlur = event => {
        setAddress(event.target.value)
    }
    const handlePhoneNumberBlur = event => {
        setPhoneNumber(event.target.value)
    }


    console.log(user);

    const handleCreateUser = event => {
        event.preventDefault()
        const shippingInfo = {name, email, address, phone}
        console.log(shippingInfo)
    }

    return (
        <div className="form-container">
            <div>
                <h2 className='form-title'>Shipping Information</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="text">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user[0]?.email} readOnly type="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="text">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="text">Phone Number</label>
                        <input onBlur={handlePhoneNumberBlur} type="text" name="phone-number" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className="form-submit" type="submit" value="Add Shipping" required />
                </form>
            </div>
        </div>
    );
};

export default Shipment;