# SSG,SSR,CSR and ISR

- `hydration`: là quá trình attach file js vào HTML.
  - `Pre-rendering` với Nextjs
    1. Render sẵn HTML ở phía server. Chưa có gắn `event`, nhưng trang vẫn được load.
    2. Load thêm js
    3. Thực hiện quá trình hydration để attach event vào HTML.
  - `No Pre-rendering` trong Reactjs
    1. App không rendered. Chỉ có thẻ div `root`
    2. JS load lên
    3. Sau có mới load DOM lên. Attach thêm div `app` vào trong bên trong `root`
    4. Khi disable js thì trang không được load ra mà chỉ load ra được thẻ div `root`
- **SSG**: Static Site Generation `Pre-rendering`
  - Trước khi deploy thì chạy 1 lệnh build gen ra mớ static HTML. User nào cần request lên thì trả về HTML cho nó.
  - Đây là ở bước `build time` khi chạy câu lệnh `yarn build`
- **SSR**: Server Site Rendering `Pre-rendering`
  - Mỗi lần User gửi request lên
  - Xử lý dữ liệu
  - Tạo file HTML
  - Gửi cho user
  => Server làm việc rất cực
- **CSR**: Client Side Rendering
  - Static Generation without Data + Fetch Data on the Client-Side
  - Tạo ra những file makup sẵn. Đi fetch dữ liệu và hiển thị những dữ liệu động đó lên.
- **ISR**: Intermental Static Regeneration.
- Note:
  - Mỗi trang có thể dùng 1 loại bất kỳ rerendering khác nhau.