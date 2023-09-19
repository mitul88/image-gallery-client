import { Link } from 'react-router-dom';

const CategoryNavigation = ({categoryData}) => {
  return (
    <div style={{fontFamily: "Quicksand"}} className='w-96 md:min-w-[800px] flex flex-row justify-between mx-auto my-5 shadow shadow-md border border-gray-200 rounded-lg bg-white'>
        <span className='bg-sky-900 text-white rounded-l-lg py-3 px-5 font-bold tracking-wider'>Categories</span>
        <Link to="/" className='font-bold tracking-wider text-orange-500 py-3 px-5'>All</Link>
        {categoryData.map(category => (
          <Link key={category._id} to={`?category=${category.name}&id=${category._id}`} className='font-bold tracking-wider text-orange-500 py-3 px-5'>{category.name.toUpperCase()}</Link>
        ))}
    </div>
  )
}

export default CategoryNavigation