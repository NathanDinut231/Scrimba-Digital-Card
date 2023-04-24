import {useState} from 'react';
import './MainContent.css'


export default function MainContent(){
    const [count, setCount] = useState(0)
    return(
        <>
        
        <div className="table-div">
        <table className='table'>
            <thead>
        <h2>Nathan Dinut</h2>
        <h4>Web Developer</h4>
        
        <button className='btnEmail' onClick={() => alert('My Email : dinutnathan@gmail.com')}>Email</button>
        <button className='btnLinkedIn' onClick={() => window.open('https://linkedin.com/in/nathan-dinut-04347622a/')} target="_blank">LinkedIn</button>
        

        < br />< br />
            </thead>
            <tbody>
                <h5>About</h5>
                
                <h6>I'm currently a Student at Bay Valley Tech who is sharpening his Front End Development skills. I will also be learning MySQL and Node.js preparing me for a Full Stack Developer role. </h6>
                
                <h5>Interests</h5>
                <h6>My interests include spending my time wisely while I live, life is short. I would like my life to matter and to have meaning as I help my family and others to grow in a positive direction. </h6>

                <br />

                </tbody>


        </table>
        </div>
        </>
    )
}
