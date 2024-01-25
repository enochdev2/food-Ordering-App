import { CartContext } from "@/components/AppContext";
import MenuItemTile from "@/components/menu/MenuItemTile";
import { FormInfo } from "@/interface";
import Image from "next/image";
import { ChangeEvent, useContext, useState } from "react";
import toast from "react-hot-toast";

export default function MenuItem(menuItem: FormInfo) {
  const { image, name, description, basePrice, sizes, extraIngredientPrices } =
    menuItem;
  const [selectedSize, setSelectedSize] = useState<any>(sizes?.[0] || null);
  const [selectedExtras, setSelectedExtras] = useState<any>([]);
  const [showPopup, setShowPopup] = useState(false);
  const { addToCart } = useContext(CartContext) as any;

  async function handleAddToCartButtonClick() {
    const hasOptions = sizes.length > 0 || extraIngredientPrices.length > 0;
    if (hasOptions && !showPopup) {
      setShowPopup(true);
      return;
    }
    addToCart(menuItem, selectedSize, selectedExtras);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setShowPopup(false);
  }
  function handleExtraThingClick(
    ev: ChangeEvent<HTMLInputElement>,
    extraThing: any
  ) {
    const checked = ev.target.checked;
    if (checked) {
      setSelectedExtras((prev: any) => [...prev, extraThing]);
    } else {
      setSelectedExtras((prev: any) => {
        return prev.filter((e: any) => e.name !== extraThing.name);
      });
    }
  }

  let selectedPrice = basePrice;
  if (selectedSize) {
    selectedPrice += selectedSize.price;
  }
  if (selectedExtras?.length > 0) {
    for (const extra of selectedExtras) {
      selectedPrice += extra.price;
    }
  }

  return (
    <>
      {showPopup && (
        <div
          onClick={() => setShowPopup(false)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center"
        >
          <div
            onClick={(ev) => ev.stopPropagation()}
            className="my-8 bg-white p-2 rounded-lg max-w-md"
          >
            <div className=" menuItem overflow-y-scroll p-2">
              <div className=" relative w-full h-[200]">
                <Image src={image} alt={name} fill className="mx-auto" />
              </div>
              <h2 className="text-lg font-bold text-center mb-2">{name}</h2>
              <p className="text-center text-gray-500 text-sm mb-2">
                {description}
              </p>
              {sizes?.length > 0 && (
                <div className="py-2">
                  <h3 className="text-center text-gray-700">Pick your size</h3>
                  {sizes?.map((size: any) => (
                    <label
                      key={size._id}
                      className="flex items-center gap-2 p-4 border rounded-md mb-1"
                    >
                      <input
                        type="radio"
                        onChange={() => setSelectedSize(size)}
                        checked={selectedSize?.name === size.name}
                        name="size"
                      />
                      {size.name} ${basePrice + size.price}
                    </label>
                  ))}
                </div>
              )}
              {extraIngredientPrices?.length > 0 && (
                <div className="py-2">
                  <h3 className="text-center text-gray-700">Any extras?</h3>
                  {extraIngredientPrices.map((extraThing: any) => (
                    <label
                      key={extraThing._id}
                      className="flex items-center gap-2 p-4 border rounded-md mb-1"
                    >
                      <input
                        type="checkbox"
                        onChange={(ev) => handleExtraThingClick(ev, extraThing)}
                        checked={selectedExtras
                          .map((e: any) => e._id)
                          .includes(extraThing._id)}
                        name={extraThing.name}
                      />
                      {extraThing.name} +${extraThing.price}
                    </label>
                  ))}
                </div>
              )}
              {/* <FlyingButton
                targetTop={'5%'}
                targetLeft={'95%'}
                src={image}>
              </FlyingButton> */}
              <button title="button" onClick={handleAddToCartButtonClick}>
                Add to cart ${selectedPrice}
              </button>
              <div className="primary sticky bottom-2"></div>
              <button
                title="button"
                className="mt-2"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <MenuItemTile onAddToCart={handleAddToCartButtonClick} {...menuItem} />
    </>
  );
}
