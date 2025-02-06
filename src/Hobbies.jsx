function Hobbies({ title, logo, background, className }) {
    return (
        <div className={`relative card glass overflow-hidden shadow-lg hover:shadow-xl transition-shadow min-h-64 ${className}`} >
            <div className="absolute w-full h-full flex items-center transition-transform duration-300 ease-in-out justify-center">
                {background}
            </div>
            <div className="absolute flex flex-row gap-6 items-center p-6 bottom-0 left-0">
                <div className="flex items-center">
                    <div className="rounded-full border-2 border-blue-600 p-2 flex items-center justify-center">
                        {logo}
                    </div>
                </div>
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
        </div>
    );
}

export default Hobbies;