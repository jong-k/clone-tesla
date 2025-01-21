import Link from "next/link";
import { TOP_BANNER_HEIGHT } from "@/constants/layout";

export default function TopBanner() {
  return (
    <section
      className="flex w-full items-center justify-center bg-top-banner"
      style={{
        height: TOP_BANNER_HEIGHT,
      }}
    >
      <div className="text-lg">즉시 인도 가능한 Model Y&nbsp;</div>
      <p className="text-lg">4739만원 부터</p>
      <Link href="/" className="ml-4 rounded bg-black px-4 py-1 text-sm text-[#e2e3e3]">
        주문하기
      </Link>
    </section>
  );
}
