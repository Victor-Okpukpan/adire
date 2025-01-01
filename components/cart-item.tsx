"use client"

import Image from "next/image"
import { Minus, Plus, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useCart, CartItem as CartItemType } from "@/components/cart-provider"

export function CartItem({ item }: { item: CartItemType }) {
  const { removeFromCart, updateQuantity } = useCart()

  return (
    <div className="flex gap-4">
      <div className="relative h-16 w-16 overflow-hidden rounded">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex justify-between">
          <div>
            <h4 className="text-sm font-medium">{item.name}</h4>
            <p className="text-sm text-muted-foreground">
              ₦{item.price.toLocaleString()}
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => removeFromCart(item.id)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-8 text-center">{item.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

