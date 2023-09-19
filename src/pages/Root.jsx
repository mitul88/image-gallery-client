import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';
import { useIsFetching } from '@tanstack/react-query';
import LoadingBar from 'react-top-loading-bar';

const RootPage = () => {
  const fetching = useIsFetching();
  let progress;
  if(fetching === 0 ) {
    progress = 0
  } else if (fetching > 0) {
    progress = 100
  }

  return (
    <div className='min-h-screen'>
        <MainNavigation />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <main className='h-full'>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default RootPage