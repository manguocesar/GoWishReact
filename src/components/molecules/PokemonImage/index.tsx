import { useState } from 'react'

export interface PokemonImageProps {
  src?: string
  alt: string
}

const PokemonImage = ({ src, alt }: PokemonImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
    setIsLoaded(true)
  }

  const hasValidImage = src && !hasError
  const showLoadingSkeleton = !isLoaded

  return (
    <div className="flex items-center justify-center">
      {hasValidImage && (
        <>
          {showLoadingSkeleton && (
            <div className="w-full h-48 bg-gray-200 animate-pulse rounded flex items-center justify-center">
              <div className="text-gray-400">Loading...</div>
            </div>
          )}
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onLoad={handleLoad}
            onError={handleError}
            className={`w-full h-48 object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0 absolute'
            }`}
          />
        </>
      )}
      
      {!hasValidImage && (
        <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400 object-cover">
          <span className="text-4xl p-2">Image Incorrect</span>
        </div>
      )}
    </div>
  )
}

export { PokemonImage }
