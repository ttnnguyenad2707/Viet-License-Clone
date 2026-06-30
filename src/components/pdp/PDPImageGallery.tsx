"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/types/product";

type PDPImageGalleryProps = {
  images: Product["images"];
};

export function PDPImageGallery({ images }: PDPImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="thumb aspect-square w-full rounded-2xl overflow-hidden flex items-center justify-center bg-white border border-border">
        <span className="text-muted-foreground text-sm">Không có ảnh</span>
      </div>
    );
  }

  const active = images[activeIndex];

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="thumb aspect-square w-full overflow-hidden rounded-2xl border border-border bg-white relative">
        <Image
          src={active.src}
          alt={active.alt}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={activeIndex === 0}
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`thumb relative shrink-0 w-16 h-16 overflow-hidden rounded-xl border-2 transition-all ${
                idx === activeIndex
                  ? "border-[#0068ff]"
                  : "border-border hover:border-[#0068ff]/40"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-contain p-1.5"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}

      {/* Caption */}
      {active.caption && (
        <p className="text-xs text-muted-foreground text-center">
          {active.caption}
        </p>
      )}
    </div>
  );
}
