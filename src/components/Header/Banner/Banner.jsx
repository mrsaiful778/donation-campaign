

const Banner = (props) => {
    return (
        
        <div className="">
           
            {/* <img src="./src/assets/image/Rectangle 4281.png" /> */}
            {/* className="hero h-[50vh]" style={{ backgroundImage: 'url(https://i.ibb.co/7g4CXtc/383314042-993914288548846-1091373714914908118-n.png)' }} */}
            <div className="hero h-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/7g4CXtc/383314042-993914288548846-1091373714914908118-n.png)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                
                <div className=" text-center ">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold text-[#FFF]">I Grow By Helping People In Need</h1>
                       <div className="flex justify-center">
                       <input type="text" placeholder="Search Here..." className="input input-bordered input-primary w-full max-w-xs" />
                       <button className="bg-[#FF444A] p-[13px] rounded-lg text-base font-semibold text-white">Search</button>
                       </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;