
import Card from './Card.jsx'

const HomeCards = () => {
  return (
        <section className="py-4">
        
        <div className="container-xl lg:container m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Card>
                <h2 className="text-2xl font-bold">for developers</h2>
                <p className="mt-2 mb-4">
                browse our react jobs and start your career today
                </p>
                <a
                href="/jobs.html"
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
                >
                browse jobs
                </a>
            </Card>
            <Card bg="bg-indigo-100">
                <h2 className="text-2xl font-bold">for employers</h2>
                <p className="mt-2 mb-4">
                list your job to find the perfect developer for the role
                </p>
                <a
                href="/add-job.html"
                className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
                >
                add job
                </a>
            </Card>
            </div>
        </div>
        </section>
    )
}

export default HomeCards