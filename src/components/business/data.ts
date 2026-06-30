export interface BusinessBenefit {
  icon: string;
  title: string;
  body: string;
}

export interface BusinessScenarioRow {
  situation: string;
  sendFirst: string;
  vietLicenseResponse: string;
  linkLabel: string;
  linkHref: string;
}

export interface BusinessDeadlineRow {
  alert: string;
  whatToSay: string;
  source: string;
}

export const businessBenefits: BusinessBenefit[] = [
  {
    icon: "sl",
    title: "Chiết khấu số lượng",
    body: "Đơn mua nhiều được báo giá theo số lượng máy, người dùng và nhóm sản phẩm.",
  },
  {
    icon: "bg",
    title: "Báo giá riêng",
    body: "Gửi phương án và báo giá minh bạch theo nhu cầu thực tế của doanh nghiệp.",
  },
  {
    icon: "vat",
    title: "Xuất VAT đầy đủ",
    body: "Hóa đơn VAT phục vụ chứng từ kế toán, hồ sơ mua sắm và nghiệm thu nội bộ.",
  },
  {
    icon: "cs",
    title: "Hỗ trợ sau mua",
    body: "Đồng hành kích hoạt, xử lý sự cố và tư vấn mở rộng khi cần thêm thiết bị.",
  },
];

export const businessScenarios: BusinessScenarioRow[] = [
  {
    situation: "Mua Windows/Office có VAT cho công ty ở TP.HCM, Đồng Nai, Tây Ninh",
    sendFirst:
      "Số máy, Windows Home/Pro hoặc Office đang dùng, hình thức muốn nhận, tên đơn vị, MST và email nhận hóa đơn.",
    vietLicenseResponse:
      "Tư vấn đúng phiên bản, xác nhận giá tham chiếu/tình trạng hàng, hướng kích hoạt và hỗ trợ hóa đơn VAT điện tử khi thông tin hợp lệ.",
    linkLabel: "Xem danh mục Windows",
    linkHref: "/windows",
  },
  {
    situation:
      "Công ty ở TP.HCM, Đồng Nai, Bình Dương còn máy Windows 10 chưa rõ có lên Windows 11 chính thức được không",
    sendFirst:
      "Danh sách máy, CPU/RAM/dung lượng ổ đĩa nếu biết, ảnh About Windows hoặc kết quả PC Health Check, máy nào đang chạy Windows 10 22H2 và máy nào quan trọng chưa thể dừng.",
    vietLicenseResponse:
      "Phân nhóm máy đủ điều kiện lên Windows 11, máy có thể cần ESU tạm thời và máy nên thay thế; tránh mua license hoặc phần cứng theo cảm tính khi chưa kiểm tra điều kiện chính thức.",
    linkLabel: "Kiểm tra điều kiện Windows 11",
    linkHref: "/kiem-tra-rui-ro-ban-quyen-windows",
  },
  {
    situation:
      "Chọn Microsoft 365 Business cho SME ở Cần Thơ, Vĩnh Long, Đồng Tháp, An Giang",
    sendFirst:
      "Số user, tên miền email nếu có, ai cần desktop app, ai chỉ cần web/mobile, yêu cầu quản trị hoặc bảo mật.",
    vietLicenseResponse:
      "Gợi ý Basic, Standard hoặc Premium theo nhu cầu thật; nếu hỏi thêm về Copilot/AI thì tách thành bước tư vấn riêng sau khi chốt gói nền.",
    linkLabel: "So sánh Microsoft 365 Business",
    linkHref: "/so-sanh-gia",
  },
  {
    situation:
      "SME ở TP.HCM, Cần Thơ đang phân vân Office 2021, Office 2024 hay Microsoft 365 có VAT",
    sendFirst:
      "Số máy hoặc số user, Office đang dùng, ai cần desktop app, ai cần email/cloud, thời điểm cần triển khai và thông tin xuất hóa đơn.",
    vietLicenseResponse:
      "Tách nhu cầu mua một lần với subscription, nhắc mốc hỗ trợ của Office 2019/2021, rồi mới đề xuất hướng Office 2024 hoặc Microsoft 365 phù hợp cùng chứng từ VAT.",
    linkLabel: "So sánh Office 2019, 2021, 2024 và M365",
    linkHref: "/so-sanh-gia",
  },
  {
    situation:
      "Rà soát rồi mua thêm cho doanh nghiệp ở Bình Dương, Long An và các tỉnh ĐBSCL",
    sendFirst:
      "Danh sách máy/người dùng, ảnh Activation, chứng từ hiện có, máy nào quan trọng trước và nhu cầu VAT hoặc bàn giao nội bộ.",
    vietLicenseResponse:
      "Lên hướng chuẩn hóa từ xa, ưu tiên nhóm máy rủi ro cao, rồi mới đề xuất license phù hợp cùng bộ thông tin bàn giao sau mua.",
    linkLabel: "Xem checklist audit",
    linkHref: "/doanh-nghiep",
  },
];

export const businessDeadlines: BusinessDeadlineRow[] = [
  {
    alert: "Windows 10 transition and Microsoft 365 Apps",
    whatToSay:
      "Windows 10 ended support on 14/10/2025. Before buying ESU or replacement devices, first check whether each PC can meet the official Windows 11 baseline: a compatible 64-bit processor or SoC, 4 GB RAM, 64 GB storage, UEFI Secure Boot capability, and TPM 2.0. If some devices still cannot move to Windows 11 immediately, treat ESU only as a paid annual transition path for eligible Windows 10 22H2 devices, not a long-term destination.",
    source: "Windows 10 support ended on 14/10/2025 · Windows 11 specifications",
  },
  {
    alert: "Office lifecycle timing",
    whatToSay:
      "Office 2019 already ended support on 14/10/2025. Office LTSC 2021 reaches end of support on 13/10/2026, so buyers who still want a one-time-purchase path should compare Office 2024 with Microsoft 365 before the deadline instead of waiting for a forced refresh.",
    source: "Microsoft Support - Office 2016 and Office 2019 end of support",
  },
  {
    alert: "Microsoft 365 Business and Copilot",
    whatToSay:
      "Business Basic, Standard, and Premium remain the base SME plans. Copilot Chat is included with eligible subscriptions, while Microsoft 365 Copilot/Copilot Business still depends on a qualifying plan or add-on and should be scoped after the base plan is chosen.",
    source: "Microsoft 365 Business plans and pricing",
  },
  {
    alert: "VAT and procurement references",
    whatToSay:
      "For Vietnamese invoice and handover workflows, the public references remain Nghị định 70/2025/NĐ-CP and Thông tư 32/2025/TT-BTC, both effective from 01/06/2025.",
    source: "Nghị định 70/2025/NĐ-CP · Thông tư 32/2025/TT-BTC",
  },
];

export const businessFAQs = [
  {
    q: "Công ty ở TP.HCM muốn mua Windows hoặc Office chính hãng có VAT thì làm thế nào?",
    a: "Việt License hỗ trợ tư vấn online qua Zalo cho doanh nghiệp tại TP.HCM và các tỉnh miền Nam. Khách chỉ cần gửi số lượng máy, phiên bản đang dùng, nhu cầu Windows/Office và thông tin xuất VAT để nhận phương án phù hợp, báo giá riêng và hướng dẫn kích hoạt sau mua.",
  },
  {
    q: "Doanh nghiệp ở Cần Thơ cần tư vấn Microsoft 365 Business Basic, Standard hay Premium thì có được hỗ trợ không?",
    a: "Có. Việt License hỗ trợ tư vấn online cho doanh nghiệp ở Cần Thơ và khu vực Đồng bằng sông Cửu Long. Khách nên gửi số người dùng, nhu cầu email doanh nghiệp, Office desktop, lưu trữ cloud, bảo mật và quản trị thiết bị để được gợi ý Basic, Standard hoặc Premium đúng hơn.",
  },
  {
    q: "SME ở TP.HCM hoặc Cần Thơ đang phân vân Office 2021, Office 2024 hay Microsoft 365 có VAT thì nên hỏi gì trước?",
    a: "Nên nói rõ công ty cần Office mua một lần hay subscription, hiện đang dùng Office phiên bản nào, ai cần desktop app, ai cần email/cloud và thời điểm cần triển khai. Office 2019 đã hết hỗ trợ từ 14/10/2025, Office LTSC 2021 sẽ hết hỗ trợ ngày 13/10/2026, nên nếu vẫn muốn lộ trình mua một lần thì nên so thêm Office 2024; còn nếu cần email doanh nghiệp, cloud và cập nhật liên tục thì nên so Microsoft 365 trước khi xin báo giá VAT.",
  },
  {
    q: "Việt License có chi nhánh tại Bình Dương hay Long An không?",
    a: "Trang này chỉ mô tả phạm vi phục vụ. Việt License hỗ trợ khách ở Bình Dương, Long An và các tỉnh phía Nam qua Zalo, hotline và kênh online toàn quốc; không dùng nội dung này để khẳng định có văn phòng, chi nhánh hay đội ngũ tại địa phương nếu website chưa công bố.",
  },
  {
    q: "Doanh nghiệp ở Đồng Nai, Tây Ninh hoặc Vĩnh Long cần chuẩn bị gì để nhận báo giá và chứng từ nhanh hơn?",
    a: "Nên gửi trước số máy hoặc số user, phiên bản Windows/Office hoặc nhu cầu Microsoft 365, ảnh Activation nếu đang rà soát, cùng tên đơn vị, mã số thuế và email nhận hóa đơn. Cách làm này giúp Việt License tư vấn đúng phiên bản, chuẩn bị thông tin bàn giao và hỗ trợ hóa đơn VAT điện tử theo yêu cầu.",
  },
  {
    q: "Nếu công ty ở TP.HCM hoặc Cần Thơ hỏi thêm về Copilot cho Word, Excel, Outlook thì sao?",
    a: "Không nên mặc định Copilot đã nằm sẵn trong gói đang niêm yết. Trước tiên cần chốt gói nền Microsoft 365 Business phù hợp, sau đó mới kiểm tra nhu cầu AI riêng và điều kiện cấp phép Copilot theo tài liệu Microsoft.",
  },
];
