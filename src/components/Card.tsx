type SeminarCardProps = {
    profileImage: string;
    seminarImage: string;
    title: string;
    description: string;
    link: string;
};

export default function SeminarCard({
    profileImage,
    seminarImage,
    title,
    description,
    link,
}: SeminarCardProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 relative mb-10 w-96 border">
            {/* Profile Picture Container */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                    src={profileImage}
                    alt={`Profile picture of the keynote speaker for ${title}`}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Seminar Image */}
            <div className="flex flex-col items-center mt-12">
                <img
                    src={seminarImage}
                    alt={`Image of a seminar on ${title}`}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p className="text-gray-700 mb-4 line-clamp-2">{description}</p>
                <a href={link} className="text-blue-600 hover:underline">
                    Learn More
                </a>
            </div>
        </div>
    );
}
