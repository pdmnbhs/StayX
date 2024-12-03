import { useParams } from "react-router-dom"
import Layout from "../Layout"

export default function HotelPage() {
    const { id } = useParams()

    return (
        <Layout>
            <div className="px-4">
                Hotel {id}
            </div>
        </Layout>
    )
}