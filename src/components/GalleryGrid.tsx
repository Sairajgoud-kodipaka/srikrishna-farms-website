
import { useState } from "react";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

const GalleryGrid = () => {
  const allImages: GalleryImage[] = [
    {
      id: "1",
      src: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
      alt: "Gir cows grazing in green pasture",
      category: "cows",
    },
    {
      id: "2",
      src: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
      alt: "Indigenous Gir cow with distinctive hump",
      category: "cows",
    },
    {
      id: "3",
      src: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
      alt: "Farm landscape with grazing cattle",
      category: "farm",
    },
    {
      id: "4",
      src: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
      alt: "Organic dairy products in traditional containers",
      category: "products",
    },
    {
      id: "5",
      src: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
      alt: "Traditional milking process",
      category: "farm",
    },
    {
      id: "6",
      src: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
      alt: "Fresh milk being poured into traditional earthen pot",
      category: "products",
    },
    {
      id: "7",
      src: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80",
      alt: "Traditional ghee preparation",
      category: "products",
    },
    {
      id: "8",
      src: "https://images.unsplash.com/photo-1596797038530-2c107229654b",
      alt: "Organic farm landscape",
      category: "farm",
    },
    {
      id: "9",
      src: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d",
      alt: "Farm workers caring for cows",
      category: "people",
    },
  ];

  const [images, setImages] = useState<GalleryImage[]>(allImages);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "cows", name: "Gir Cows" },
    { id: "farm", name: "Our Farm" },
    { id: "products", name: "Products" },
    { id: "people", name: "Our People" },
  ];

  const filterImages = (category: string) => {
    setActiveCategory(category);
    if (category === "all") {
      setImages(allImages);
    } else {
      const filtered = allImages.filter((img) => img.category === category);
      setImages(filtered);
    }
  };

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-full text-sm ${
              activeCategory === category.id
                ? "bg-green-dark text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => filterImages(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-105"
            onClick={() => openModal(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white text-3xl"
              aria-label="Close modal"
            >
              &times;
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <p className="text-white text-center mt-4">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
