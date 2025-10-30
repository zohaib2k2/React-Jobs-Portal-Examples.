
const Card = ({ children, bg='bg-gray-100' }) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md hover:shadow-2xl hover:shadow-blue-300 hover:-translate-y-2 transition-all duration-300 ease-in-out`}>
        {children}
    </div>
  )
}

export default Card