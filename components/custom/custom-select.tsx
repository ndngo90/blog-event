import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
const years = ['2023', '2024'];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const CustomSelect = ({ type }: { type: string }) => {
  if (type === 'year') {
    return (
      <Select name={type}>
        <SelectTrigger className="sm:w-[180px] w-full ml-0 sm:ml-[0.75rem]">
          <SelectValue placeholder="Year" />
        </SelectTrigger>
        <SelectContent>
          {years.map((year) => {
            return (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    );
  }
  return (
    <Select name={type}>
      <SelectTrigger className="sm:w-[180px] w-full">
        <SelectValue placeholder="Month" />
      </SelectTrigger>
      <SelectContent>
        {months.map((month, index) => {
          return (
            <SelectItem key={month} value={String(index + 1)}>
              {month}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
export default CustomSelect;
