var pokeCart = []

function addCart(poke_id){
    pokeCart.push(poke_id)
    cart_amount.innerHTML = pokeCart.length
    poke_purchase.innerHTML = `
        <form action="/poke_order" method="POST">
            <button>PURCHASE</button>
        </form>
        `
}



get_poke(1,151)

async function get_poke(param, param2=false){
    if(param2){
        for(let i = param;i<=param2; i++){
            get_poke_api(i)
        }
    }
    else{
        get_poke_api(param)
    }
}


async function get_poke_api(id){
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    let pokeData = await response.json()
    console.log(pokeData)
    console.log(pokeData.name)
    console.log(shop)
    shop.innerHTML += `
    <div id="pokeCard">
    <h3>${pokeData.name}</h3>
    <img src=${pokeData.sprites.front_shiny} alt=${pokeData.name}>
    <p>Price: $${pokeData.weight}</p>
    <button Onclick=addCart(${pokeData.id})> add to cart </button>
    </div>
    `
}

get_poke_api()