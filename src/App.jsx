import { useEffect, useState } from 'react';
import Banner from './components/IndexFile/Banner'
import Card from './components/IndexFile/Card'
import Header from './components/IndexFile/Header'
import Footer from './components/IndexFile/Footer';
import Cooks from './components/IndexFile/Cooks';

function App() {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    fetch("FakeData.json")
    .then(res => res.json())
    .then(data =>{
      setFoods(data)
    })
  },[])
  

  return (
    <>
    <header className='container mx-auto'>
      <Header></Header>
    </header>
    <main className='container mx-auto lg:mt-10 mt-5'>
      <section>
        <Banner></Banner>
      </section>
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
                foods.map(fc =><Card foods = {fc}></Card>)
              }
            </div>
        </div>
        <div className='grid lg:col-span-4'>
            <div className='lg:mt-0 mt-5'>
                <Cooks></Cooks>
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
