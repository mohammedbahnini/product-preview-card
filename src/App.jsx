function App() {


  return (
    <>
      <div className="container px-4 flex flex-col justify-center min-h-svh py-[28px] mx-auto">
        <div className="card rounded-[10px] overflow-hidden flex flex-col sm:flex-row  sm:max-w-[600px] mx-auto">
          <div className="sm:w-[50%]">
            <picture className="">
              <source media="(min-width : 640px)" srcSet="/image-product-desktop.jpg"  />
              <img src="/image-product-mobile.jpg" alt="" className="h-full" />
            </picture>
          </div>

          <div className="p-6 bg-white sm:w-[50%] sm:p-8">
            <span className="block uppercase body-overline text-aurometal  mb-3 sm:mb-5">parfume</span>
            <h1 className="display mb-4 sm:mb-6 text-gunmetal">Gabrielle Essence Eau De Parfum</h1>
            <p className="body text-aurometal mb-6 sm:mb-[29px]">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
            <span className="flex items-center gap-[19px]  ">
              <span className="display text-deep-aquamarine ">$149.99</span>
              <span className="text-aurometal text-[13px] leading-[23px] line-through">$169.99</span>
            </span>
            <a href="#" className="btn-text text-white p-4 bg-deep-aquamarine transition-colors duration-300 hover:bg-dark-deep-aquamarine rounded-lg font-bold text-center mt-5 flex justify-center gap-3 sm:mt-[30px]">
              <img src="/icon-cart.svg" alt="" /> Add to Card
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
