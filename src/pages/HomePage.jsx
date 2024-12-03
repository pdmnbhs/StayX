import { Link } from "react-router-dom"
import Layout from "../Layout"

const hotels = [
    { id: 1, name: "Hotel 1" },
    { id: 2, name: "Hotel 2" },
    { id: 3, name: "Hotel 3" },
    { id: 4, name: "Hotel 4" },
    { id: 5, name: "Hotel 5" },
    { id: 6, name: "Hotel 6" },
    { id: 7, name: "Hotel 7" },
    { id: 8, name: "Hotel 8" }
]

export default function HomePage() {
    return (
        <Layout>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {
                    hotels.map(({ id, name }) => (
                        <Link to={`/hotel/${id}`} key={id}>
                            <div className="bg-slate-600 h-24 rounded-md flex justify-center items-center">
                                <div>{name}</div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </Layout>
    )
}