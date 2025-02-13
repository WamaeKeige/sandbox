import React, {useState} from 'react';
import Title from '../components/components/Title';

export default function ESignatureApp() {
    const [name, setName] = useState('Ur Signature');
    const [date, setDate] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleDateChange = (e) => {
        setDate(e.target.value);
    }

    const inputStyle = {
        border: 'none',
        borderBottom: '2px dotted',
        outline: 'none',
        padding: '.35rem 0'
    }
    document.body.style.background = 'rgba(201, 189, 189, 0.7)';
    return (
        <div className="ESignatureApp container">
            <div className="up">
                <Title text={name} classes={'text-center'} />
                <Title classes={'subtitle'} text={!date ? 'DoB' : date} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ratione, quaerat voluptatem velit delectus quod magnam rerum nemo praesentium deserunt. Placeat ipsa debitis iure accusantium aliquid vel veritatis voluptatum laboriosam!</p>
            </div>
            <div className="down">
                <input
                    type="date"
                    value={date}
                    style={inputStyle}
                    onChange={handleDateChange} />
                <input
                    type="text"
                    value={name}
                    style={inputStyle}
                    onChange={handleNameChange} />
            </div>

        </div>
    )
}