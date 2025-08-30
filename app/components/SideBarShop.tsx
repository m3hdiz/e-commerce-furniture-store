import { Checkbox } from "./ui/checkbox";

function SideBarShop() {
  return (
    <aside className="md:w-64.5 md:mx-auto mx-4 md:pr-5 md:mt-3">
      <p className="font-semibold text-Paragraph-Default md:pb-5 md:border-b border-neutral600 border-b-0 hidden md:block">
        Showing 120 items
      </p>
      <div>
        <div className="border-b py-4 border-neutral600 flex flex-col gap-3">
          <p className="font-semibold text-Paragraph-Default">Category</p>
          <label
            htmlFor="Dinnerware"
            className="flex items-center gap-2 text-Paragraph-Default"
          >
            <Checkbox id="Dinnerware" className="border" />
            Dinnerware
          </label>
          <label
            htmlFor="Ceramic"
            className="flex items-center gap-2 text-Paragraph-Default"
          >
            <Checkbox id="Ceramic" className="border" />
            Ceramic
          </label>
          <label
            htmlFor="Furniture"
            className="flex items-center gap-2 text-Paragraph-Default"
          >
            <Checkbox id="Furniture" className="border" />
            Furniture
          </label>
          <label
            htmlFor="DecorArt"
            className="flex items-center gap-2 text-Paragraph-Default"
          >
            <Checkbox id="DecorArt" className="border" />
            Decor Art
          </label>
          <label
            htmlFor="GiftSets"
            className="flex items-center gap-2 text-Paragraph-Default"
          >
            <Checkbox id="GiftSets" className="border" />
            Gifts Sets
          </label>
        </div>
        <div className="border-b border-neutral600 py-4 flex flex-col gap-3">
          <p className="font-semibold text-Paragraph-Default">Price Range</p>
          <label
            htmlFor="p0-10"
            className="flex items-center gap-2 text-Paragraph-Default"
          >
            <Checkbox id="p0-10" className="border" />
            $0 - $10
          </label>
          <label
            htmlFor="p10-50"
            className="flex items-center gap-2 text-Paragraph-Default"
          >
            <Checkbox id="p10-50" className="border" />
            $10 - $50
          </label>
          <label
            htmlFor="p50-100"
            className="flex items-center gap-2 text-Paragraph-Default"
          >
            <Checkbox id="p50-100" className="border" />
            $50 - $100
          </label>
          <label
            htmlFor="p100-200"
            className="flex items-center gap-2 text-Paragraph-Default"
          >
            <Checkbox id="p100-200" className="border" />
            $100 - $200
          </label>
          <label
            htmlFor="p200plus"
            className="flex items-center gap-2 text-Paragraph-Default"
          >
            <Checkbox id="p200plus" className="border" />
            &gt; $200
          </label>
        </div>
        <div className="border-b border-neutral600 py-4 flex flex-col gap-3">
          <p className="font-semibold text-Paragraph-Default">Color</p>
          <div className="flex gap-4">
            <div className="w-4 h-4 bg-white border"></div>
            <div className="w-4 h-4 bg-lightBrown border"></div>
            <div className="w-4 h-4 bg-[#ccd8ce] border"></div>
            <div className="w-4 h-4 bg-[#B4555D] border"></div>
            <div className="w-4 h-4 bg-[#9B92A1] border"></div>
          </div>
        </div>
        <div className="py-4 flex flex-col gap-3">
          <p className="font-semibold text-Paragraph-Default">Tags</p>
          <label
            htmlFor="tDinnerware"
            className="flex items-center gap-2 text-Paragraph-Default"
          >
            <Checkbox id="tDinnerware" className="border" />
            Dinnerware
          </label>
          <label
            htmlFor="tCeramic"
            className="flex items-center gap-2 text-Paragraph-Default"
          >
            <Checkbox id="tCeramic" className="border" />
            Ceramic
          </label>
          <label
            htmlFor="tFurniture"
            className="flex items-center gap-2 text-Paragraph-Default"
          >
            <Checkbox id="tFurniture" className="border" />
            Furniture
          </label>
          <label
            htmlFor="tDecorArt"
            className="flex items-center gap-2 text-Paragraph-Default"
          >
            <Checkbox id="tDecorArt" className="border" />
            Decor Art
          </label>
          <label
            htmlFor="tGiftSets"
            className="flex items-center gap-2 text-Paragraph-Default"
          >
            <Checkbox id="tGiftSets" className="border" />
            Gifts Sets
          </label>
        </div>
      </div>
    </aside>
  );
}

export default SideBarShop;
