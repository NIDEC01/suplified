import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSecureForm } from "@/hooks/useSecureForm";
import { searchValidation } from "@/lib/security";

interface SearchFormProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchForm = ({ onSearch, placeholder = "Search suppliers..." }: SearchFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useSecureForm({
    schema: searchValidation,
    rateLimitKey: 'search',
    onSubmit: (data) => {
      onSearch(data.query);
    },
  });

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
      <div className="flex-1">
        <Input
          {...register('query')}
          placeholder={placeholder}
          className="w-full"
          aria-describedby={errors.query ? 'search-error' : undefined}
        />
        {errors.query && (
          <p id="search-error" className="text-sm text-destructive mt-1">
            {typeof errors.query.message === 'string' ? errors.query.message : 'Invalid input'}
          </p>
        )}
      </div>
      <Button type="submit" size="icon" variant="default">
        <Search className="h-4 w-4" />
        <span className="sr-only">Search</span>
      </Button>
    </form>
  );
};

export default SearchForm;