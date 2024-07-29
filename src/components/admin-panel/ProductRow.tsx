import { IProduct } from "@/app/admin/dashboard/page";
import { setLoading } from "@/redux/features/loadingSlice";
import { setProduct } from "@/redux/features/productSlice";
import { useAppDispatch } from "@/redux/hooks";
import axios from "axios";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";

interface productRowProps {
  key: string;
  srNo: number;
  product: IProduct;
  setOpenPopUp: Dispatch<SetStateAction<boolean>>;
  setUpdateTable: Dispatch<SetStateAction<boolean>>;
}

const ProductRow = (props: productRowProps) => {
  const { key, srNo, product, setOpenPopUp, setUpdateTable } = props;
  const dispatch = useAppDispatch();
  const onEdit = async () => {
    dispatch(setProduct(product));
    setOpenPopUp(true);
  };

  const onDelete = async (id: any) => {
    const payLoad = {
      filekey: id,
    };
    dispatch(setLoading(true));
    await axios
      .delete("/api/uploadthing", { data: payLoad })
      .then((res) => console.log(res));
    await axios
      .delete(`/api/delete_product/${id}`)
      .then((res) => console.log("Successfully deleted"))
      .catch((err) => console.log(err, "Error occured"))
      .finally(() => (dispatch(setLoading(false)), setUpdateTable(true)));
  };
  return (
    <tr>
      <td>
        <div className=""> {srNo} </div>
      </td>
      <td>
        <div className=""> {product.name.slice(0, 20)} </div>
      </td>
      <td>
        <div className=""> $ {product.price}.00 </div>
      </td>
      <td>
        <div className="py-2 relative w-[40px] h-[40px]">
          <Image
            alt="product-image"
            src={product.imgSrc}
            // height={40}
            // width={40}
            fill
            className="object-cover"
          />
        </div>
      </td>
      <td>
        <div className="text-2xl flex items-center gap-2 text-grayText">
          <CiEdit
            onClick={onEdit}
            className="text-[20px] cursor-pointer hover:text-black"
          />
          <RiDeleteBin5Line
            onClick={() => onDelete(product._id)}
            className="text-[20px] cursor-pointer hover:text-pink"
          />
          {product.quantity}
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
