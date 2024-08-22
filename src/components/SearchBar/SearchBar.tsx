import { FormEvent } from 'react';
import { toast } from 'react-hot-toast';
import { IoSearch } from 'react-icons/io5';
import css from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const entryField = e.currentTarget.elements.namedItem('query') as HTMLInputElement;
    const query = entryField.value.trim();

    if (query === '') {
      toast.error('The form field must be filled in!', {
        duration: 2000,
        position: 'top-center',
        style: {
          background: 'orange',
          color: 'black',
        },
      });
      return;
    }

    onSubmit(query);
    e.currentTarget.reset();
  };

  return (
    <header className={css.contHeader}>
      <form onSubmit={handleSubmit}>
        <div className={css.contInput}>
          <button className={css.searchBtn} type="submit">
            <IoSearch className={css.searchIcon} size={25} />
          </button>
          <input
            className={css.inputText}
            type="text"
            name="query"
            placeholder="Search images..."
          />
        </div>
      </form>
    </header>
  );
}
