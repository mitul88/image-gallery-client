import { Link } from 'react-router-dom';

const CategoryNavigation = ({categoryData}) => {
  return (
    <>
    <div style={{fontFamily: "Quicksand"}} className='hidden md:block w-96 min-w-[700px] lg:min-w-[800px] md:flex flex-row justify-between mx-auto my-0 md:my-5 shadow shadow-md border border-gray-200 rounded-lg bg-white'>
        <span className='bg-sky-900 text-white rounded-l-lg py-3 px-5 font-bold text-xs md:text-sm lg:text-md lg:tracking-wider'>Categories</span>
        <Link to="/" className='font-bold lg:tracking-wider text-orange-500 text-xs md:text-sm lg:text-md py-3 px-5'>All</Link>
          {categoryData.map(category => (
            <Link key={category._id} to={`?category=${category.name}&id=${category._id}`} className='font-bold lg:tracking-wider text-xs md:text-sm lg:text-md text-orange-500 py-3 px-5'>{category.name.toUpperCase()}</Link>
          ))}
    </div>
    <div className="block md:hidden">
      <label htmlFor="category" className='text-white bg-sky-900 px-5 py-2 rounded-l-md ml-5'>Filter Category:</label>
      <select name="category" id="category" className='mr-5 mt-5 bg-white text-gray-600 px-5 py-2 w-60 sm:w-96 rounded-r-md'>
        <option value="">All</option>
      {categoryData.map(category => (
        <option key={category._id} value={category._id} className='bg-white text-gray-600'>{category.name.toUpperCase()}</option>
      ))}
      </select>
    </div>
   </>
  )
}

export default CategoryNavigation