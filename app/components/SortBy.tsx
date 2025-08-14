import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function SortBy() {
  return (
    <Select>
      <SelectTrigger className="max-w-[120px] border-0">
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
