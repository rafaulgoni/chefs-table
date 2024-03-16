
const Banner = () => {
    return (
        <div>
         <div className="hero min-h-[600px] rounded-3xl" style={{backgroundImage: 'url(https://i.ibb.co/1bg29qv/Rectangle-1.png)'}}>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-[897px]">
                    <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="mb-5 max-w-[800px]">Cooking is an art form that engages all the senses, from the sizzle of ingredients in a hot pan to the aromatic bouquet of herbs and spices.</p>
                    <div className="space-x-6">
                        <button className="btn bg-[#0BE58A] border-none rounded-full">Explore Now</button>
                        <button className="btn btn-outline text-white rounded-full">Our Feedback</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;