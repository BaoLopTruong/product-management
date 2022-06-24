import Clock from "./navbar/Clock";
import Navbar from "./navbar/Navbar";
import Title from "./navbar/Title";


export default function LayOut({ children }) {

    return (
        <>
            <div className="layout">
                <Navbar></Navbar>
            </div>
            <main className="app-content">
                {/* <Clock></Clock> */}
                <div className="row">
                <div className="col-md-12">
                    <div className="app-title">
                        <ul className="app-breadcrumb breadcrumb">
                           <Title></Title>
                        </ul>
                        <div id="clock" > <Clock></Clock>  </div>
                    </div>
                </div>
            </div>
                {children}</main>
        </>

    )
}