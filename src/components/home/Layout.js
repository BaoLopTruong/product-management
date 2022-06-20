import Clock from "./navbar/Clock";
import Navbar from "./navbar/Navbar";


export default function LayOut({ children }) {

    return (
        <>
            <div className="layout">
                <Navbar></Navbar>
            </div>
            <main className="app-content">
                <Clock></Clock>
                {children}</main>
        </>

    )
}