import Image from "next/image"
import { Logo } from "@/public/images"

const Navbar = () => {
  return (
    <nav className='w-full container_padding p-6 flex justify-between 
    items-center bg-transparent absolute'>
       <div className="flex justify-start items-center gap-2">
        <Image
            src={Logo}
            alt="Logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <h2>Hex oIo</h2>
       </div>
    </nav>
  )
}

export default Navbar