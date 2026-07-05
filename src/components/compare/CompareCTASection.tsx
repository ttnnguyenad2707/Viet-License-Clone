"use client";

import { useState } from "react";

export function CompareCTASection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="py-12">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="relative overflow-hidden bg-gradient-to-br from-[#0e1014] to-[#1b232c] p-8 lg:p-12">
              <div className="relative z-10">
                <p className="eyebrow mb-4 text-xs font-semibold uppercase tracking-wide text-white/60">
                  Liên hệ tư vấn
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Gửi bảng giá cần đối chiếu
                </h2>
                <p className="mt-4 text-base text-white/80">
                  Gửi bảng giá bạn đang có qua Zalo, VietLicense sẽ kiểm tra SKU, điều kiện VAT và đưa ra so sánh chi tiết.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.1 8.2V6.8c0-.7.5-.9.9-.9h1.8V2.8l-2.6-.1c-2.9 0-4.5 1.8-4.5 4.8v.7H6.8v3.5h2.9v9.6h3.6v-9.6h3l.5-3.5h-3.7Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Fanpage Facebook</p>
                      <p className="text-xs text-white/60">Việt License</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0068ff]">
                      <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Zalo</p>
                      <p className="text-xs text-white/60">0382 520 281</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Hotline</p>
                      <p className="text-xs text-white/60">0382 520 281</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#0068ff]/20 blur-3xl" />
              <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            </div>

            <div className="p-8 lg:p-12">
              {isSubmitted ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <svg className="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M22 11.1A10 10 0 1 1 12 2a10 10 0 0 1 10 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Đã gửi thành công!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    VietLicense sẽ liên hệ bạn trong thời gian sớm nhất.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="btn btn-dark btn-sm mt-6"
                  >
                    Gửi another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground">
                      Tên của bạn
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1 block w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#0068ff] focus:outline-none focus:ring-2 focus:ring-[#0068ff]/20"
                      placeholder="Nhập tên của bạn"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-1 block w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#0068ff] focus:outline-none focus:ring-2 focus:ring-[#0068ff]/20"
                      placeholder="Nhập số điện thoại"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-foreground">
                      Sản phẩm quan tâm
                    </label>
                    <select
                      id="product"
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="mt-1 block w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground focus:border-[#0068ff] focus:outline-none focus:ring-2 focus:ring-[#0068ff]/20"
                    >
                      <option value="">Chọn sản phẩm</option>
                      <option value="windows">Windows</option>
                      <option value="office">Office</option>
                      <option value="microsoft365">Microsoft 365</option>
                      <option value="other">Khác</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground">
                      Nội dung
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="mt-1 block w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#0068ff] focus:outline-none focus:ring-2 focus:ring-[#0068ff]/20"
                      placeholder="Dán nội dung bảng giá cần đối chiếu..."
                    />
                  </div>
                  <button type="submit" className="btn btn-dark w-full">
                    Gửi bảng giá
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
