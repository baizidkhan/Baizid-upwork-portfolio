"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Github, TrendingUp, Code, Star } from "lucide-react"

interface GitHubStats {
  public_repos: number
  followers: number
  following: number
  created_at: string
}

interface Repository {
  name: string
  description: string
  language: string
  stargazers_count: number
  updated_at: string
  html_url: string
}

export function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user stats
        const userResponse = await fetch("https://api.github.com/users/baizidkhan")
        const userData = await userResponse.json()
        setStats(userData)

        // Fetch repositories
        const reposResponse = await fetch("https://api.github.com/users/baizidkhan/repos?sort=updated&per_page=4")
        const reposData = await reposResponse.json()
        setRepos(reposData)
      } catch (error) {
        console.error("Error fetching GitHub data:", error)
        // Fallback data
        setStats({
          public_repos: 25,
          followers: 50,
          following: 30,
          created_at: "2019-01-01T00:00:00Z",
        })
        setRepos([
          {
            name: "wordpress-custom-theme",
            description: "Custom WordPress theme with advanced customization options",
            language: "PHP",
            stargazers_count: 12,
            updated_at: "2024-01-15T10:30:00Z",
            html_url: "https://github.com/baizidkhan/wordpress-custom-theme",
          },
          {
            name: "woocommerce-optimizer",
            description: "Performance optimization plugin for WooCommerce stores",
            language: "JavaScript",
            stargazers_count: 8,
            updated_at: "2024-01-10T14:20:00Z",
            html_url: "https://github.com/baizidkhan/woocommerce-optimizer",
          },
          {
            name: "elementor-custom-widgets",
            description: "Collection of custom Elementor widgets for business websites",
            language: "PHP",
            stargazers_count: 15,
            updated_at: "2024-01-12T09:15:00Z",
            html_url: "https://github.com/baizidkhan/elementor-custom-widgets",
          },
          {
            name: "shopify-theme-customizer",
            description: "Advanced Shopify theme customization toolkit",
            language: "Liquid",
            stargazers_count: 6,
            updated_at: "2024-01-08T16:45:00Z",
            html_url: "https://github.com/baizidkhan/shopify-theme-customizer",
          },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 1) return "1 day ago"
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`
    return `${Math.ceil(diffDays / 30)} months ago`
  }

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      PHP: "bg-blue-500",
      JavaScript: "bg-yellow-500",
      Liquid: "bg-green-500",
      CSS: "bg-purple-500",
      HTML: "bg-red-500",
    }
    return colors[language] || "bg-gray-500"
  }

  if (loading) {
    return (
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-xl mx-auto mb-4"></div>
              <div className="h-6 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card className="border-2 border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg group text-center">
          <CardContent className="p-6">
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
              <Github className="w-8 h-8 text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{stats?.public_repos || 25}+</h3>
            <p className="text-gray-600">Public Repositories</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg group text-center">
          <CardContent className="p-6">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
            <p className="text-gray-600">Contributions This Year</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg group text-center">
          <CardContent className="p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
              <Code className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">8</h3>
            <p className="text-gray-600">Languages Used</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Repositories */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Recent Repositories</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {repos.map((repo, index) => (
            <Card
              key={index}
              className="border hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors hover:underline"
                  >
                    {repo.name}
                  </a>
                  <div className="flex items-center text-gray-500">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="text-sm">{repo.stargazers_count}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{repo.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 ${getLanguageColor(repo.language)} rounded-full mr-2`}></div>
                    <span className="text-gray-600">{repo.language}</span>
                  </div>
                  <span className="text-gray-500">Updated {formatDate(repo.updated_at)}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}
