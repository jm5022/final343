import Link from 'next/link'

export default function Menubar() {
  return (
    <div className="relative z-50"> {/* Added wrapper div with z-index */}
      <ul className="space-y-1 p-4 bg-gray-50 rounded-lg shadow-md text-center">
        <li>
          <Link 
            href='/' 
            className="block px-4 py-2 font-bold italic text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-200 cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li>
          <a 
            href='https://expense-sable-chi.vercel.app' 
            target='_blank'
            rel="noopener noreferrer"
            className="block px-4 py-2 font-bold italic text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-200 cursor-pointer"
          >
            Midterm Part I - Expense
          </a>
        </li>
        <li>
          <a 
            href='https://autophoto.vercel.app' 
            target='_blank'
            rel="noopener noreferrer"
            className="block px-4 py-2 font-bold italic text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-200 cursor-pointer"
          >
            Midterm Part II - Site
          </a>
        </li>
        <li>
          <Link 
            href='/faq'
            className="block px-4 py-2 font-bold italic text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-200 cursor-pointer"
          >
            FAQ
          </Link>
        </li>
      </ul>
    </div>
  )
}