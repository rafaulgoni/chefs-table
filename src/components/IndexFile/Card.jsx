import { GiCelebrationFire } from "react-icons/gi";
import { IoTime } from "react-icons/io5";



const Card = ({ foods }) => {
    return (
        <div>
            <div className="card lg:w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={foods.recipe_image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{foods.recipe_name}</h2>
                    <p>{foods.short_description}</p>
                    <hr/>
                    <h1 className="font-bold">ingredients: 6</h1>
                    <ul className='ml-5'>
                        <li>• {foods.ingredients[0]}</li>
                        <li>• {foods.ingredients[1]}</li>
                        <li>• {foods.ingredients[2]}</li>
                        <li>• {foods.ingredients[3]}</li>
                        <li>• {foods.ingredients[4]}</li>
                        <li>• {foods.ingredients[5]}</li>
                    </ul>
                    <hr/>
                    <div className='flex justify-around'>
                        <p className="flex"><IoTime></IoTime><samp className="ml-1">{foods.preparing_time}</samp></p>
                        <p className="flex"><GiCelebrationFire></GiCelebrationFire><samp className="ml-1"> {foods.calories}</samp></p>
                    </div>
                    <div>
                        <button className="btn bg-[#0BE58A] rounded-full">Want to Cook</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Card;