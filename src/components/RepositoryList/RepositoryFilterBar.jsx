import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

const RepositoryFilterBar = ({
  filterOptions,
  setFilterOptions,
  setSearchKeyword,
}) => {
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

  const handleChangeText = keyword => {
    setSearchKeyword(keyword);
  };

  return (
    <React.Fragment>
      <Searchbar placeholder="Search" onChangeText={handleChangeText} />
      <Picker
        selectedValue={selectedFilter}
        onValueChange={itemValue => handleSelect(itemValue)}
      >
        <Picker.Item label="Latest repositories" value="LATEST" />
        <Picker.Item label="Highest rated repositories" value="HIGHEST_RATED" />
        <Picker.Item label="Lowest rated repositories" value="LOWEST_RATED" />
      </Picker>
    </React.Fragment>
  );
};

export default RepositoryFilterBar;
