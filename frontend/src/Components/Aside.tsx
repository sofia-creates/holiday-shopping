const Aside = () => {
    let categories = ['Christmas Decorations', 'Ligthing', 'Home Decor', 'Kitchenware', 'Apparel', 'Electronics', 'Tableware', 'Home Fragrance'];

  return (
    <aside>
        <h2>Christmas products</h2>
        <h3>Filter</h3>
        
        <h4>Categories</h4>
        {categories.map((category: string)=>(
            <div>
                <input type="checkbox" name=""  value={category.replace(/\s+/g, '_').toLowerCase()} id="" />
                <label htmlFor="christmasDecor">{category}</label>
            </div>
        )
        )}

        <h4>Price</h4>
        <input type="checkbox" name="" id="" />
        <label htmlFor="">Hella expensive</label>

        <button>Apply filters</button>


    </aside>
  )
}

export default Aside