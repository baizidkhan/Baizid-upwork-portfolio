"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, X, Share2, Bookmark } from "lucide-react"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  readTime: string
  date: string
  author: string
  image: string
  tags: string[]
}

interface BlogModalProps {
  post: BlogPost | null
  isOpen: boolean
  onClose: () => void
}

export function BlogModal({ post, isOpen, onClose }: BlogModalProps) {
  if (!post) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-gray-900 pr-8">{post.title}</DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose} className="shrink-0">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              <span>{post.author}</span>
            </div>
            <Badge variant="secondary" className="bg-blue-50 text-blue-700">
              {post.category}
            </Badge>
          </div>

          {/* Featured Image */}
          <div className="relative overflow-hidden rounded-lg">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-64 object-cover" />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">{post.content}</div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                #{tag}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-4 border-t">
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share Article
            </Button>
            <Button variant="outline" size="sm">
              <Bookmark className="w-4 h-4 mr-2" />
              Save for Later
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
