import { useEffect ,useState} from "react";
import Banner from "../components/home/Banner";
import RecipeCards from "../components/cards/RecipeCards";
import CategoryCards from "../components/cards/CategoryCards";

export default function Home() {
const [recipes,setRecipes]=useState();
const [categories,setCategories]=useState();

  // useEffect(()=>{
  //   fetch(`http://localhost:3000/recipes`)
  //   .then((res)=>res.json())
  //   .then((data)=>setRecipes(data));
  // },[])

  async function load(){
    const recipesres=await fetch("http://localhost:3000/recipes");
    const recipesdata=await recipesres.json();
    console.log(recipesdata);
    setRecipes(recipesdata);
    const categoryres=await fetch("http://localhost:3000/categories");
    const categoriesdata=await categoryres.json();
    console.log(categoriesdata);
    setCategories(categoriesdata);
  }
  load();

  // useEffect(()=>{
  //   fetch(`http://localhost:3000/categories`)
  //   .then((res)=>res.json())
  //   .then((data)=>setCategories(data));
  // },[])
  
  console.log("hi");
    return (
      <>
      <Banner/>
      <div className="px-16">
      <h1 className="text-4xl my-20 text-center">Our newest recipes</h1>
        <div className="grid grid-cols-4 gap-6">
         {categories?.map((category)=>(
         <CategoryCards key={category?.id} category={category}/>))}
        </div>
        <div className="mx-16">
        <h1 className="text-4xl my-20 text-center">Our newest recipes</h1>
        <div className="grid grid-cols-4 gap-6">
          {
            recipes?.reverse()?.slice(0,4)?.map(recipe=><RecipeCards key={recipe?.id} recipe={recipe}/>)
          }
          </div>
        </div>
      </div>
      </>
    );
}

