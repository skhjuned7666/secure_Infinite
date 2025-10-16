"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Filter, ChevronDown, Star } from "lucide-react";

export default function CoursesSection() {
  // State for courses section
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [sortBy, setSortBy] = useState("popular");

  const allCourses = [
    {
      id: 1,
      title: "Financial Literacy Fundamentals",
      category: "Finance",
      instructor: "John Smith",
      duration: "8 hours",
      price: 1499,
      originalPrice: 2999,
      rating: 4.8,
      students: 2450,
      level: "Beginner",
      image: "/course1.jpg",
      description:
        "Learn the basics of personal finance, budgeting, and investment principles.",
    },
    {
      id: 2,
      title: "Digital Marketing Mastery",
      category: "Marketing",
      instructor: "Sarah Johnson",
      duration: "12 hours",
      price: 2999,
      originalPrice: 4999,
      rating: 4.9,
      students: 3120,
      level: "Intermediate",
      image: "/course2.jpg",
      description:
        "Master digital marketing strategies including SEO, social media, and email marketing.",
    },
    {
      id: 3,
      title: "Entrepreneurship Essentials",
      category: "Business",
      instructor: "Michael Brown",
      duration: "10 hours",
      price: 1999,
      originalPrice: 3999,
      rating: 4.7,
      students: 1890,
      level: "Beginner",
      image: "/course3.jpg",
      description:
        "Start your entrepreneurial journey with practical business planning and execution strategies.",
    },
    {
      id: 4,
      title: "Advanced Data Analytics",
      category: "Technology",
      instructor: "Dr. Emily Chen",
      duration: "15 hours",
      price: 3499,
      originalPrice: 5999,
      rating: 4.9,
      students: 1670,
      level: "Advanced",
      image: "/course4.jpg",
      description:
        "Deep dive into data analytics tools and techniques for business intelligence.",
    },
    {
      id: 5,
      title: "Personal Branding",
      category: "Career",
      instructor: "Alex Turner",
      duration: "6 hours",
      price: 1299,
      originalPrice: 2499,
      rating: 4.6,
      students: 2100,
      level: "Beginner",
      image: "/course5.jpg",
      description:
        "Build a powerful personal brand to advance your career and professional network.",
    },
    {
      id: 6,
      title: "Cryptocurrency & Blockchain Basics",
      category: "Finance",
      instructor: "Robert Wilson",
      duration: "9 hours",
      price: 1799,
      originalPrice: 3499,
      rating: 4.5,
      students: 1980,
      level: "Intermediate",
      image: "/course6.jpg",
      description:
        "Understand the fundamentals of cryptocurrency and blockchain technology.",
    },
  ];

  const categories = [
    "All Categories",
    "Finance",
    "Marketing",
    "Business",
    "Technology",
    "Career",
  ];

  const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

  // Filter courses based on search and filters
  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Categories" ||
      course.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "All Levels" || course.level === selectedLevel;
    const matchesPrice =
      course.price >= priceRange[0] && course.price <= priceRange[1];

    return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortBy === "popular") return b.students - a.students;
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <section className='py-16 bg-gray-50 dark:bg-gray-900/50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
            Our Courses
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            Discover a wide range of courses designed to enhance your skills and
            advance your career.
          </p>
        </div>

        {/* Search and Filters */}
        <div className='bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-6'>
            {/* Search */}
            <div className='md:col-span-2 relative'>
              <label htmlFor='course-search' className='sr-only'>
                Search courses
              </label>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <input
                id='course-search'
                type='text'
                placeholder='Search courses...'
                className='w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className='relative'>
              <label htmlFor='category-filter' className='sr-only'>
                Filter by category
              </label>
              <select
                id='category-filter'
                className='w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white appearance-none'
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <ChevronDown className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none' />
            </div>

            {/* Sort By */}
            <div className='relative'>
              <label htmlFor='sort-by' className='sr-only'>
                Sort by
              </label>
              <select
                id='sort-by'
                className='w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white appearance-none'
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}>
                <option value='popular'>Most Popular</option>
                <option value='price-low'>Price: Low to High</option>
                <option value='price-high'>Price: High to Low</option>
                <option value='rating'>Highest Rated</option>
              </select>
              <ChevronDown className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none' />
            </div>
          </div>

          {/* Additional Filters */}
          <div className='flex flex-wrap gap-4'>
            <div>
              <label
                htmlFor='level-filter'
                className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                Level
              </label>
              <select
                id='level-filter'
                className='px-3 py-1 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white'
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}>
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
              </label>
              <div className='flex items-center space-x-2'>
                <input
                  type='range'
                  min='0'
                  max='5000'
                  step='100'
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], parseInt(e.target.value)])
                  }
                  className='w-32'
                  aria-label='Maximum price filter'
                />
              </div>
            </div>

            <div className='flex items-end'>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All Categories");
                  setSelectedLevel("All Levels");
                  setPriceRange([0, 5000]);
                  setSortBy("popular");
                }}
                className='px-4 py-1 text-sm border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'>
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        {sortedCourses.length === 0 ? (
          <div className='text-center py-12'>
            <h3 className='text-xl font-medium text-gray-900 dark:text-white mb-2'>
              No courses found
            </h3>
            <p className='text-gray-600 dark:text-gray-400'>
              Try adjusting your filters to see more results.
            </p>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {sortedCourses.map((course) => (
              <div
                key={course.id}
                className='bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <div className='h-48 bg-gray-200 dark:bg-gray-700 relative'>
                  <div className='bg-gray-300 border-2 border-dashed rounded-xl w-full h-full' />
                  <div className='absolute top-4 right-4 bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full'>
                    ₹{course.price}
                    {course.originalPrice > course.price && (
                      <span className='block text-xs text-blue-200 line-through'>
                        ₹{course.originalPrice}
                      </span>
                    )}
                  </div>
                  {course.originalPrice > course.price && (
                    <div className='absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded'>
                      {Math.round(
                        (1 - course.price / course.originalPrice) * 100
                      )}
                      % OFF
                    </div>
                  )}
                </div>
                <div className='p-6'>
                  <div className='flex justify-between items-start mb-2'>
                    <span className='inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded'>
                      {course.category}
                    </span>
                    <span className='inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded'>
                      {course.level}
                    </span>
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
                    {course.title}
                  </h3>
                  <p className='text-gray-600 dark:text-gray-400 text-sm mb-4'>
                    by {course.instructor}
                  </p>
                  <p className='text-gray-700 dark:text-gray-300 text-sm mb-4'>
                    {course.description}
                  </p>
                  <div className='flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-4'>
                    <span>{course.duration}</span>
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                      <Star className='w-4 h-4 text-yellow-500 fill-current' />
                      <span className='font-bold text-gray-900 dark:text-white ml-1'>
                        {course.rating}
                      </span>
                      <span className='text-gray-500 dark:text-gray-400 text-sm ml-1'>
                        ({course.students})
                      </span>
                    </div>
                    <Link
                      href={`/courses/${course.id}`}
                      className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors'>
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className='flex justify-center mt-12'>
          <nav className='flex items-center space-x-2'>
            <button className='px-3 py-1 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'>
              Previous
            </button>
            <button className='px-3 py-1 rounded-lg bg-blue-600 text-white'>
              1
            </button>
            <button className='px-3 py-1 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'>
              2
            </button>
            <button className='px-3 py-1 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'>
              3
            </button>
            <button className='px-3 py-1 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'>
              Next
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
}
