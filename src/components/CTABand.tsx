import Link from "next/link";

type CTABandProps = {
  heading: string;
  body: string;
  cta: string;
  href: string;
};

export function CTABand({ heading, body, cta, href }: CTABandProps) {
  return (
    <section className="sec py-16">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="ctaband rounded-3xl px-8 py-12 text-center md:px-12">
          <h2 className="display text-3xl font-semibold tracking-tight text-white md:text-4xl">{heading}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/80 md:text-base">{body}</p>
          <div className="mt-6 flex justify-center">
            <Link href={href} className="btn btn-zalo">
              {cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
