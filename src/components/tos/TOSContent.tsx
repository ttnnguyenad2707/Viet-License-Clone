export function TOSContent() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <header className="mb-12">
        <p className="eyebrow mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Terms of service
        </p>
        <h1 className="display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Điều khoản sử dụng
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          Điều khoản này áp dụng khi khách truy cập website Việt License, xem thông tin sản phẩm, liên hệ tư vấn, yêu cầu báo giá hoặc chốt đơn qua Zalo, Facebook, Messenger, email hoặc hotline.
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span>Cập nhật: 26/06/2026</span>
          <span>Đơn vị vận hành: OLIU GROUP COMPANY LIMITED</span>
        </div>
        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm text-amber-800">
            <strong>Lưu ý phạm vi.</strong> Nội dung này là điều khoản sử dụng website và quy trình giao dịch cơ bản, không thay thế hợp đồng, báo giá, hóa đơn, chính sách Microsoft hoặc tư vấn pháp lý riêng cho từng trường hợp.
          </p>
        </div>
      </header>

      <div className="prose max-w-none space-y-12">
        {/* Căn cứ */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground">Căn cứ và vai trò của website</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Website https://vietlicense.org được vận hành bởi OLIU GROUP COMPANY LIMITED dưới thương hiệu Việt License. Nội dung trên website được xây dựng theo hướng minh bạch thông tin sản phẩm, tư vấn mua license Microsoft và phù hợp với bối cảnh Luật Bảo vệ quyền lợi người tiêu dùng số 19/2023/QH15, Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15, Nghị định 356/2025/NĐ-CP và Luật Thương mại điện tử số 122/2025/QH15 có hiệu lực từ 01/07/2026.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Website là catalog và kênh tư vấn. Khách không thanh toán trực tiếp trên website; đơn hàng được xác nhận qua Zalo, Facebook, Messenger, email hoặc hotline sau khi hai bên thống nhất thông tin cụ thể.
          </p>
        </section>

        {/* Thông tin sản phẩm */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground">Thông tin sản phẩm, giá và xác nhận đơn hàng</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <span className="check-icon mt-0.5 h-4 w-4 shrink-0" />
              <span>Website là nơi công bố thông tin sản phẩm, giá tham khảo và hướng dẫn mua license Microsoft; website không phải cổng thanh toán online tự động.</span>
            </li>
            <li className="flex gap-3">
              <span className="check-icon mt-0.5 h-4 w-4 shrink-0" />
              <span>Đơn hàng chỉ được xem là xác nhận khi Việt License và khách đã thống nhất sản phẩm, số lượng, giá cuối, hình thức bàn giao, thông tin VAT nếu có và phương thức thanh toán qua kênh tư vấn.</span>
            </li>
            <li className="flex gap-3">
              <span className="check-icon mt-0.5 h-4 w-4 shrink-0" />
              <span>Giá, tình trạng hàng và chương trình hỗ trợ có thể thay đổi theo thời điểm, số lượng, SKU, điều kiện Microsoft hoặc chính sách của nhà cung cấp.</span>
            </li>
            <li className="flex gap-3">
              <span className="check-icon mt-0.5 h-4 w-4 shrink-0" />
              <span>Khách cần kiểm tra đúng tên sản phẩm, phiên bản, thời hạn, hình thức license và nhu cầu xuất VAT trước khi thanh toán.</span>
            </li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Nếu có khác biệt giữa thông tin website và báo giá/xác nhận mới nhất qua kênh tư vấn, thông tin được Việt License xác nhận trực tiếp cho đơn hàng tại thời điểm chốt sẽ là căn cứ xử lý đơn đó.
          </p>
        </section>

        {/* Điều kiện license */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground">Điều kiện license Microsoft</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Windows, Office, Microsoft 365 và các sản phẩm Microsoft liên quan chịu sự điều chỉnh của điều khoản cấp phép, vòng đời hỗ trợ, chính sách kích hoạt, tài khoản và điều kiện sử dụng do Microsoft công bố. Việt License tư vấn lựa chọn sản phẩm, bàn giao thông tin và hỗ trợ kích hoạt trong phạm vi sản phẩm cung cấp; không thay thế hoặc sửa đổi điều khoản chính thức của Microsoft.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Khách chịu trách nhiệm cung cấp đúng nhu cầu sử dụng, số lượng thiết bị/người dùng, phiên bản đang dùng, yêu cầu VAT và các ràng buộc nội bộ trước khi chốt đơn. Với doanh nghiệp, người phụ trách IT hoặc kế toán nên kiểm tra lại SKU, chứng từ và hình thức license trước khi thanh toán.
          </p>
        </section>

        {/* Thanh toán, VAT, bàn giao */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground">Thanh toán, hóa đơn VAT và bàn giao</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-4 py-4 font-semibold text-foreground">Thanh toán</td>
                  <td className="px-4 py-4 text-muted-foreground">
                    Thực hiện theo hướng dẫn được Việt License xác nhận riêng cho từng đơn hàng. Khách nên kiểm tra đúng người nhận, nội dung chuyển khoản và tổng tiền trước khi thanh toán.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-4 font-semibold text-foreground">Hóa đơn VAT</td>
                  <td className="px-4 py-4 text-muted-foreground">
                    Việt License hỗ trợ xuất hóa đơn VAT điện tử theo yêu cầu khi khách cung cấp thông tin hợp lệ và đơn hàng đáp ứng điều kiện xuất hóa đơn.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-4 font-semibold text-foreground">Bàn giao</td>
                  <td className="px-4 py-4 text-muted-foreground">
                    Thông tin bàn giao có thể gồm sản phẩm, phiên bản, hình thức license, hướng dẫn tải/cài đặt/kích hoạt và nội dung hỗ trợ liên quan.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-semibold text-foreground">Đối chiếu chứng từ</td>
                  <td className="px-4 py-4 text-muted-foreground">
                    Khách nên lưu báo giá, xác nhận đơn, hóa đơn, thông tin bàn giao và hướng dẫn kích hoạt theo quy trình nội bộ.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Hỗ trợ sau mua */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground">Hỗ trợ sau mua</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <span className="check-icon mt-0.5 h-4 w-4 shrink-0" />
              <span>Hướng dẫn tải bộ cài chính hãng hoặc nguồn cài đặt phù hợp.</span>
            </li>
            <li className="flex gap-3">
              <span className="check-icon mt-0.5 h-4 w-4 shrink-0" />
              <span>Hướng dẫn cài đặt, kích hoạt và kiểm tra tình trạng license trong phạm vi thông tin sản phẩm đã bán.</span>
            </li>
            <li className="flex gap-3">
              <span className="check-icon mt-0.5 h-4 w-4 shrink-0" />
              <span>Hỗ trợ xử lý lỗi kích hoạt hoặc lỗi bàn giao trong khả năng và phạm vi chính sách của từng sản phẩm.</span>
            </li>
            <li className="flex gap-3">
              <span className="check-icon mt-0.5 h-4 w-4 shrink-0" />
              <span>Tư vấn nâng cấp, mua thêm hoặc chuẩn hóa hồ sơ license khi khách có nhu cầu.</span>
            </li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Hỗ trợ sau mua phụ thuộc vào thông tin đơn hàng, trạng thái sản phẩm, điều kiện license, môi trường máy của khách và chính sách liên quan của Microsoft hoặc bên cung cấp dịch vụ. Khách nên không chia sẻ mật khẩu, mã OTP, dữ liệu nội bộ hoặc thông tin nhạy cảm không cần thiết khi nhận hỗ trợ.
          </p>
        </section>

        {/* Hủy đơn */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground">Hủy đơn, đổi sản phẩm và hoàn tiền</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Mọi yêu cầu hủy đơn, đổi sản phẩm hoặc hoàn tiền được xem xét theo từng trường hợp dựa trên thời điểm yêu cầu, trạng thái thanh toán, trạng thái bàn giao, tình trạng kích hoạt/sử dụng, điều kiện của sản phẩm và lỗi nếu có.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Việt License không cam kết hoàn tiền tự động sau khi license/key/sản phẩm đã được bàn giao, kích hoạt hoặc sử dụng, trừ khi hai bên có xác nhận riêng hoặc pháp luật bắt buộc áp dụng trong trường hợp cụ thể. Nếu phát sinh lỗi bàn giao do Việt License, Việt License sẽ ưu tiên kiểm tra, sửa lỗi, cấp lại thông tin phù hợp hoặc đề xuất phương án xử lý hợp lý.
          </p>
        </section>

        {/* Sử dụng đúng mục đích */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground">Sử dụng website đúng mục đích</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Khách không được dùng website để gửi nội dung sai pháp luật, gây quá tải hệ thống, thu thập dữ liệu trái phép, mạo danh người khác, khai thác lỗ hổng hoặc làm ảnh hưởng đến quyền lợi của Việt License, khách hàng khác hoặc bên thứ ba.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Việt License có thể cập nhật, sửa, tạm dừng hoặc gỡ nội dung website khi cần thiết để bảo trì, bảo mật, cập nhật sản phẩm, sửa lỗi hoặc tuân thủ yêu cầu pháp luật.
          </p>
        </section>

        {/* Giới hạn trách nhiệm */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground">Giới hạn trách nhiệm</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Việt License cố gắng giữ thông tin website rõ ràng và cập nhật, nhưng không bảo đảm mọi thông tin luôn không có sai sót, đặc biệt với giá, tồn kho, chính sách Microsoft, vòng đời sản phẩm hoặc điều kiện bên thứ ba có thể thay đổi.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Trong phạm vi pháp luật cho phép, Việt License không chịu trách nhiệm cho thiệt hại gián tiếp, mất dữ liệu, mất lợi nhuận, gián đoạn vận hành hoặc quyết định mua sai do khách cung cấp thiếu/sai thông tin, sử dụng sản phẩm ngoài phạm vi được tư vấn hoặc bỏ qua điều kiện của Microsoft và nhà cung cấp liên quan.
          </p>
        </section>

        {/* Liên hệ */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground">Liên hệ và giải quyết phát sinh</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Khi có câu hỏi, khiếu nại hoặc yêu cầu hỗ trợ, khách nên liên hệ sớm qua email privacy@vietlicense.org, hotline 0382 520 281 hoặc Zalo Thành - Việt License, kèm mã đơn, nội dung trao đổi, ảnh lỗi hoặc chứng từ liên quan nếu có.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Hai bên ưu tiên trao đổi thiện chí để kiểm tra dữ kiện và xử lý theo từng trường hợp. Nếu không giải quyết được bằng trao đổi, tranh chấp sẽ được xử lý theo pháp luật Việt Nam và cơ quan có thẩm quyền.
          </p>
        </section>
      </div>
    </div>
  );
}
