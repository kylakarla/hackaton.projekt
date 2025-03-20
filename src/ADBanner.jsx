import { useState, useEffect } from "react";

const AdBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Kuvab reklaami 4 sekundi pärast
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    return () => clearTimeout(timer); // Tühistab taimeri kui komponent eemaldatakse
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center p-4">
      {isVisible && (
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg flex items-center gap-4 transform transition-transform duration-500">
          <div>
            <a href="https://www.tellitoit.ee/tartu-linn/yellow-chilli?lang=et" target="_blank">
            <p className="text-lg font-bold">SPECIAL OFFER!</p>
            <p className="text-sm">冰淇淋我很喜欢冰淇淋但是速度与激情9 比冰淇淋速度与激情速度与激情9 我最喜欢所以</p>
            </a>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="bg-red-500 px-4 py-2 rounded-md text-white cursor-pointer"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default AdBanner;
