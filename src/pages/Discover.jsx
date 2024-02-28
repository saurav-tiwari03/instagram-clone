import Navbar from '../components/Navbar'

export const Discover = () => {
  return (
    <div className='bg-black text-white flex'>
      <div className='flex'>
        <Navbar />
        <div>
        <p className='text-red-600 text-md font-medium' id='discover-warning'>Nothing to show </p>
        </div>
      </div>
    </div>
  )
}
