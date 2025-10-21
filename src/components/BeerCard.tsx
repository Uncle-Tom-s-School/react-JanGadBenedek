export type Beer = {
  image: string,
  name: string,
  abv: string,
  volume: string,
  price: number,
  available: boolean
}

const BeerCard = (props: Beer) => {
  return (
    <div className='beerCard'>
      <img src={props.image}/>
      <div>
      <strong>{props.name} {props.abv} {props.volume}</strong>
      </div>
      <span>{props.price} Ft</span>
      <div>
        {props.available ? <p className="available">Raktáron</p> : <p className="notAvailable">Nincs raktáron</p>}
      </div>
    </div>
  )
}

export default BeerCard