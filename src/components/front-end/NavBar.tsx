import { useAppSelector } from "@/redux/hooks";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, {
  Dispatch,
  SetStateAction,
  useDeferredValue,
  useEffect,
  useRef,
  useState,
} from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { RiShoppingCartFill } from "react-icons/ri";
import MenuBar from "./MenuBar";
import Link from "next/link";
import axios from "axios";
import SearchList from "./SearchList";

interface PropsType {
  setShowCart: Dispatch<SetStateAction<boolean>>;
  showCart: boolean;
}
const NavBar = ({ setShowCart, showCart }: PropsType) => {
  const cartCount = useAppSelector((state) => state.cartReducer.length);
  const [inputText, setInputText] = useState<string>("");
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [searchedProd, setSearchedProd] = useState<any>([]);
  const debouncedValue = useDeferredValue(inputText);
  const { data: session, status } = useSession();
  const popUpRef = useRef(null);
  const List = [
    "My Account",
    "Orders",
    "Dashboard",
    "Setting",
    "Connect With Us",
  ];

  const handleMouseEnter = () => {
    if (session) {
      if (popUpRef.current) {
        setOpenPopup(false);
      } else {
        setOpenPopup(true);
      }
    }
  };

  useEffect(() => {
    if (debouncedValue.length > 1) {
      const payLoad = {
        freeText: debouncedValue,
      };
      axios
        .post(`/api/search_products`, payLoad)
        .then((res) => setSearchedProd(res.data))
        .catch((err) => console.log(err));
    } else {
      setSearchedProd([]);
    }
  }, [debouncedValue]);

  return (
    <div className="py-4 top-0 sticky bg-white z-20 shadow-subnav">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="text-4xl font-bold">
            <div className="w-[148px] h-[60px] rounded-lg relative overflow-hidden bg-gray ">
              <Link href={"/"}>
                <Image
                  src={"/images/ziara.png"}
                  alt="logo"
                  className="cursor-pointer"
                  fill
                />
              </Link>
            </div>
          </div>
          <div className="lg:flex hidden w-full max-w-[500px] rounded-lg shadow-subnav">
            <input
              type="text"
              className="px-6 py-2 w-full border-2 border-pink rounded-l-lg focus:outline-double text-[20px]"
              name="Search-bar"
              id="#Search"
              placeholder="Search for products"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <div className="bg-pink text-white text-[26px] grid place-items-center px-4 cursor-pointer rounded-r-lg">
              <BsSearch />
            </div>
            {Array.isArray(searchedProd) && searchedProd.length > 0 && (
              <div className="w-1/4 p-3 bg-gray rounded-lg absolute top-[80%] shadow-cardImage overflow-y-auto flex flex-col gap-3">
                {searchedProd.map((item: any) => (
                  <SearchList key={item._id} item={item} />
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-4 md:gap-8 items-center">
            <div
              className="md:flex hidden gap-3 cursor-pointer"
              onMouseEnter={() => {
                if (session) {
                  setOpenPopup(true);
                }
              }}
              onMouseLeave={() => setOpenPopup(false)}
            >
              <div className="rounded-full border-2 border-grayText text-grayText text-[32px] w-[50px] h-[50px] grid place-items-center drop-shadow-cart overflow-hidden">
                {session?.user?.image ? (
                  <img
                    className="w-full h-full object-cover"
                    src={session?.user?.image}
                    alt={session?.user?.name ?? "image"}
                  />
                ) : (
                  <Link href={"/login"}>
                    <AiOutlineUser className="" />
                  </Link>
                )}
              </div>
              <div className=" relative">
                <p className="text-grayText">
                  Hello, {session ? session.user?.name?.slice(0, 5) : "User"}
                </p>
                <p className="font-medium">Your Account</p>
                {openPopup && (
                  <MenuBar
                    setMenuPopup={setOpenPopup}
                    ref={popUpRef}
                    menu={List}
                    styles=" absolute top-[50px] -left-[50px]"
                  />
                )}
              </div>
            </div>
            <div
              className="text-darkGray text-[32px] relative cursor-pointer drop-shadow-cart"
              onClick={() => setShowCart(!showCart)}
            >
              <RiShoppingCartFill />
              {cartCount > 0 && (
                <div className="absolute top-[-15px] right-[-10px] text-[14px] bg-errText text-white w-[25px] h-[25px] grid place-items-center rounded-full ">
                  {cartCount}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
