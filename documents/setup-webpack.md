# Cấu hình webpack cơ bản và cách dùng file loader

- Module đóng gói mã nguồn
- Dùng file-loader để load ảnh theo dạng module import
- Cách tạo
  - Tạo file next.config.js
  - Import thư viện file-loader `yarn add --dev url-loader`
  - Push cấu hình vào next.config.js
     ```
    webpack: (config, options) => {
    config.modile.rules.push(
        {
            test: /\.(png|jpg|gif)$/i,
            use: [
            {
                loader: 'url-loader',
                options: {
                limit: 8192,
                },
            },
            ],
        },
        )
  }
    ```
    - 