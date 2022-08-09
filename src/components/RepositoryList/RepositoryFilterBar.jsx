import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

const RepositoryFilterBar = ({ filterOptions, setFilterOptions }) => {
  const [selectedFilter, setSelectedFilter] = useState(filterOptions.value);

  const handleSelect = selectedItem => {
    setSelectedFilter(selectedItem);
    switch (selectedItem) {
      case 'HIGHEST_RATED':
        setFilterOptions({
          value: selectedItem,
          order: 'RATING_AVERAGE',
          direction: 'DESC',
        });
        break;
      case 'LOWEST_RATED':
        setFilterOptions({
          value: selectedItem,
          order: 'RATING_AVERAGE',
          direction: 'ASC',
        });
        break;
      default:
        setFilterOptions({
          value: selectedItem,
          order: 'CREATED_AT',
          direction: 'DESC',
        });
        break;
    }
  };

  return (
    <Picker
      selectedValue={selectedFilter}
      onValueChange={itemValue => handleSelect(itemValue)}
    >
      <Picker.Item label="Latest repositories" value="LATEST" />
      <Picker.Item label="Highest rated repositories" value="HIGHEST_RATED" />
      <Picker.Item label="Lowest rated repositories" value="LOWEST_RATED" />
    </Picker>
  );
};

export default RepositoryFilterBar;
