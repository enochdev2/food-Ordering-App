type AddToCartButtons = {
  hasSizesOrExtras: Boolean;
  onClick: () => void;
  basePrice: number | string;
  image: string;
};

export default function AddToCartButton({
  hasSizesOrExtras,
  onClick,
  basePrice,
  image,
}: AddToCartButtons) {
  if (!hasSizesOrExtras) {
    return (
      <div className="flying-button-parent  md:mt-3">
        <button onClick={onClick}>Add to cart ${basePrice}</button>
      </div>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-4 bg-primary text-sm text-white rounded-full px-3 py-2"
    >
      <span>Add to cart (from ${basePrice})</span>
    </button>
  );
}
