import { useState } from "react";
import { ShoppingBag, MessageCircle, PlusCircleIcon } from "lucide-react";
import MenuItem from "./MenuItem";
import { FaFolderOpen, FaHeart } from "react-icons/fa";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  return (
    <div
      className="
        w-full 
        p-4 
        rounded-2xl 
        shadow-lg 
       
        text-gray-800 dark:text-white
        sm:max-w-xs md:max-w-sm lg:max-w-md
        mx-auto flex flex-col gap-3
      "
    >
      <MenuItem icon={PlusCircleIcon} label="Add Movie" address="addMovie" />
      <MenuItem
        icon={FaFolderOpen}
        label="My Collection"
        address="myCollection"
      />
      <MenuItem icon={FaHeart} label="My Wishlist" address="myWishlist" />
    </div>
  );
};

export default UserMenu;
