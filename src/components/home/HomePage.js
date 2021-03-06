import '../../main.css'
import { CanvasJSChart } from 'canvasjs-react-charts'
import Title from './navbar/Title'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function HomePage() {

    const [totalProducts, setTotalProducts] = useState(0);
    const [totalOrders, setTotalOrders] = useState(0);
    const [statusOrder, setStatusOrder] = useState([]);
    const [count, setCount] = useState(0);
    const [staff, setStaff] = useState(0);

    useEffect(() => {
        //total products
        axios.get('https://json-server-api-product.herokuapp.com/products')
            .then(res => {
                let data = res.data;
                let total = 0;
                for (let i = 0; i < data.length; i++) {
                    if (data[i].amount) {
                        total = total + Number(data[i].amount);
                    }
                }
                setTotalProducts(total)
            })
            .catch(err => {
                throw err;
            })
        // total Orders
        axios.get('https://json-server-api-product.herokuapp.com/orders')
            .then(res => {
                setTotalOrders(res.data.length)
            })
            .catch(err => {
                throw err;
            })
        // mat hang sap het 
        axios.get('https://json-server-api-product.herokuapp.com/products')
            .then(res => {
                let data = res.data;
                let count = 0;
                for (let i = 0; i < data.length; i++) {
                    if (data[i].amount && data[i].amount < 5) {
                        count++;
                    }
                }
                setCount(count)
            })
            .catch(err => {
                throw err;
            })
        //total staff
        axios.get('https://json-server-api-product.herokuapp.com/staffs')
            .then(res => {
                setStaff(res.data.length)
            })
            .catch(err => {
                throw err;
            })
        //status order
        axios.get('https://json-server-api-product.herokuapp.com/orders')
            .then(res => {
                setStatusOrder(res.data)
            })
            .catch(err => {
                throw err;
            })
    })

    const options = {
        animationEnabled: true,
        title: {
            text: ""
        },
        axisY: {
            title: ""
        },
        toolTip: {
            shared: true
        },
        data: [{
            type: "spline",
            name: "Jan",
            showInLegend: true,
            dataPoints: [
                { y: 155, label: "Day1" },
                { y: 150, label: "Day2" },
                { y: 152, label: "Day3" },
                { y: 148, label: "Day4" },
                { y: 142, label: "Day5" },
                { y: 150, label: "Day6" },
                { y: 146, label: "Day7" },
                { y: 149, label: "Day8" },
                { y: 153, label: "Day9" },
                { y: 158, label: "Day10" },
                { y: 154, label: "Day11" },
                { y: 150, label: "Day12" },
                { y: 210, label: "Day13" },
                { y: 150, label: "Day12" },
                { y: 150, label: "Day14" },
                { y: 180, label: "Day15" },
                { y: 150, label: "Day16" },
                { y: 198, label: "Day17" },
                { y: 150, label: "Day18" },
                { y: 150, label: "Day19" },
                { y: 123, label: "Day20" },
                { y: 150, label: "Day21" },
                { y: 123, label: "Day22" },
                { y: 150, label: "Day23" },
                { y: 150, label: "Day24" },
                { y: 112, label: "Day25" },
                { y: 150, label: "Day26" },
                { y: 150, label: "Day27" },
                { y: 190, label: "Day28" },
                { y: 150, label: "Day29" },
                { y: 200, label: "Day30" },
            ]
        },
        {
            type: "spline",
            name: "2017",
            showInLegend: true,
            dataPoints: [
                { y: 155, label: "Day1" },
                { y: 160, label: "Day2" },
                { y: 200, label: "Day3" },
                { y: 178, label: "Day4" },
                { y: 162, label: "Day5" },
                { y: 190, label: "Day6" },
                { y: 176, label: "Day7" },
                { y: 129, label: "Day8" },
                { y: 193, label: "Day9" },
                { y: 128, label: "Day10" },
                { y: 100, label: "Day11" },
                { y: 120, label: "Day12" },
                { y: 190, label: "Day13" },
                { y: 200, label: "Day12" },
                { y: 110, label: "Day14" },
                { y: 150, label: "Day15" },
                { y: 150, label: "Day16" },
                { y: 150, label: "Day17" },
                { y: 150, label: "Day18" },
                { y: 130, label: "Day19" },
                { y: 150, label: "Day20" },
                { y: 150, label: "Day21" },
                { y: 200, label: "Day22" },
                { y: 121, label: "Day23" },
                { y: 150, label: "Day24" },
                { y: 142, label: "Day25" },
                { y: 150, label: "Day26" },
                { y: 150, label: "Day27" },
                { y: 123, label: "Day28" },
                { y: 190, label: "Day29" },
                { y: 150, label: "Day30" },
            ]
        }]
    }
    const options2 = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", //"light1", "dark1", "dark2"
        title: {
            text: ""
        },
        axisY: {
            includeZero: true
        },
        data: [{
            type: "column", //change type to bar, line, area, pie, etc
            //indexLabel: "{y}", //Shows y value on all Data Points
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: [
                { x: 10, y: 71, indexLabel: "IphoneX" },
                { x: 20, y: 55, indexLabel: "Oppo Neo2"  },
                { x: 30, y: 50, indexLabel: "SamSung Galaxy S8"  },
                { x: 40, y: 65, indexLabel: "B??n ??n"  },
                { x: 50, y: 71, indexLabel: "Gh??? ng???i"  },
                { x: 60, y: 68, indexLabel: "B??n Th??ng Minh"  },
                { x: 70, y: 38, indexLabel: "Tivi"  },
                { x: 80, y: 92, indexLabel: "Gi?? ?????" },
                { x: 90, y: 54, indexLabel: "T??? l???nh"  },
                { x: 100, y: 60, indexLabel: "M??y Gi???t"  },
                { x: 110, y: 21, indexLabel: "Laptop"  },
                { x: 120, y: 49, indexLabel: "M??n h??nh"  },
                { x: 130, y: 36, indexLabel: "K???"  }
            ]
        }]
    }

    return (
        <div className='homepage'>
            <divs className="row">
                <Title title='B???ng ??i???u khi???n'></Title>
            </divs>
            <div className="row">
                <div className="col-md-12 col-lg-6">
                    <div className="row">
                        <div className="col-md-6">
                            <Link to={'/staff'}>
                                <div className="widget-small primary coloured-icon"><i className='icon bx bxs-user-account fa-3x'></i>
                                    <div className="info">

                                        <h4>T???ng Nh??n vi??n</h4>
                                        <p><b>{staff} Nh??n Vi??n</b></p>
                                        <p className="info-tong">T???ng s??? nh??n vi??n ???????c qu???n l??.</p>

                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Link to={'/product'}>
                                <div className="widget-small info coloured-icon"><i className='icon bx bxs-data fa-3x'></i>
                                    <div className="info">
                                        <h4>T???ng s???n ph???m</h4>
                                        <p><b>{totalProducts} s???n ph???m</b></p>
                                        <p className="info-tong">T???ng s??? s???n ph???m ???????c qu???n l??.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Link to={'/order'}>
                                <div className="widget-small warning coloured-icon"><i className='icon bx bxs-shopping-bags fa-3x'></i>
                                    <div className="info">
                                        <h4>T???ng ????n h??ng</h4>
                                        <p><b>{totalOrders} ????n h??ng</b></p>
                                        <p className="info-tong">T???ng s??? h??a ????n b??n h??ng trong th??ng.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Link to={'/product'}>
                                <div className="widget-small danger coloured-icon"><i className='icon bx bxs-error-alt fa-3x'></i>
                                    <div className="info">
                                        <h4>S???p h???t h??ng</h4>
                                        <p><b>{count} s???n ph???m</b></p>
                                        <p className="info-tong">S??? s???n ph???m c???nh b??o h???t c???n nh???p th??m.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-12">
                            <div className="tile">
                                <h3 className="tile-title">T??nh tr???ng ????n h??ng</h3>
                                <div>
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>ID ????n h??ng</th>
                                                <th>T??n kh??ch h??ng</th>
                                                <th>T???ng ti???n</th>
                                                <th>Tr???ng th??i</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {statusOrder.map(order => (
                                                <tr key={order.id}>
                                                    <td>{order.id}</td>
                                                    <td>{order.customer}</td>
                                                    <td>{order.total}</td>
                                                    <td>{order.status}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 col-lg-6">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tile">
                                <h3 className="tile-title">Th???ng k?? S???n ph???m ?????u v??o</h3>
                                <CanvasJSChart options={options2} 	/* onRef={ref => this.chart = ref} */ />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="tile">
                                <h3 className="tile-title">Th???ng k?? doanh thu</h3>
                                <CanvasJSChart options={options} 	/* onRef={ref => this.chart = ref} */ />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        //* end content 

    )
}