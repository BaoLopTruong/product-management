import { useState, useEffect } from 'react';

export default function Clock(props) {
    const [year, setYear] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [date, setDate] = useState('');
    const [hours, setHours] = useState('');
    const [mintues, setMintues] = useState('');
    const [seconds, setSeconds] = useState('');

    useEffect(() => {
        const updateTime = () => {
            let now = new Date();
            setYear(now.getFullYear());
            let weekday = new Array(7);
            weekday[0] = "Chủ Nhật";
            weekday[1] = "Thứ Hai";
            weekday[2] = "Thứ Ba";
            weekday[3] = "Thứ Tư";
            weekday[4] = "Thứ Năm";
            weekday[5] = "Thứ Sáu";
            weekday[6] = "Thứ Bảy";
            let day = weekday[now.getDay()];
            setDay(day);
            setMonth(checkTime(now.getMonth()+1))
            setDate(checkTime(now.getDate()));
            setHours(checkTime(now.getHours()));
            setMintues(checkTime(now.getMinutes()));
            setSeconds(checkTime(now.getSeconds()));
        }
        
        const checkTime =(time) =>{
            if(time <10){
               time = "0" + (time); 
            }
            return time;
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
                            <li className="breadcrumb-item"><b> {props.name}</b></li>
                        </ul>
                        <div id="clock" ><span className='date'> <p style={{float: 'right'}}>{hours}:{mintues}:{seconds} </p> <br></br>   
                        <p style={{ float: 'right'}}> {day}, ngày {date}, tháng {month}, năm {year}</p></span>  </div>
                    </div>
                </div>
            </div>
        </div>
    )

}