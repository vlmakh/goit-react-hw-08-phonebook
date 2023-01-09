import { Input } from './Filter.styled';
import { Box } from 'components/Box/Box';
import { useSelector, useDispatch } from 'react-redux';
import { filterChange } from 'redux/filter';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);

  const handleFilter = event => {
    dispatch(filterChange(event.currentTarget.value));
  };

  return (
    <Box py={1} px={2}>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilter}
        placeholder="Find contact by name"
      />
    </Box>
  );
}
