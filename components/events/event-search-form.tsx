'use client';
import { Button } from '@/components/ui/button';
import CustomSelect from '../custom/custom-select';
import { usePathname, useRouter } from 'next/navigation';

const EventSearchForm = () => {
  const router = useRouter();
  const pathname = usePathname();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const year = (formData.get('year') as string) || '';
    const month = (formData.get('month') as string) || '';
    if (!year && !month) {
      return;
    }
    const link = pathname + `/${year}/${month}`;
    router.push(link);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-y-4 sm:flex-row sm:items-center w-[90vw] mx-auto sm:gap-x-4"
    >
      <CustomSelect type="year" />
      <CustomSelect type="month" />
      <Button type="submit" className="sm:self-end">
        Submit
      </Button>
    </form>
  );
};
export default EventSearchForm;
