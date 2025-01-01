"use client"

import { ShoppingBag } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { CartItem } from './cart-item'
import { useCart } from './cart-provider'

export function CartSheet() {
  const { cartItems } = useCart()
  const itemCount = cartItems.length
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingBag className="h-5 w-5" />
          {itemCount > 0 && (
            <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-[#8B4513] text-xs font-bold text-white flex items-center justify-center">
              {itemCount}
            </span>
          )}
          <span className="sr-only">Open cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Cart ({itemCount})</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <ScrollArea className="h-[60vh] py-4">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </ScrollArea>
            <Separator className="my-4" />
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>₦{total.toLocaleString()}</span>
              </div>
              <Button className="w-full bg-[#8B4513] hover:bg-[#8B4513]/90">
                Checkout
              </Button>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-2">
            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            <span className="text-muted-foreground">Your cart is empty</span>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

