import { useEffect, useState } from 'react';
import Banner from './components/IndexFile/Banner'
import Card from './components/IndexFile/Card'
import Header from './components/IndexFile/Header'
import Footer from './components/IndexFile/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [foods, setFoods] = useState([])
  const [cook, setCook] = useState([])

  useEffect(() => {
    fetch("FakeData.json")
    .then(res => res.json())
    .then(data =>{
      setFoods(data)
    })
  },[])
  
  const handleCook = (c) =>{
    const isExist = cook.find(item => item.recipe_id == c.recipe_id)
    if(!isExist){
       setCook([...cook, c]);
    }else{
      toast("Already exist! please select another.");
    }
   
  }

  const handlePrepar = (id)=>{
    const newFood = cook.filter(item=> item.recipe_id != id)
    setCook(newFood)
  }

  return (
    <>
    <header className='container mx-auto'>
      <Header></Header>
    </header>
    <main className='container mx-auto lg:mt-10 mt-5'>
      <section>
        <Banner></Banner>
      </section>
      <ToastContainer />
      <section className='lg:mt-10 mt-5 lg:mb-10 mb-5'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold'>Our Recipes</h1>
          <p className='max-w-[900px] mx-auto font-medium'>It's about balancing flavors, textures, and colors to create harmony on the plate. With patience and passion, anyone can transform simple ingredients into a culinary masterpiece that delights both the palate and the soul.</p>
        </div>
      </section>
      <section className='grid lg:grid-cols-12'>
        <div className='grid lg:col-span-8'>
            <div className='lg:grid grid-cols-2 space-y-5'>
              {
                foods.map(fc =><Card handleCook={handleCook} foods = {fc}></Card>)
              }
            </div>
        </div>
        <div className='grid lg:col-span-4'>
            <div className='lg:mt-0 mt-5'>
              <div className="w-full bg-base-100 shadow-xl lg:p-5 p-2 rounded-2xl">
                    <div className="">
                    <h2 className="font-bold text-xl text-center">Want to cook:</h2>
                        <hr/>
                        <div className="flex justify-around lg:w-96 font-bold">
                            <p>Name</p>
                            <p>Time</p>
                            <p>Calories</p>
                        </div>
                        {
                          cook.map((item, index) =>(
                            <div className="flex justify-between bg-gray-200 items-center p-2">
                            <p>{index + 1}</p>
                            <p>{item.recipe_name}</p>
                            <p>{item.preparing_time}</p>
                            <p>{item.calories}</p>
                            <button onClick={()=>handlePrepar(item.recipe_id)} className=" rounded-full p-2 bg-[#0BE58A] font-medium">Preparing</button>
                        </div>
                          ))
                        }
                        <h2 className="text-center font-bold text-xl">Currently cooking:</h2>
                        <hr />
                        <div className="flex justify-between font-bold">
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
        </div>
      </section>
    </main>
    <footer className='lg:mt-10 mt-5'>
      <Footer></Footer>
    </footer>
    </>
  )
}

export default App
