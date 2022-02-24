# SSG getStaticProps with typescript

- getStaticProps
- Marketing pages
- Blog posts
- E-Commerce product listuings
- Help and document
- Cách hoạt động:
  - Cố gắng build ra file html khi chạy câu lệnh build.
  - Khi host lên server đã có những file html rồi
  - Khi user requet chỉ cần gửi html cho user

- Các loại:
  - Static HTML Generation
  - Static HTML + JSON Data
  - Static HTML + JSON Data + Dynamic Routes

- Nhận biết
  - Content => getStaticProps
  - Path => getStaicPaths

- Note:
  - Khi dùng SSG thì k dùng được SSR
  - Nên huống SSG
  - Dữ liệu được fetch khi build time và build về html luôn. Ở môi trường prod chỉ chạy 1 lần hàm `getStaticProps`. Còn dev thì request lần nào sẽ chạy lần đó.
  - Dữ liệu chỉ được fetch lần đầu trong quá trình build time. Dữ liệU có thay đổi cũng không reload lại được. 
  - Request lần đầu tiên sẽ lấy về html, lần từ lần sau chỉ lấy thêm file json.
  - Để bên phía client có thể lấy ra dữ liệu từ phía server cần pass data vào `NEXT_DATA`
  - Nên map lại dữ liệu khi trả về client bớt nặng.
  - ========================================
  - `getStaticPaths`
    - path: mảng object có bao nhiêu item gọi hàm `getStaticPaths` bấy nhiêu lần ==> required
    - fallback:false //or true or 'blocking' => false trả về notfound. ==> required
    - 
