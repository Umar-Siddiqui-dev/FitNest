import logo from '@/assets/Logo.png'

const foot = () => {
  return (
    <section className='bg-primary-500 py-16 '>
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className='mt-16 basis-1/2 md:mt-0'>
            <img src={logo} alt="" />
            <p className='my-5'>
                This Website is developed by Umar Siddiqui .
            </p>
            <p>@ Copyright All rights reserved</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
            <h4 className='font-bold'>Links</h4>
            <p className='my-5'> https://www.linkedin.com/in/umar-siddiqui-b3684321a/ </p>
            <p className='my-5'> https://github.com/Umar-Siddiqui-dev</p>
            {/* <p>duhf uifh sdu fhsdulf huilsd fhsduf</p> */}
        </div> 
        <div className='mt-16 basis-1/4 md:mt-0'>
            <h4 className='font-bold'>Contact Us</h4>
            <p className='my-5'> +92 3005259093 </p>
            <p className='my-5'> umar.siddiqui.94009@gmail.com</p>
            <p>https://www.linkedin.com/in/umar-siddiqui-b3684321a/</p>
        </div> 
    </div>
    </section>
  )
}

export default foot