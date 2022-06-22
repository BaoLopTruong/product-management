import '../../main.css'
import { CanvasJSChart } from 'canvasjs-react-charts'
// import Clock from './navbar/Clock'


export default function HomePage() {

    const options = {
        animationEnabled: true,
        title: {
            text: "Number of New Customers"
        },
        axisY: {
            title: "Number of Customers"
        },
        toolTip: {
            shared: true
        },
        data: [{
            type: "spline",
            name: "2016",
            showInLegend: true,
            dataPoints: [
                { y: 155, label: "Jan" },
                { y: 150, label: "Feb" },
                { y: 152, label: "Mar" },
                { y: 148, label: "Apr" },
                { y: 142, label: "May" },
                { y: 150, label: "Jun" },
                { y: 146, label: "Jul" },
                { y: 149, label: "Aug" },
                { y: 153, label: "Sept" },
                { y: 158, label: "Oct" },
                { y: 154, label: "Nov" },
                { y: 150, label: "Dec" }
            ]
        },
        {
            type: "spline",
            name: "2017",
            showInLegend: true,
            dataPoints: [
                { y: 172, label: "Jan" },
                { y: 173, label: "Feb" },
                { y: 175, label: "Mar" },
                { y: 172, label: "Apr" },
                { y: 162, label: "May" },
                { y: 165, label: "Jun" },
                { y: 172, label: "Jul" },
                { y: 168, label: "Aug" },
                { y: 175, label: "Sept" },
                { y: 170, label: "Oct" },
                { y: 165, label: "Nov" },
                { y: 169, label: "Dec" }
            ]
        }]
    }
    const options2 = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", //"light1", "dark1", "dark2"
        title: {
            text: "Simple Column Chart with Index Labels"
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
                { x: 10, y: 71 },
                { x: 20, y: 55 },
                { x: 30, y: 50 },
                { x: 40, y: 65 },
                { x: 50, y: 71 },
                { x: 60, y: 68 },
                { x: 70, y: 38 },
                { x: 80, y: 92, indexLabel: "Highest" },
                { x: 90, y: 54 },
                { x: 100, y: 60 },
                { x: 110, y: 21 },
                { x: 120, y: 49 },
                { x: 130, y: 36 }
            ]
        }]
    }

    return (
        <div className='homepage'>
         {/* <Clock name={'Bảng điều khiển'}></Clock> */}
            <div className="row">
                {/* <!--Left--> */}
                <div className="col-md-12 col-lg-6">
                    <div className="row">
                        {/* <!-- col-6 --> */}
                        <div className="col-md-6">
                            <div className="widget-small primary coloured-icon"><i className='icon bx bxs-user-account fa-3x'></i>
                                <div className="info">
                                    <h4>Tổng khách hàng</h4>
                                    <p><b>56 khách hàng</b></p>
                                    <p className="info-tong">Tổng số khách hàng được quản lý.</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- col-6 --> */}
                        <div className="col-md-6">
                            <div className="widget-small info coloured-icon"><i className='icon bx bxs-data fa-3x'></i>
                                <div className="info">
                                    <h4>Tổng sản phẩm</h4>
                                    <p><b>1850 sản phẩm</b></p>
                                    <p className="info-tong">Tổng số sản phẩm được quản lý.</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- col-6 --> */}
                        <div className="col-md-6">
                            <div className="widget-small warning coloured-icon"><i className='icon bx bxs-shopping-bags fa-3x'></i>
                                <div className="info">
                                    <h4>Tổng đơn hàng</h4>
                                    <p><b>247 đơn hàng</b></p>
                                    <p className="info-tong">Tổng số hóa đơn bán hàng trong tháng.</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- col-6 --> */}
                        <div className="col-md-6">
                            <div className="widget-small danger coloured-icon"><i className='icon bx bxs-error-alt fa-3x'></i>
                                <div className="info">
                                    <h4>Sắp hết hàng</h4>
                                    <p><b>4 sản phẩm</b></p>
                                    <p className="info-tong">Số sản phẩm cảnh báo hết cần nhập thêm.</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- col-12 --> */}
                        <div className="col-md-12">
                            <div className="tile">
                                <h3 className="tile-title">Tình trạng đơn hàng</h3>
                                <div>
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>ID đơn hàng</th>
                                                <th>Tên khách hàng</th>
                                                <th>Tổng tiền</th>
                                                <th>Trạng thái</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>AL3947</td>
                                                <td>Phạm Thị Ngọc</td>
                                                <td>
                                                    19.770.000 đ
                                                </td>
                                                <td><span className="badge bg-info">Chờ xử lý</span></td>
                                            </tr>
                                            <tr>
                                                <td>ER3835</td>
                                                <td>Nguyễn Thị Mỹ Yến</td>
                                                <td>
                                                    16.770.000 đ
                                                </td>
                                                <td><span className="badge bg-warning">Đang vận chuyển</span></td>
                                            </tr>
                                            <tr>
                                                <td>MD0837</td>
                                                <td>Triệu Thanh Phú</td>
                                                <td>
                                                    9.400.000 đ
                                                </td>
                                                <td><span className="badge bg-success">Đã hoàn thành</span></td>
                                            </tr>
                                            <tr>
                                                <td>MT9835</td>
                                                <td>Đặng Hoàng Phúc	</td>
                                                <td>
                                                    40.650.000 đ
                                                </td>
                                                <td><span className="badge bg-danger">Đã hủy	</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* <!-- / div trống--> */}
                            </div>
                        </div>
                        {/* <!-- / col-12 -->
             <!-- col-12 --> */}
                        <div className="col-md-12">
                            <div className="tile">
                                <h3 className="tile-title">Khách hàng mới</h3>
                                <div>
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Tên khách hàng</th>
                                                <th>Ngày sinh</th>
                                                <th>Số điện thoại</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>#183</td>
                                                <td>Hột vịt muối</td>
                                                <td>21/7/1992</td>
                                                <td><span className="tag tag-success">0921387221</span></td>
                                            </tr>
                                            <tr>
                                                <td>#219</td>
                                                <td>Bánh tráng trộn</td>
                                                <td>30/4/1975</td>
                                                <td><span className="tag tag-warning">0912376352</span></td>
                                            </tr>
                                            <tr>
                                                <td>#627</td>
                                                <td>Cút rang bơ</td>
                                                <td>12/3/1999</td>
                                                <td><span className="tag tag-primary">01287326654</span></td>
                                            </tr>
                                            <tr>
                                                <td>#175</td>
                                                <td>Hủ tiếu nam vang</td>
                                                <td>4/12/20000</td>
                                                <td><span className="tag tag-danger">0912376763</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                        {/* <!-- / col-12 --> */}
                    </div>
                </div>
                {/* <!--END left-->
      <!--Right--> */}
                <div className="col-md-12 col-lg-6">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tile">
                                <h3 className="tile-title">Dữ liệu 6 tháng đầu vào</h3>
                                <CanvasJSChart options={options} 	/* onRef={ref => this.chart = ref} */ />
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="tile">
                                <h3 className="tile-title">Thống kê 6 tháng doanh thu</h3>
                                <CanvasJSChart options={options2} 	/* onRef={ref => this.chart = ref} */ />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        //* end content 

    )
}