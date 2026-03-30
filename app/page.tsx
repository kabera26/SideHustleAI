"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Button = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${className}`}
  >
    {children}
  </button>
);

export default function EretoMara() {
  return (
    <div className="font-sans text-white bg-[#0b0b0b]">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <Image
          src="/images/mara1.jpg"
          alt="Mara"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Ereto Mara Paradise Camp
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl mb-8 text-gray-200"
          >
            Where Comfort Meets the Wild Heart of Maasai Mara
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 flex-wrap justify-center"
          >
            <Button
              onClick={() => window.open("https://wa.me/27827411645")}
              className="bg-white text-black hover:scale-105"
            >
              Book via WhatsApp
            </Button>

            <Button className="border border-white text-white hover:bg-white hover:text-black">
              Explore Experience
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 px-6 text-center max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-semibold mb-6">
          A True Mara Experience
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Nestled near the iconic Maasai Mara, Ereto Mara Paradise Camp offers
          an authentic yet comfortable escape into nature. From peaceful sunsets
          to warm hospitality, every moment here feels like home in the wild.
        </p>
      </motion.section>

      {/* FEATURES */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8 px-6 pb-24 max-w-6xl mx-auto"
      >
        {[
          "Warm & Welcoming Staff",
          "Comfortable & Clean Stay",
          "Close to Maasai Mara",
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white/5 rounded-2xl backdrop-blur-lg border border-white/10"
          >
            <h3 className="text-2xl font-semibold mb-4">{item}</h3>
            <p className="text-gray-400">
              Enjoy {item.toLowerCase()} that makes every stay unforgettable.
            </p>
          </motion.div>
        ))}
      </motion.section>

      {/* EXPERIENCE */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 px-6 text-center max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-semibold mb-12">Stay Your Way</h2>

        <div className="grid md:grid-cols-2 gap-10">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/tent.jpg"
              alt="Tent"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">🏕️ Bring Your Own Tent</h3>
              <p className="text-gray-400">
                Camp under the stars in a safe and scenic environment.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/campfire.jpg"
              alt="Campfire"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">🔥 Campfire Nights</h3>
              <p className="text-gray-400">
                Enjoy cozy evenings filled with warmth, stories, and stunning sunsets.
              </p>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* TESTIMONIALS */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-24 px-6 text-center bg-white/5"
      >
        <h2 className="text-4xl font-semibold mb-10">What Guests Love</h2>

        <div className="max-w-3xl mx-auto space-y-6 text-gray-300 italic">
          <p>
            “Amazing place! We stayed longer because it felt like home. The staff is super welcoming and helpful.”
          </p>
          <p>
            “Nice place to camp. Staff even gifted us fruits when we forgot ours — incredible hospitality.”
          </p>
          <p>
            “Fantastic camp. Clean, comfortable, affordable, and very close to Maasai Mara.”
          </p>
        </div>
      </motion.section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-semibold mb-6">
          Ready for Your Mara Escape?
        </h2>

        <Button
          onClick={() => window.open("https://wa.me/27827411645")}
          className="bg-white text-black text-lg px-8 py-4 hover:scale-105"
        >
          Book Now on WhatsApp
        </Button>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500">
        Ereto Mara Paradise Camp © 2026
      </footer>
    </div>
  );
}