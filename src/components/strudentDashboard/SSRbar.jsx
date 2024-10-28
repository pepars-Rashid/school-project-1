import Link from "next/link";

export default function SSRbar() {
  return (
    <div className='w-full h-[75px] rounded-t-[40px] bg-red-500 fixed bottom-0'>
      <div className='px-[55px] flex justify-between items-center h-full'>
        <Link href={'/link-testing'} 
        className='flex items-center h-full'
        >
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 0C12.5 0 4.7675 7.41667 0.44625 11.4333C0.1925 11.6889 0 12.0611 0 12.5C0 13.2681 0.55875 13.8889 1.25 13.8889H3.75V23.6111C3.75 24.3792 4.30875 25 5 25H8.75C9.44125 25 10 24.3778 10 23.6111V18.0556H15V23.6111C15 24.3778 15.5588 25 16.25 25H20C20.6912 25 21.25 24.3792 21.25 23.6111V13.8889H23.75C24.4412 13.8889 25 13.2681 25 12.5C25 12.0611 24.8075 11.6889 24.5213 11.4333C20.23 7.41667 12.5 0 12.5 0Z" fill="white" fill-opacity='1'/>
          </svg>
        </Link>
        <Link href={"link-testing/planner"} 
        className='flex items-center h-full'
        >
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.99122 1.25226V2.48249L7.49171 2.48986V1.25231C7.48457 -0.427735 4.98531 -0.40709 4.99122 1.25226ZM17.4961 1.25226V2.49713H7.49171V6.25372C7.40941 7.95806 4.92569 7.86964 4.99122 6.25372V2.49713H1.24538C0.554917 2.49988 -0.00261498 3.06158 2.12405e-05 3.75177V8.75322H25V3.75177C25.0026 3.05776 24.4391 2.49449 23.7449 2.49713H19.999V1.25226C19.9716 -0.432811 17.4729 -0.401904 17.4961 1.25226ZM17.4961 2.50446H19.999V6.25372C19.9721 7.92848 17.4737 7.89866 17.4961 6.25372V2.50446ZM2.12405e-05 11.243V23.7429C-0.00396616 24.4341 0.553958 24.9973 1.24538 25C8.7452 25 16.245 25 23.7449 25C24.4401 25.0026 25.004 24.4379 25 23.7429V11.243H2.12405e-05ZM4.99122 12.4976H7.49171C9.15726 12.4837 9.17317 14.9827 7.49171 14.9995H4.99122C3.34393 15.0191 3.31752 12.521 4.99122 12.4976ZM11.2498 12.4976H13.7502C15.4168 12.5021 15.4112 15.0015 13.7502 14.9995H11.2498C9.5717 14.983 9.58731 12.484 11.2498 12.4976ZM17.4961 12.4976H19.999C21.6475 12.4661 21.6846 14.9626 19.999 14.9995H17.4961C15.8246 14.983 15.8401 12.484 17.4961 12.4976ZM4.99122 17.4991H7.49171C9.15074 17.4715 9.17972 19.9692 7.49171 19.9986H4.99122C3.33122 19.9962 3.33026 17.4966 4.99122 17.4991ZM11.2498 17.4991H13.7502C15.4292 17.5233 15.3988 20.0209 13.7502 19.9986H11.2498C9.60883 20.044 9.54996 17.5517 11.2498 17.4991ZM17.4961 17.4991H19.999C21.6815 17.5239 21.6505 20.0215 19.999 19.9986H17.4961C15.8179 19.9692 15.8467 17.4715 17.4961 17.4991Z" fill="white" fill-opacity='0.5'/>
          </svg>
        </Link>
        <Link href={"#"} 
        className='flex items-center h-full'
        >
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.17188 25C1.4759 24.9765 1.76217 24.8278 1.97765 24.5816C2.19312 24.3353 2.32318 24.0082 2.34375 23.6607V7.14286C2.34375 6.90606 2.42606 6.67896 2.57257 6.51151C2.71909 6.34407 2.9178 6.25 3.125 6.25H23.4375V4.6875C23.4375 4.3915 23.3346 4.10762 23.1515 3.89832C22.9683 3.68901 22.7199 3.57143 22.4609 3.57143H9.57031C9.44149 3.57384 9.31355 3.54662 9.19411 3.49139C9.07468 3.43616 8.96618 3.35404 8.87507 3.24992C8.78397 3.1458 8.71211 3.0218 8.66378 2.8853C8.61545 2.7488 8.59164 2.60259 8.59375 2.45536V1.11607C8.59375 0.820071 8.49086 0.536194 8.30772 0.32689C8.12458 0.117586 7.87619 0 7.61719 0H1.00781C0.740388 0.00805071 0.486075 0.134109 0.29819 0.351748C0.110305 0.569386 0.00344048 0.861702 0 1.16741L0 23.6607C0 24.0159 0.123465 24.3566 0.343234 24.6077C0.563003 24.8589 0.861074 25 1.17188 25Z" fill="white" fill-opacity='0.5'/>
            <path d="M24.2188 8.03571H4.6875C4.4803 8.03571 4.28159 8.12977 4.13507 8.29722C3.98856 8.46466 3.90625 8.69176 3.90625 8.92856V23.6607C3.88568 24.0082 3.75562 24.3353 3.54015 24.5816C3.32467 24.8278 3.0384 24.9765 2.73438 25H23.8281C24.1389 25 24.437 24.8589 24.6568 24.6077C24.8765 24.3566 25 24.0159 25 23.6607V8.92856C25 8.69176 24.9177 8.46466 24.7712 8.29722C24.6247 8.12977 24.426 8.03571 24.2188 8.03571Z" fill="white" fill-opacity="0.5"/>
          </svg>
        </Link>
        <Link href={"#"}
        className='flex items-center h-full'
        >
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8558 13.8191C21.8558 13.4422 21.9833 13.0653 21.9833 12.5628C21.9833 12.0603 21.9833 11.6834 21.8558 11.3065L24.5337 9.17085C24.7887 8.9196 24.7887 8.66834 24.6612 8.41708L22.1108 4.0201C21.9833 3.89447 21.7283 3.76884 21.3457 3.89447L18.1577 5.15075C17.5201 4.64824 16.755 4.27136 15.9899 3.89447L15.4798 0.628141C15.6073 0.251256 15.2248 0 14.9698 0H9.86899C9.61395 0 9.2314 0.251256 9.2314 0.502513L8.72132 3.89447C7.95621 4.14573 7.31861 4.64824 6.5535 5.15075L3.49304 3.89447C3.11048 3.76884 2.85544 3.89447 2.60041 4.14573L0.0500263 8.54271C-0.0774927 8.66834 0.0500263 9.04523 0.305064 9.29648L2.98296 11.3065C2.98296 11.6834 2.85544 12.0603 2.85544 12.5628C2.85544 13.0653 2.85544 13.4422 2.98296 13.8191L0.305064 15.9548C0.0500263 16.206 0.0500263 16.4573 0.177545 16.7085L2.72793 21.1055C2.85545 21.2312 3.11048 21.3568 3.49304 21.2312L6.68102 19.9749C7.31861 20.4774 8.08373 20.8543 8.84884 21.2312L9.35892 24.4975C9.35892 24.7487 9.61395 25 9.99651 25H15.0973C15.3523 25 15.7349 24.7487 15.7349 24.4975L16.2449 21.2312C17.0101 20.8543 17.7752 20.4774 18.4128 19.9749L21.6007 21.2312C21.8558 21.3568 22.2383 21.2312 22.3659 20.9799L24.9162 16.5829C25.0438 16.3317 25.0438 15.9548 24.7887 15.8291L21.8558 13.8191ZM12.4194 16.9598C9.99651 16.9598 7.95621 14.9497 7.95621 12.5628C7.95621 10.1759 9.99651 8.16583 12.4194 8.16583C14.8422 8.16583 16.8825 10.1759 16.8825 12.5628C16.8825 14.9497 14.8422 16.9598 12.4194 16.9598Z" fill="white" fill-opacity='0.5'/>
          </svg>
        </Link>
      </div>
    </div>
  )
}