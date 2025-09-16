"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
}

const pathMap: Record<string, string> = {
  "": "Home",
  courses: "Courses",
  about: "About Us",
  contact: "Contact & Support",
  privacy: "Privacy Policy",
  accessibility: "Accessibility",
  terms: "Terms of Service",
  interactive: "Live Sessions",
  forum: "Discussion Forum",
  student: "Student Portal",
  faculty: "Faculty Portal",
  dashboard: "Dashboard",
  profile: "Profile",
  auth: "Authentication",
  login: "Login",
  register: "Register",
  offline: "Offline Content",
}

export function Breadcrumbs() {
  const pathname = usePathname()
  const pathSegments = pathname.split("/").filter(Boolean)

  if (pathSegments.length === 0) {
    return null // Don't show breadcrumbs on home page
  }

  const breadcrumbs: BreadcrumbItem[] = [{ label: "Home", href: "/" }]

  let currentPath = ""
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`
    const label = pathMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)
    breadcrumbs.push({ label, href: currentPath })
  })

  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground py-4">
      <Home className="h-4 w-4" />
      {breadcrumbs.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index > 0 && <ChevronRight className="h-4 w-4 mx-1" />}
          {index === breadcrumbs.length - 1 ? (
            <span className="text-foreground font-medium">{item.label}</span>
          ) : (
            <Link href={item.href} className="hover:text-primary transition-colors">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}
