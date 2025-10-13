interface ErrorCardProps {
  onRetry: () => void
}

const ErrorCard = ({ onRetry }: ErrorCardProps) => {
  return (
    <div className="p-4 md:p-6">
      <h1 className="font-bold text-2xl text-gray-900 mb-6 text-center">
        Pokemon Carousel
      </h1>
      
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-xl font-bold text-red-600 mb-3">
          Something went wrong
        </h2>
        <p className="text-gray-600 mb-6">
          Unable to load Pokemon data. Please try again.
        </p>
        <button
          onClick={onRetry}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}

export { ErrorCard }
