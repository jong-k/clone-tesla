export default function Home() {
  return (
    <div>
      <div className="top-banner h-[53px] text-center">홈페이지서만 보이는 배너</div>
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
