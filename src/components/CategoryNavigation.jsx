import { Link } from 'react-router-dom';

const CategoryNavigation = () => {
  return (
    <div className='w-96 md:w-2/5 mx-auto pt-10 pb-5 flex justify-between'>
        <Link to="?category=nature" className='font-bold tracking-wider text-orange-500'>Nature</Link>
        <Link to="?category=food">Food</Link>
        <Link to="?category=tech">Tech</Link>
        <Link to="?category=travel">Travel</Link>
        <Link to="?category=lifestyle">Lifestyle</Link>
    </div>
  )
}

export default CategoryNavigation