import { Card } from "../Card/CardComponent"

export const CardList=props=>(
    <div>
        {props.monsters.map(monster=>
             <Card key={monster.id} monster={monster}/>   //passing monster into card component
             )}
        </div>

)