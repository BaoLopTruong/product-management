

export default function Title(props) {
    return (
        <div className='title' >
           <span><b style={{top : '100px', position: 'absolute', marginLeft: '40px', fontSize: '20px', marginTop: '20px'}}>{props.title}</b></span>
        </div>
    )

}