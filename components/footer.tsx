import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#1B365D] text-[#FFF5E1]">
      <div className="container px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">About Us</h3>
            <p className="text-sm opacity-80">
              Celebrating Nigerian culture through traditional and modern Adire designs.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/shipping">Shipping Information</Link>
              </li>
              <li>
                <Link href="/returns">Returns & Exchanges</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
            <form className="space-y-2">
              <Input
                className="bg-white/10 border-white/20"
                placeholder="Enter your email"
                type="email"
              />
              <Button className="w-full bg-[#8B4513] hover:bg-[#8B4513]/90">
                Subscribe
              </Button>
            </form>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="opacity-80 hover:opacity-100">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="opacity-80 hover:opacity-100">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="opacity-80 hover:opacity-100">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container px-4 py-6 text-center text-sm">
          © 2024 Adire Textiles. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

