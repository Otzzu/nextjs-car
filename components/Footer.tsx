import Image from "next/image"
import { footerLinks } from "@/constants"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex flex-col mt-5 text-black-100 border-t border-gray-200 w-full max-w-[1440px] mx-auto" >
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image src='/logo.svg' alt='Car Hub Logo' width={118} height={18} className="object-contain"/>
          <p className="text-base text-gray-700">Carhub 2023 <br/> All rights reserved &copy; </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div className="footer__link" key={link.title}>
              <h3 className="font-bold">
                {link.title}
              </h3>
              {link.links.map((item) => (
                <Link href={item.url} key={item.title}>{item.title}</Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 sm:px-16 px-6 py-10 mt-10">
        <p>@2023 CarHub. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href='/' className="text-gray-500">Privacy Policy</Link>
          <Link href='/' className="text-gray-500">Terms of Use</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer