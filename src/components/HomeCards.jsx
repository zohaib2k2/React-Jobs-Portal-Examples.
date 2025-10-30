
import Card from './Card.jsx'
import {Link} from 'react-router-dom'
const HomeCards = () => {
  return (
        <section className="py-4">
        
        <div className="container-xl lg:container m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Card className="hover:shadow-2xl hover:shadow-blue-500 hover:-translate-y-2 transition-all duration-300 ease-in-out">
                <h2 className="text-2xl font-bold">for developers</h2>
                <p className="mt-2 mb-4">
                browse our react jobs and start your career today
                </p>
                <Link
                to="/jobs"
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
                >
                browse jobs
                </Link>
            </Card>
            <Card bg="bg-indigo-100">
                <h2 className="text-2xl font-bold">for employers</h2>
                <p className="mt-2 mb-4">
                list your job to find the perfect developer for the role
                </p>
                <Link
                to="/add-job"
                className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
                >
                add job
                </Link>
            </Card>
            </div>
        </div>
        </section>
    )
}

export default HomeCards