"use client"

import Link from "next/link"
import { ShoppingBag, Search, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import { useCart } from "@/components/cart-provider"
import { CartSheet } from "@/components/cart-sheet"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { cartItems } = useCart()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)}>
                Shop
              </Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Adire Textiles</span>
        </Link>
        <nav className="hidden lg:flex lg:items-center lg:space-x-6">
          <Link href="/" className="text-sm font-medium">
            Home
          </Link>
          <Link href="/shop" className="text-sm font-medium">
            Shop
          </Link>
          <Link href="/about" className="text-sm font-medium">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:inline-flex"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <CartSheet />
        </div>
      </div>
      {isSearchOpen && (
        <div className="border-t">
          <div className="container py-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                className="pl-10 pr-4"
                placeholder="Search products..."
                type="search"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

