import Navbar from "@/components/Navbar";
import SeminarCard from "@/components/Card";

export default function Page() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Navbar Section */}
      <Navbar />

      <div className="w-full flex flex-col gap-16">
        {/* Background Image Section */}
        <div className="w-full h-40 border">
          <img
            src="#"
            alt="Bg IdSpora"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Seminar Cards Section */}
        <div className="flex flex-wrap gap-4 justify-center">
          <SeminarCard
            profileImage="https://placehold.co/96x96"
            seminarImage="https://placehold.co/300x200"
            title="Web Development Seminar"
            description="Learn the latest trends and technologies in web development."
            link="#"
          />

          <SeminarCard
            profileImage="https://placehold.co/96x96"
            seminarImage="https://placehold.co/300x200"
            title="UI/UX Design Trends"
            description="Discover the latest innovations in UI/UX design."
            link="#"
          />

          <SeminarCard
            profileImage="https://placehold.co/96x96"
            seminarImage="https://placehold.co/300x200"
            title="Rest API"
            description="How to create Rest API using Node.js and Express.js"
            link="#"
          />
        </div>
      </div>
    </div>
  );
}
