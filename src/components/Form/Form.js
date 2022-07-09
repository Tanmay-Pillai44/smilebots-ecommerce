import { useState } from 'react';

const Form = () => {
    const [users, setUsers] = useState([]);

    const [heading, setHeading] = useState("Please Fill Your Details")

    const [details, setDetails] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers([...users, details])
        setDetails({
            name: '',
            email: '',
            phone: '',
            address: '',
        })
        setHeading("Successfully Submitted Your Details")
    }

    const handleChange = (e) => {
        setDetails({...details, [e.target.name]: e.target.value})
    }

    return (
        <>
        <div className='form-heading'>{heading}</div>
        <div className='form-wrapper'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name='name'
                    id='name'
                    value={details.name}
                    onChange={handleChange}
                /> <br/> <br/>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name='email'
                    id='email'
                    value={details.email}
                    onChange={handleChange}
                /> <br/> <br/>
                <label htmlFor="phone">Phone</label>
                <input
                    type="tel"
                    name='phone'
                    id='phone'
                    value={details.phone}
                    onChange={handleChange}
                /> <br/> <br/>
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    name='address'
                    id='address'
                    value={details.address}
                    onChange={handleChange}
                /> <br/> <br/>
                <button type='submit' className="submit-btn">Submit</button>
            </form>
            <div>
            </div>
        </div>
        </>
    )
}

export default Form;