function CardSkeleton() {
  return (
    <div className="!bg-white/15 dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col h-full animate-pulse">
      <div className="flex items-start space-x-4 mb-4">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
        </div>
        <div className="flex-1">
          <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded mb-2 w-3/4"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
        </div>
      </div>
      
      <div className="flex-1">
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-4/5"></div>
        </div>
        
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-4 w-3/4"></div>
      </div>
      
      <div className="space-y-2 mt-auto">
        <div className="h-9 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
        <div className="h-9 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
      </div>
    </div>
  );
}

export default CardSkeleton;