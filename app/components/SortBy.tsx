import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type SortByProps = {
  value: "Name" | "Price" | "Brand";
  onChange: (val: "Name" | "Price" | "Brand") => void;
};

export default function SortBy({ value, onChange }: SortByProps) {
  return (
    <Select
      onValueChange={(val) => onChange(val as "Name" | "Price" | "Brand")}
    >
      <SelectTrigger className="max-w-[90px] md:max-w-[120px]  border-0 -mt-20 md:mt-0 ">
        <SelectValue placeholder="Name" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Name">Name</SelectItem>
          <SelectItem value="Price">Price</SelectItem>
          <SelectItem value="Brand">Brand</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
