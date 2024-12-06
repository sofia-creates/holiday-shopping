const Aside = () => {
    let categories = ['Christmas Decorations', 'Ligthing', 'Home Decor', 'Kitchenware', 'Apparel', 'Electronics', 'Tableware', 'Home Fragrance'];

  return (
    <aside>
        <h2>Christmas products</h2>
        <h3>Filter</h3>

        <h4>Categories</h4>

        {(categories.map((category:string)=>{
            <p>hej</p>
        })) }

       {categories ? ( categories.map((category: string)=>(
            <div>
                <input type="checkbox" name=""  value={category.replace(/\s+/g, '_').toLowerCase()} id="" />
                <label htmlFor="christmasDecor">{category}</label>
            </div>)
            ) : (
        <p>No categories found.</p>
       )}

        <div>
            <input type="checkbox" name=""  value="christmasDecor" id="" />
            <label htmlFor="christmasDecor">Christmas decorations</label>
        </div>

        <div>
            <input type="checkbox" name=""  value="lighting" id="" />
            <label htmlFor="lighting">Lighting</label>
        </div>

        <div>
            <input type="checkbox" name=""  value="homeDecor" id="" />
            <label htmlFor="lighting">Home decor</label> 
        </div>

        <div>
            <input type="checkbox" name=""  value="kitchenware" id="" />
            <label htmlFor="kitchenware">Kitchenware</label>
        </div>

        <div>
            <input type="checkbox" name=""  value="apparel" id="" />
            <label htmlFor="apparel">Apparel</label>
        </div>

        <div>
            <input type="checkbox" name=""  value="electronics" id="" />
            <label htmlFor="electronics">Electronics</label>
        </div>

        <div>
            <input type="checkbox" name=""  value="homeFragrance" id="" />
            <label htmlFor="homeFragrance">Home Fragrance</label>
        </div>


        <h4>Price</h4>
        <input type="checkbox" name="" id="" />
        <label htmlFor="">Hella expensive</label>

        <button>Apply filters</button>


    </aside>
  )
}

export default Aside