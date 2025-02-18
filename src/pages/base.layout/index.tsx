import { Globe } from "@phosphor-icons/react"
import { Link, Outlet } from "react-router"

export default function BaseLayout() {
  return (
    <div className="flex flex-col min-h-dvh">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost text-xl">
            دوره نیتروژن
          </Link>
        </div>
        <div className="navbar-end">
          <div className="dropdown">
            <a target="_blank" href="https://toranjctr.com" className="btn btn-ghost btn-circle">
              <Globe size={24} />
            </a>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  )
}
