export const ProductList = () =>{
    const products=[
        {
            id:1,
            name:"Tea",
            price:99,
        },
        {
            id:2,
            name:"Fruits",
            price:299,
        },{
            id:3,
            name:"Sweets",
            price:299,
        }
    ]
    return(
        <div>
            <h2>Our Products</h2>
            {
                products.map((products) =>{
                    return(
                        <div>
                            <h3>{products.name}</h3>
                            <p>Price:{products.price}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}