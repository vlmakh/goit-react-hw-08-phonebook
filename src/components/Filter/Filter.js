import { FilterWrap, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterChange } from 'redux/filter';
import { selectFilter } from 'redux/selectors';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilter = event => {
    dispatch(filterChange(event.currentTarget.value));
  };

  return (
    <FilterWrap>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilter}
        placeholder="Find contact by name"
      />
    </FilterWrap>
  );
}
