import { Globe } from "@phosphor-icons/react"
import { Link, Outlet } from "react-router"

export default function BaseLayout() {
  return (
    <div className="flex flex-col min-h-dvh">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost text-xl">
            <img src="/logo.png" className="size-8" />
            <span>دوره نیتروژن</span>
          </Link>
        </div>
        <div className="navbar-end">
          <div className="dropdown">
            <a target="_blank" href="https://toranjctr.com" className="btn btn-ghost">
              <span>وب‌سایت مرکز ترنج</span>
              <Globe size={24} />
            </a>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  )
}
