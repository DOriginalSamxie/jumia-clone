import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Link from 'next/link'

export default function ShoppingCart() {
  return (
    <Link href='/cart'>
      <ShoppingCartIcon className='h-12' />
      <span className='badge badge-warning text-white mr-5'>0</span>
    </Link>
  )
}
