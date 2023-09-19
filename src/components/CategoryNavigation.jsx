import { Link } from 'react-router-dom';

const CategoryNavigation = ({categoryData}) => {
  return (
    <div style={{fontFamily: "Quicksand"}} className='w-96 md:min-w-[800px] flex flex-row justify-between mx-auto my-5 shadow shadow-md border border-gray-200 rounded-lg bg-white'>
        <span className='bg-sky-900 text-white rounded-l-lg py-3 px-5 font-bold tracking-wider'>Categories</span>
        <Link to="/" className='font-bold tracking-wider text-orange-500 py-3 px-5'>All</Link>
        {categoryData.map(category => (
          <Link key={category._id} to={`?category=${category._id}`} className='font-bold tracking-wider text-orange-500 py-3 px-5'>{category.name.toUpperCase()}</Link>
        ))}
        {/* <Link to="?category=nature" className='font-bold tracking-wider text-orange-500 py-3 px-5'>Nature</Link>
        <Link to="?category=food" className='font-bold tracking-wider text-orange-500 py-3 px-5'>Food</Link>
        <Link to="?category=tech" className='font-bold tracking-wider text-orange-500 py-3 px-5'>Tech</Link>
        <Link to="?category=travel" className='font-bold tracking-wider text-orange-500 py-3 px-5'>Travel</Link>
        <Link to="?category=lifestyle" className='font-bold tracking-wider text-orange-500 py-3 px-5'>Lifestyle</Link> */}
    </div>
  )
}

export default CategoryNavigation