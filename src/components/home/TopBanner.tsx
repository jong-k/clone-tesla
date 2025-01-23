import Link from "next/link";

export default function TopBanner() {
  // TODO: 버튼 링크 추가
  return (
    // height: mobile: 72px, 나머지: 53px
    <section className="flex h-[72px] w-full flex-col items-center justify-center bg-top-banner tablet:h-[53px] tablet:flex-row">
      <div className="text-sm font-semibold">즉시 인도 가능한 Model Y&nbsp;</div>
      <div className="hidden items-center justify-center tablet:flex">
        <p>4739만원 부터</p>
        <Link href="/" className="ml-4 rounded bg-black px-4 py-1 text-sm text-[#e2e3e3]">
          주문하기
        </Link>
      </div>
      <div className="flex items-center justify-center gap-1 text-sm font-normal tablet:hidden">
        <div>4739만원 부터</div>
        <Link
          href="/"
          className="underline underline-offset-[3.25px] transition duration-300 hover:text-white"
        >
          주문하기
        </Link>
      </div>
    </section>
  );
}
