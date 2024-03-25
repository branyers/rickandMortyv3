export const Card = ({Characters}) => {
    const {name, status, species, location, origin,image} = Characters;
    const statusClassName = status === 'Alive' ? 'bg-green-500' : status === 'unknown' ? 'bg-gray-500' : 'bg-red-500';
    return (
     <section className="bg-BackgroudCardColor h-52 max-h-64 min-w-[600px]  w-1/3 flex mx-5 rounded-md">
        <img className="rounded-l-md object-cover min-h-40 w-40" src={image} alt="" />

        <div className="ml-3 mt-1 flex-col">
            <h1 className="text-white text-3xl font-bold">{name}</h1>
            <div className={`w-3 h-3 rounded-full inline-block ${statusClassName}`}></div>
            <span className="text-white ml-2">{status} - {species}</span>

            <div className="mt-3">
                <p className="text-gray-500">Last known location:</p>
                <span className="text-white">{location.name}</span>
            </div>

            <div className="mt-3">
                <p className="text-gray-500">First seen in:</p>
                <span className="text-white">{origin.name}</span>
            </div> 
        </div>
    </section>
    )
}