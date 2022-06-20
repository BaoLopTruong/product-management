import { useState, useEffect } from 'react';

export default function Clock() {
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [date, setDate] = useState('');
    const [hours, setHours] = useState('');
    const [mintues, setMintues] = useState('');
    const [seconds, setSeconds] = useState('');

    useEffect(() => {
        const updateTime = () => {
            let now = new Date();
            setYear(now.getFullYear());
            // validate month, date, hours, minitues, seconds
            if(now.getMonth() + 1 <10){
                let month = "0" + (now.getMonth()+1)
                setMonth( month);
            }
            else{
                setMonth(now.getMonth() + 1);
            }
            setDate(now.getDate());
            if(now.getHours() <10){
                let hours = "0" + (now.getHours())
                setHours(hours)
            }
            else{
                setHours(now.getHours());
            }
            
            setMintues(now.getMinutes());
            setSeconds(now.getSeconds());
    
        }
    
        setInterval(() => {
            updateTime();
        }, 1000)
    });

    

    return (
        <div className='clock'>
            <div className="row">
                <div className="col-md-12">
                    <div className="app-title">
                        <ul className="app-breadcrumb breadcrumb">
                            <li className="breadcrumb-item"><b>Bảng điều khiển</b></li>
                        </ul>
                        <div id="clock" ><span className='date'>   <p>{hours}:{mintues}:{seconds} / {date}-{month}-{year}</p></span>  </div>
                    </div>
                </div>
            </div>
        </div>
    )

}