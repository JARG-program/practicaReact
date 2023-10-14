import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App(){
    


    return(
        <section className='App'>
        <TwitterFollowCard   userName="AngelReyesGtz">
            Angel Reyes GTZ
        </TwitterFollowCard>

        <TwitterFollowCard  userName='FranciscoReyes'>
            Francisco Reyes
        </TwitterFollowCard>

        <TwitterFollowCard  userName='AlejandraCs'>
            Alejandra Casto Sopa
        </TwitterFollowCard>

        </section>
    )
}
