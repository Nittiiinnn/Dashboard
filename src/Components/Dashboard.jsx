import Cards from "./Cards"
import UseYt from "../Hooks/UseYt"
import { FaYoutube, FaLinkedin,FaInstagram} from "react-icons/fa"
function Dashboard() {
    
     const apikey = import.meta.env.VITE_YOUTUBE_API_KEY
     const channelId = import.meta.env.VITE_YOUTUBE_CHANNEL_ID

    const {stats,error} = UseYt(channelId,apikey)
  return (
    <>
        <div className="space-y-6 px-4 md:px-8  bg-white dark:bg-gray-900 dark:text-gray-200 min-h-screen">
            <h1 className="pt-4 md:pt-10 text-3xl font-bold text-gray-800 dark:text-gray-100">Hey Nitin!</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Cards
                title={"Youtube"}
                value={"Subscribe"}
                color={"red"}
                url = "https://www.youtube.com/@nitinbaluni664"
                stats = {stats}
                image={<FaYoutube className="text-red-500 dark:text-red-500 w-25 h-25 " />}
            />
            <Cards
                title={"Linkedin"}
                value={"Connect"}
                color={"gray"}
                url = "https://www.linkedin.com/in/nitin-baluni-9a68702a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                image={<FaLinkedin className="text-blue-700 dark:text-blue-700 w-25 h-25" />}
            />
            <Cards
                title={"X"}
                value={"Follow"}
                color={"blue"}
                url = "https://x.com/baluninitin06?s=09"
                image={<svg className="h-25 w-25" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>}
            />
            <Cards
                title={"Instagram"}
                value={"Follow"}
                color={"pink"}
                url = "https://www.instagram.com/nitin_baluni_/?utm_source=qr&igsh=MWNndjE1djA0b3V4Zw%3D%3D#"
                image={<FaInstagram className="text-pink-500 dark:text-pink-500 w-25 h-25" />}
            />

        </div>
        </div>    
    </>
  )
}

export default Dashboard