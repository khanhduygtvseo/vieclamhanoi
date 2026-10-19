# CareerViet Web 2.0 — bản dành cho GitHub Pages

Đây là bộ mã nguồn tĩnh của website CareerViet Web 2.0 v8. Website sử dụng HTML, CSS và JavaScript thuần, không cần cài đặt thư viện hoặc chạy bước build.

## Tải mã nguồn lên GitHub

### Cách khuyên dùng: GitHub Desktop hoặc Git

Chọn toàn bộ thư mục này làm repository cục bộ rồi xuất bản lên GitHub. Nếu dùng Git trong Terminal:

```powershell
cd "C:\Codex\careerviet-github-v8"
git init
git add .
git commit -m "Initial CareerViet website"
git branch -M main
git remote add origin https://github.com/TEN-TAI-KHOAN/TEN-REPOSITORY.git
git push -u origin main
```

Thay `TEN-TAI-KHOAN` và `TEN-REPOSITORY` bằng thông tin repository của bạn.

### Tải bằng trình duyệt

1. Tạo một repository mới trên GitHub.
2. Mở repository và chọn **Add file → Upload files**.
3. Kéo **toàn bộ nội dung bên trong thư mục `careerviet-github-v8`** vào trang tải lên. File `index.html` phải nằm ở cấp gốc của repository.
4. Nếu GitHub giới hạn số file trong một lần tải, chia thành nhiều lượt nhưng vẫn giữ nguyên cấu trúc `assets`, `cam-nang` và `viec-lam`.
5. Chọn **Commit changes**.

## Bật GitHub Pages

1. Mở **Settings → Pages** trong repository.
2. Tại **Build and deployment**, chọn **Deploy from a branch**.
3. Chọn nhánh **main**, thư mục **/(root)** rồi nhấn **Save**.
4. Chờ GitHub hoàn thành triển khai và mở địa chỉ được hiển thị trong phần Pages.

File `.nojekyll` được giữ ở thư mục gốc để GitHub Pages phục vụ nguyên trạng toàn bộ tài nguyên tĩnh.

## Cấu trúc chính

- `index.html`: trang chủ.
- `viec-lam/`: các trang việc làm theo khu vực và ngành nghề.
- `cam-nang/`: trang danh mục và chi tiết bài viết.
- `assets/`: CSS, JavaScript, hình ảnh và logo.
- `404.html`: trang thông báo không tìm thấy nội dung.

## Xem thử trên máy

Có thể mở trực tiếp `index.html` hoặc chạy một máy chủ tĩnh trong thư mục này. Không thay đổi cấu trúc thư mục để tránh làm hỏng đường dẫn ảnh và tài nguyên.
