import { Link } from "react-router"
import { tests } from "../assets/tests"

export default function Home() {
  return (
    <div className="grow shrink flex flex-col items-center justify-center p-2">
      <div className="bg-nitro-br text-white p-5 w-full max-w-96 rounded-lg text-center flex flex-col gap-2">
        <h1 className="font-black text-3xl">به دوره نیتروژن خوش اومدی!</h1>
        <p>سلام رفیق 👋🏻</p>
        <p>اینجا متیونی تست‌های اهمال‌کاری دوره نیتروژن رو انجام بدی، و بلافاصله امتیازتو ببینی!</p>
        <p>آماده‌ای تست بزنیم؟ 😉</p>
        {tests.map(t => (
          <Link key={t.id} to={`/test/${t.id}`} className="btn btn-block">
            {t.name}
          </Link>
        ))}
        <p>
          <code>v3</code>
        </p>
      </div>
    </div>
  )
}
