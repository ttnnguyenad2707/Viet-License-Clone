"use client";

import { useState } from "react";
import Link from "next/link";

const quizSteps = [
  {
    step: 1,
    total: 5,
    question: "Máy Windows này đang dùng trong bối cảnh nào?",
    subtitle:
      "Bối cảnh sử dụng ảnh hưởng đến nhu cầu chứng từ, quản trị và cách đối chiếu license.",
    options: [
      {
        label: "Máy cá nhân, tự dùng",
        note: "Máy cá nhân thường có rủi ro hồ sơ thấp hơn nếu nguồn Windows và chứng từ rõ.",
      },
      {
        label: "Máy công ty hoặc tài sản doanh nghiệp",
        note: "Máy công ty cần lưu chứng từ, thông tin bàn giao và danh sách thiết bị rõ hơn máy cá nhân.",
      },
      {
        label: "Máy cá nhân dùng cho công việc công ty",
        note: "BYOD dễ lẫn giữa license cá nhân và yêu cầu quản trị/chứng từ của doanh nghiệp.",
      },
      {
        label: "Máy cũ, máy thanh lý hoặc refurbished",
        note: "Máy cũ cần đối chiếu thêm nhãn, hồ sơ mua và license đi kèm thiết bị.",
      },
      {
        label: "Tôi không rõ nguồn gốc máy",
        note: "Chưa rõ nguồn máy thì nên kiểm tra thêm trước khi kết luận tình trạng license.",
      },
    ],
  },
  {
    step: 2,
    total: 5,
    question: "Nguồn Windows trên máy này là gì?",
    subtitle: "Biết nguồn giúp ước tính mức độ rõ ràng của license.",
    options: [
      {
        label: "Máy mua mới, Windows có sẵn từ nhà sản xuất (OEM)",
        note: "",
      },
      {
        label: "Tự build PC và mua license rời (Retail/FPP)",
        note: "",
      },
      {
        label: "Cài lại từ đĩa/USB Microsoft hoặc ISO chính hãng",
        note: "",
      },
      {
        label: "Cài lại từ đĩa/USB không rõ nguồn gốc hoặc tiệm cài",
        note: "",
      },
      {
        label: "Không rõ — không nhớ hoặc không biết",
        note: "",
      },
    ],
  },
  {
    step: 3,
    total: 5,
    question: "Windows trên máy này đang kích hoạt (activated) không?",
    subtitle:
      "Trạng thái kích hoạt là một trong các tín hiệu cần đối chiếu.",
    options: [
      { label: "Có, đang activated bình thường", note: "" },
      {
        label: "Có, nhưng không rõ đã dùng key gì",
        note: "",
      },
      {
        label: "Có, dùng key do công ty/cá nhân mua",
        note: "",
      },
      {
        label: "Không — hiện không activated",
        note: "",
      },
      {
        label: "Không rõ — không biết hoặc không kiểm tra",
        note: "",
      },
    ],
  },
  {
    step: 4,
    total: 5,
    question:
      "Bạn có hóa đơn, chứng từ mua Windows hoặc thông tin license không?",
    subtitle:
      "Chứng từ là căn cứ quan trọng để đối chiếu và xác nhận license.",
    options: [
      {
        label: "Có đầy đủ — hóa đơn, thông tin license rõ ràng",
        note: "",
      },
      {
        label: "Có một phần — có hóa đơn nhưng thiếu thông tin license",
        note: "",
      },
      {
        label: "Không có — không có hóa đơn hoặc chứng từ",
        note: "",
      },
      {
        label: "Không rõ — có thể có nhưng không tìm thấy",
        note: "",
      },
    ],
  },
  {
    step: 5,
    total: 5,
    question: "Bạn có dùng Office hoặc Microsoft 365 không?",
    subtitle:
      "Office/Microsoft 365 cũng cần kiểm tra license riêng ngoài Windows.",
    options: [
      {
        label: "Có — đang dùng Office hoặc Microsoft 365",
        note: "",
      },
      {
        label: "Có — nhưng không rõ loại license (Home, Business, Enterprise...)",
        note: "",
      },
      {
        label: "Không dùng Office hoặc Microsoft 365",
        note: "",
      },
      {
        label: "Không rõ — có thể có nhưng không chắc",
        note: "",
      },
    ],
  },
];

export function QuizSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(quizSteps.length).fill(null)
  );
  const [selectedNote, setSelectedNote] = useState<string>("");

  const step = quizSteps[currentStep];
  const isLastStep = currentStep === quizSteps.length - 1;
  const hasAnswer = answers[currentStep] !== null;

  function handleSelect(idx: number) {
    const newAnswers = [...answers];
    newAnswers[currentStep] = idx;
    setAnswers(newAnswers);
    setSelectedNote(step.options[idx]?.note ?? "");
  }

  function handleNext() {
    if (!isLastStep) {
      setCurrentStep((s) => s + 1);
      setSelectedNote("");
    }
  }

  function handleBack() {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
      const prevAnswer = answers[currentStep - 1];
      setSelectedNote(
        prevAnswer !== null && prevAnswer !== undefined
          ? quizSteps[currentStep - 1].options[prevAnswer]?.note ?? ""
          : ""
      );
    }
  }

  return (
    <section id="quiz" className="bg-background py-16">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="mb-8 max-w-3xl">
          <p className="eyebrow mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Quick quiz
          </p>
          <h2 className="display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Kiểm tra sơ bộ trước khi tải tool
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Website không quét máy, không upload file và không gửi dữ liệu về Việt License. Kết quả dựa trên câu trả lời bạn chọn và giúp xác định bước rà soát tiếp theo.
          </p>
        </div>

        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-2">
            <span className="text-sm font-medium text-foreground">
              {step.step}/{step.total}
            </span>
            <div className="flex-1 rounded-full bg-border h-2 overflow-hidden">
              <div
                className="h-full rounded-full bg-[#0068ff] transition-all"
                style={{ width: `${(step.step / step.total) * 100}%` }}
              />
            </div>
          </div>

          <div className="rounded-[18px] border border-border bg-white p-6">
            <p className="text-base font-semibold text-foreground">
              {step.question}
            </p>
            {step.subtitle && (
              <p className="mt-2 text-sm text-muted-foreground">
                {step.subtitle}
              </p>
            )}

            <div className="mt-5 space-y-2">
              {step.options.map((opt, idx) => {
                const isSelected = answers[currentStep] === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelect(idx)}
                    className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                      isSelected
                        ? "border-[#0068ff] bg-blue-50 text-foreground"
                        : "border-border bg-white text-foreground hover:border-[#0068ff]/40"
                    }`}
                  >
                    <span className="font-medium">{opt.label}</span>
                  </button>
                );
              })}
            </div>

            {selectedNote && (
              <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 p-4">
                <p className="text-sm text-blue-800">{selectedNote}</p>
              </div>
            )}

            <div className="mt-6 flex items-center justify-between">
              <button
                type="button"
                onClick={handleBack}
                disabled={currentStep === 0}
                className="btn btn-light btn-sm disabled:opacity-40"
              >
                Quay lại
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={!hasAnswer}
                className="btn btn-dark btn-sm disabled:opacity-40"
              >
                {isLastStep ? "Xem kết quả" : "Tiếp tục"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
