import { useState } from 'react';

export default function GeneralInfo({
    name,
    onNameChange,
    email,
    onEmailChange,
    phoneNumber,
    onPhoneNumberChange }) {

    return (
    <div className="general information">
        <h4 className='form-header'>General Information</h4>
        <form className="info-form">
        <label htmlFor="name" >Name</label>
        <input 
            id="name" 
            type="text"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input 
            id="email" 
            type="text"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)} />
        <label htmlFor="phone">Phone</label>
        <input 
            id="phone"
            type="text"
            value={phoneNumber}
            onChange={(e) => onPhoneNumberChange(e.target.value)} />
        </form>

    </div>    
    )
}