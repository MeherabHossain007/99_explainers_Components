import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <main className="pt-20">
        <div className="container mx-auto px-4 py-20">
          {[...Array(10)].map((_, index) => (
            <section key={index} className="my-16">
              <h2 className="text-2xl font-bold">Section {index + 1}</h2>
              <p className="mt-4 text-gray-600">
                This is some placeholder content for section {index + 1}. Scroll
                down to see more sections.
              </p>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
