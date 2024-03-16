const Cooks = () => {
    return (
        <section>
            <div>
                <div className="w-full bg-base-100 shadow-xl lg:p-5 p-2 rounded-2xl">
                    <div className="">
                        <h2 className="font-bold text-xl text-center">Want to cook: </h2>
                        <hr/>
                        <div className="flex justify-around">
                            <p>Name</p>
                            <p>Time</p>
                            <p>Calories</p>
                        </div>
                        <div className="flex justify-between bg-gray-200 items-center p-2">
                            <p>N</p>
                            <p>T</p>
                            <p>C</p>
                            <button className=" rounded-full p-2 bg-[#0BE58A] font-medium">Preparing</button>
                        </div>
                        <h2 className="text-center font-bold text-xl">Currently cooking:</h2>
                        <hr />
                        <div className="flex justify-between">
                            <p>Name</p>
                            <p>Time</p>
                            <p>Calories</p>
                        </div>
                        <div className="flex justify-between bg-gray-200 items-center rounded-xl p-2">
                            <p>N</p>
                            <p>T</p>
                            <p>C</p>
                        </div>
                        <div className="font-bold">
                            <h1>Total Time = </h1>
                            <h1>Total Calories =</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cooks;