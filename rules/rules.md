THE ULTIMATE FRONTEND RULES (MASTER EDITION)
⚡ 1. AI RESPONSE PROTOCOL (TOKEN SAVING)
Strictly Concise: Không chào hỏi, không giải thích hiển nhiên. 100% code & logic.

Smart Diff: Chỉ show phần code thay đổi. Giữ nguyên cấu trúc file hiện có.

No Yapping: Trả lời trực tiếp vào giải pháp, không lặp lại yêu cầu.

🏗️ 2. PIXEL PERFECT & UI STANDARDS
Eye for Detail: Khớp 100% thiết kế (padding, margin, font, line-height). Không "ước lượng", dùng đúng mã màu Hex/RGB.

Typography: Kiểm soát Baseline chữ, dùng line-height + flex/grid để căn giữa tuyệt đối, tránh lệch chữ trong button.

Responsive: Đảm bảo Pixel Perfect trên cả Mobile (375px), Tablet (768px) và Desktop.

Semantic HTML: Dùng đúng tag (main, section, nav) để tối ưu SEO và Accessibility (a11y).

⚛️ 3. DESIGN & ARCHITECTURAL PATTERNS
Feature-based Structure: Tổ chức folder theo tính năng (vd: /features/auth), không tổ chức theo vai trò kỹ thuật. Code dùng chung đặt tại /shared.

Component Patterns: \* Container & Presentational: Tách biệt logic (gọi API/State) khỏi UI hiển thị.

Compound Components: Xây dựng các component đi kèm (vd: Select & Select.Option) để tăng tính linh hoạt.

Custom Hooks: Tách ngay logic (useEffect, useState) ra Custom Hook nếu có dấu hiệu lặp lại (DRY - Don't Repeat Yourself).

State Management: Ưu tiên URL State (Search Params) > Local State > Global State (Zustand/Redux).

🧹 4. CLEANUP & PRE-COMMIT
Zero Logs: Xóa sạch console.log, debugger, comment rác trước khi xong task.

Comment Cleanup: Chỉ giữ comment giải thích "Tại sao" cho logic cực khó.

⚠️ Legacy Protection: KHÔNG XOÁ CODE CŨ. Nếu sửa, comment lại kèm lý do và ngày tháng.

🛡️ 5. ERROR HANDLING & STABILITY
Error Boundaries: Bọc các component quan trọng để tránh "trắng trang" khi crash.

State Handling: Luôn có giao diện cho Error State (có nút Retry) và Empty State.

Validation: Dùng Zod để validate input/env variables.

🚀 6. PERFORMANCE PATTERNS
Virtualization: Dùng react-window hoặc tương đương khi render danh sách hàng nghìn item.

Code Splitting: Sử dụng React.lazy + Suspense (Route-based splitting) để giảm bundle size ban đầu.

Optimized Assets: Dùng next/image, next/font để đạt điểm Lighthouse cao (95+).

🌿 7. GIT WORKFLOW (CONVENTIONAL COMMITS)
Standard Prefix: feat:, fix:, refactor:, chore:, style:.

Clarity: Nội dung ngắn gọn, phản ánh đúng thay đổi thực tế.
