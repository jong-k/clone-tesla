import TopBanner from "@/components/home/TopBanner";

export default function Home() {
  return (
    <div>
      <TopBanner />

      <div>
        {/* 찐 헤더 숨기는 역할 */}
        <div>
          <header>찐 헤더</header>
        </div>
        <main>메인</main>
        <footer>푸터</footer>
      </div>
    </div>
  );
}
