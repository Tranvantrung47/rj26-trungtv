import React from "react";
// import { ROUTES } from "../utils/constants/routes"

function Navigation() {
  return (
//     <div className="card text-center">
//       <div className="card-body">
//         <h5 className="card-title">
//          Hello World
//         </h5>
//         <p className="card-text">
//         Solution Anywhere là trụ sở của tổ chức phát triển phần mềm mã nguồn mở tại Chicago, Hoa Kỳ. 
// Công ty muốn làm cho sự hiện diện của mình trở nên phổ biến trên toàn thế giới bằng cách tạo ra một trang Web sẽ làm nổi bật các hoạt động được thực hiện bởi tổ chức. 
// Tổ chức cũng cung cấp tất cả các phần mềm có sẵn dưới dạng phần mềm miễn phí. 
// Bạn với tư cách là nhà phát triển trang Web cho tổ chức đã được yêu cầu tạo trang Web sau cho tổ chức:
//         </p>
//       </div>
//     </div>
<div style={{marginTop:"20px"}} className="row w-100">
<div className="col-12 col-md-3 mb-3">
    <div className='item p-4'>The Drive</div>
    <div className='item p-4'>The Walk</div>
    <div className='item p-4'>The Return</div>
    <div className='item p-4'>The End</div>
</div>
<div className="col col-md m-3">
    <h1>The Walk</h1>
    <p>
        The walk to the Pulpit Rock will take you approximately two hours,
        give or take an hour depending on the weather conditions and your
        physical shape.
    </p>
    <table>
        <tbody>
            <tr>
                <td className="crossed"></td>
                <td>Đặc điểm</td>
            </tr>
            <tr>
                <td>JavaScript</td>
                <td>JS giúp tăng tính tương tác trên website. Các Script chạy trên các trình duyệt của người
                    dùng thay vì từ phía server và thường được sử dụng thư viện từ bên thứ 3 nên không cần
                    bạn phải code lại từ đầu.</td>
            </tr>
            <tr>
                <td>HTML</td>
                <td> Hypertext Markup Language, đây là ngôn ngữ cơ bản và phổ biến mà bạn cần phải biết khi
                    bắt đầu với công việc lập trình web. Dùng để xây dựng bố cục (layout) chính cho nội dung
                    toàn bộ website.</td>
            </tr>
            <tr>
                <td>CSS</td>
                <td>Cascadding Style Sheets giúp cho lập trình viên xác định style, tạo ra những ý tưởng,
                    màu sắc, background riêng phù hợp với chủ đề của website.</td>
            </tr>
        </tbody>
    </table>
</div>
<div id="div__right" className="col-11 col-md-3 bg-info h-75">
    <div>
        <h1>What?</h1>
        <p>
            The Pulpit Rock is a part of a mountain that looks like a pulpit.
        </p>
    </div>
    <div>
        <h1>Where?</h1>
        <p>The Pulpit Rock is in Norway.</p>
    </div>
    <div>
        <h1>Price?</h1>
        <p>The walk is free!</p>
    </div>
</div>
</div>
  );
}

export default Navigation;
