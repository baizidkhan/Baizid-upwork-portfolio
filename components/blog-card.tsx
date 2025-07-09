"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"

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

interface BlogCardProps {
  post: BlogPost
  onReadMore: (post: BlogPost) => void
}

export function BlogCard({ post, onReadMore }: BlogCardProps) {
  return (
    <Card className="overflow-hidden border-2 border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg rounded-lg transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-40 sm:h-48 lg:h-52 object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-6 min-h-[320px] flex flex-col justify-between">
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-700">
            {post.category}
          </Badge>
          <div className="flex items-center text-gray-500 text-xs sm:text-sm">
            <Clock className="w-3 h-3 mr-1" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors leading-tight">
          {post.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">{post.excerpt}</p>
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="flex items-center text-xs sm:text-sm text-gray-500">
            <Calendar className="w-3 h-3 mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center text-xs sm:text-sm text-gray-500">
            <User className="w-3 h-3 mr-1" />
            <span>{post.author}</span>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200 w-full text-xs sm:text-sm py-2 sm:py-2.5"
          onClick={() => onReadMore(post)}
        >
          Read Full Article
          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
        </Button>
      </CardContent>
    </Card>
  )
}
