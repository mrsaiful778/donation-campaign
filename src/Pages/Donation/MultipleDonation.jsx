

const MultipleDonation = ({ card }) => {
  const { id, picture, title, category, category_bg_color, card_bg_color, text_color, button_bg_color, price, } = card || {}
  return (

    <div>

      <div style={{backgroundColor: card_bg_color}} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={picture}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <h6 style={{backgroundColor: category_bg_color, color: text_color,}} className=" w-[90px]  rounded-lg py-3 px-3 mb-4 block font-sans text-base font-semibold ">
            {category}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h4>
          <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            $ {price}
          </p>
          <a className="inline-block" href="#">
            <button style={{backgroundColor: button_bg_color}}
              className="text-[#FFF] flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              view detail

            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MultipleDonation;