function UserProfile() {
  return (
    <div className="bg-gray-100 p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition">
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="rounded-full w-24 sm:w-36 h-24 sm:h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out" 
      />
      <h1 className="text-lg sm:text-xl text-blue-800 my-2 sm:my-4 text-center hover:text-blue-500 transition-colors">
        John Doe
      </h1>
      <p className="text-gray-600 text-sm sm:text-base text-center">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
