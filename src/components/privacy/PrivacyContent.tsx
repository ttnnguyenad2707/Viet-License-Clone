export function PrivacyContent() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <header className="mb-12">
        <p className="eyebrow mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Privacy policy
        </p>
        <h1 className="display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Chính sách bảo mật
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          Trang này giải thích cách Việt License thu thập và xử lý dữ liệu khi khách xem catalog, tìm sản phẩm, nhắn tư vấn, yêu cầu báo giá, hỗ trợ kích hoạt hoặc cung cấp thông tin VAT.
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span>Cập nhật: 26/06/2026</span>
          <span>Đơn vị vận hành: OLIU GROUP COMPANY LIMITED</span>
        </div>
        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm text-amber-800">
            <strong>Lưu ý phạm vi.</strong> Nội dung này là chính sách công khai của website, không phải ý kiến tư vấn pháp lý riêng cho từng vụ việc. Khi quy định pháp luật hoặc quy trình vận hành thay đổi, Việt License có thể cập nhật trang này.
          </p>
        </div>
      </header>

      <div className="prose max-w-none space-y-12">
        {/* Căn cứ */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground">Căn cứ và phạm vi áp dụng</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Chính sách được xây dựng theo hướng bảo thủ, phù hợp với bối cảnh Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15, Nghị định 356/2025/NĐ-CP hướng dẫn thi hành, Luật Bảo vệ quyền lợi người tiêu dùng số 19/2023/QH15 và các quy định liên quan đến website thương mại điện tử tại Việt Nam.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Chính sách áp dụng cho website https://vietlicense.org, các biểu mẫu/tương tác trên website và các yêu cầu khách chủ động gửi cho Việt License qua Zalo, Facebook, Messenger, email hoặc hotline.
          </p>
        </section>

        {/* Dữ liệu thu thập */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground">Dữ liệu có thể được thu thập</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/60">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Ngữ cảnh
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Dữ liệu
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Mục đích chính
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-4 py-4 font-semibold text-foreground">Liên hệ tư vấn</td>
                  <td className="px-4 py-4 text-muted-foreground">
                    Tên, số điện thoại, email, nội dung nhu cầu, thông tin doanh nghiệp nếu khách chủ động gửi.
                  </td>
                  <td className="px-4 py-4 text-muted-foreground">
                    Tư vấn đúng sản phẩm, báo giá, hỗ trợ sau mua và xử lý yêu cầu VAT.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-4 font-semibold text-foreground">Báo giá và chứng từ</td>
                  <td className="px-4 py-4 text-muted-foreground">
                    Tên đơn vị, mã số thuế, email nhận hóa đơn, địa chỉ hoặc thông tin xuất hóa đơn do khách cung cấp.
                  </td>
                  <td className="px-4 py-4 text-muted-foreground">
                    Chuẩn bị báo giá, chứng từ bàn giao, hóa đơn VAT điện tử theo yêu cầu hợp lệ.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-4 font-semibold text-foreground">Tương tác website</td>
                  <td className="px-4 py-4 text-muted-foreground">
                    Trang đã xem, sản phẩm đã bấm, lượt tìm kiếm, lượt bấm Zalo/Facebook/hotline và dữ liệu đo lường tương tự.
                  </td>
                  <td className="px-4 py-4 text-muted-foreground">
                    Đo hiệu quả nội dung, cải thiện danh mục, phát hiện lỗi và ưu tiên hỗ trợ khách hàng.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-4 font-semibold text-foreground">Kênh bên thứ ba</td>
                  <td className="px-4 py-4 text-muted-foreground">
                    Dữ liệu phát sinh khi khách dùng Zalo, Facebook, Messenger, Google Analytics hoặc nền tảng tương tự.
                  </td>
                  <td className="px-4 py-4 text-muted-foreground">
                    Duy trì liên hệ, đo lường website và quản trị kênh tư vấn theo chính sách của từng nền tảng.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Cách sử dụng */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground">Cách Việt License sử dụng dữ liệu</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <span className="check-icon mt-0.5 h-4 w-4 shrink-0" />
              <span>Tư vấn đúng phiên bản Windows, Office, Microsoft 365 hoặc sản phẩm Microsoft liên quan.</span>
            </li>
            <li className="flex gap-3">
              <span className="check-icon mt-0.5 h-4 w-4 shrink-0" />
              <span>Chuẩn bị báo giá, xác nhận tình trạng hàng, thông tin bàn giao, hướng dẫn cài đặt và hỗ trợ kích hoạt.</span>
            </li>
            <li className="flex gap-3">
              <span className="check-icon mt-0.5 h-4 w-4 shrink-0" />
              <span>Phối hợp xuất hóa đơn VAT điện tử khi khách cung cấp thông tin hợp lệ và đơn hàng đáp ứng điều kiện xuất hóa đơn.</span>
            </li>
            <li className="flex gap-3">
              <span className="check-icon mt-0.5 h-4 w-4 shrink-0" />
              <span>Cải thiện website thông qua Google Analytics 4 và các sự kiện đo lường như xem sản phẩm, tìm kiếm, bấm liên hệ.</span>
            </li>
            <li className="flex gap-3">
              <span className="check-icon mt-0.5 h-4 w-4 shrink-0" />
              <span>Phòng chống lạm dụng, kiểm tra lỗi kỹ thuật, bảo vệ hệ thống và xử lý yêu cầu từ cơ quan có thẩm quyền khi pháp luật yêu cầu.</span>
            </li>
          </ul>
        </section>

        {/* Google Analytics */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground">Google Analytics, tìm kiếm và công cụ kiểm tra rủi ro</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Website sử dụng Google Analytics 4 để đo lượt xem trang và một số tương tác cơ bản. Dữ liệu phân tích giúp Việt License biết nội dung nào hữu ích, sản phẩm nào được quan tâm và lỗi nào cần sửa.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Tính năng tìm kiếm sản phẩm tải danh sách sản phẩm công khai từ website. Công cụ kiểm tra rủi ro Windows hiện chạy trên trình duyệt của khách, không quét máy, không upload file và không gửi câu trả lời về Việt License trừ khi khách chủ động copy kết quả rồi gửi qua Zalo, Facebook, hotline hoặc kênh khác.
          </p>
        </section>

        {/* Chia sẻ bên thứ ba */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground">Chia sẻ dữ liệu với bên thứ ba</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Việt License không bán dữ liệu cá nhân của khách. Dữ liệu có thể được xử lý thông qua các nền tảng cần thiết để vận hành website, tư vấn và hỗ trợ đơn hàng, ví dụ Google Analytics, Zalo, Facebook/Messenger, email, nhà cung cấp hạ tầng website hoặc đơn vị liên quan đến hóa đơn/chứng từ khi có yêu cầu hợp lệ.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Khi khách chuyển sang nền tảng bên thứ ba, việc xử lý dữ liệu trên nền tảng đó còn chịu chính sách riêng của nền tảng tương ứng. Khách nên kiểm tra chính sách của Zalo, Facebook, Google hoặc nhà cung cấp dịch vụ liên quan.
          </p>
        </section>

        {/* Lưu trữ và bảo vệ */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground">Lưu trữ và bảo vệ dữ liệu</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Việt License chỉ lưu dữ liệu trong thời gian cần thiết cho mục đích tư vấn, chốt đơn, hỗ trợ sau mua, đối chiếu chứng từ, nghĩa vụ kế toán/thuế hoặc xử lý tranh chấp. Thời gian lưu cụ thể có thể khác nhau theo từng loại dữ liệu và quy định pháp luật áp dụng.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Việt License áp dụng các biện pháp quản trị và kỹ thuật hợp lý trong khả năng vận hành để hạn chế truy cập, sử dụng, tiết lộ, sửa đổi hoặc mất dữ liệu trái phép. Không có hệ thống internet nào an toàn tuyệt đối, vì vậy khách không nên gửi mật khẩu, mã xác thực, dữ liệu nhạy cảm hoặc file nội bộ không cần thiết qua kênh tư vấn.
          </p>
        </section>

        {/* Quyền khách hàng */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground">Quyền của khách hàng</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <span className="check-icon mt-0.5 h-4 w-4 shrink-0" />
              <span>Yêu cầu kiểm tra, cập nhật hoặc điều chỉnh thông tin cá nhân đã cung cấp.</span>
            </li>
            <li className="flex gap-3">
              <span className="check-icon mt-0.5 h-4 w-4 shrink-0" />
              <span>Yêu cầu rút lại hoặc hạn chế việc xử lý dữ liệu trong phạm vi pháp luật cho phép.</span>
            </li>
            <li className="flex gap-3">
              <span className="check-icon mt-0.5 h-4 w-4 shrink-0" />
              <span>Yêu cầu xóa dữ liệu không còn cần thiết cho mục đích tư vấn, hỗ trợ, chứng từ hoặc nghĩa vụ lưu trữ.</span>
            </li>
            <li className="flex gap-3">
              <span className="check-icon mt-0.5 h-4 w-4 shrink-0" />
              <span>Gửi khiếu nại hoặc câu hỏi về cách Việt License xử lý dữ liệu cá nhân.</span>
            </li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Để gửi yêu cầu, liên hệ qua email privacy@vietlicense.org, hotline 0382 520 281 hoặc Zalo Thành - Việt License. Việt License có thể cần xác minh thông tin trước khi xử lý yêu cầu để tránh tiết lộ dữ liệu cho sai người.
          </p>
        </section>

        {/* Liên hệ */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground">Liên hệ</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[320px] text-sm">
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-4 py-3 font-semibold text-foreground">Thương hiệu</td>
                  <td className="px-4 py-3 text-muted-foreground">Việt License</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3 font-semibold text-foreground">Đơn vị vận hành</td>
                  <td className="px-4 py-3 text-muted-foreground">OLIU GROUP COMPANY LIMITED</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3 font-semibold text-foreground">Email</td>
                  <td className="px-4 py-3 text-muted-foreground">privacy@vietlicense.org</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3 font-semibold text-foreground">Hotline/Zalo</td>
                  <td className="px-4 py-3 text-muted-foreground">0382 520 281</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">Website</td>
                  <td className="px-4 py-3 text-muted-foreground">https://vietlicense.org</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
