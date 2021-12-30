# Navigation between pages

- **Full page reload**: Mỗi lần qua 1 trang load lại file HTML mới
- **Client Side Routing**: Chỉ get file js của trang cần tới. Chạy file js để chuyển đổi sang trang mong muốn.
- **Prefetch**
  - Lấy thông tin là các file js có trong viewport. Load trước thông tin các trang. Chỉ tải về, chưa có thực thi
  - Mặc định của thẻ `<Link>` có thuộc tính prefetch mặc định = true.
  - Nếu mạng chậm `slow network` thì việc prefetch sẽ không được bật.
  - Chỉ có ở môi trường production. `yarn build` để chạy môi trường prod
  - `viewport`: là toàn bộ màn hình mà người dùng có thể nhìn thấy ngay tại màn hình. không tính scroll màn hình xuống.
