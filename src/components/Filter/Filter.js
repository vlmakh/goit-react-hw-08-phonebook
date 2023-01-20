import { FilterWrap, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterChange } from 'redux/filter';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

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
