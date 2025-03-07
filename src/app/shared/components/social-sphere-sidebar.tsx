"use client"

import { Globe2, LayoutDashboard, Sparkles } from 'lucide-react'
import Link from "next/link"

import {
  Sidebar,
  SidebarContent,
  
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/app/shared/components/sidebar"
import Profile from './profile'

export function SocialSphereSidebar() {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="border-b p-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Globe2 className="h-6 w-6" />
          <span className="text-xl">Social Sphere</span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="flex flex-col gap-4 p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="w-full bg-primary text-white hover:bg-primary/90 hover:text-white rounded-full"
            >
              <Link href="/communities" className="flex items-center gap-2">
                <Globe2 className="h-5 w-5" />
                <span>Communities</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="w-full bg-primary text-white hover:bg-primary/90 hover:text-white rounded-full"
            >
              <Link href="/wizard" className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                <span>Creation Wizard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="w-full bg-primary text-white hover:bg-primary/90 hover:text-white rounded-full"
            >
              <Link href="/dashboard" className="flex items-center gap-2">
                <LayoutDashboard className="h-5 w-5" />
                <span>Community Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <Profile username={"John Doe"}/>
      <SidebarRail />
    </Sidebar>
  )
}