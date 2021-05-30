import { useCallback, useState, useEffect } from 'react';
import { debounce } from 'lodash';
import PropTypes from 'prop-types';

import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { API_SEARCH } from '@constants/api';
import { getApiResource } from '@utils/network';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';

import SearchPageInfo from '@components/SearchPage/SearchPageInfo';
import UiInput from '@ui/UiInput';

import styles from './SearchPage.module.css';

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState('');
  const [people, setPeople] = useState([]);

  const getResponse = async (params) => {
    const res = await getApiResource(API_SEARCH + params);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          id,
          name,
          img,
        };
      });

      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResponse('');
  }, []);

  const debouncedGetResponse = useCallback(
    debounce((value) => getResponse(value), 500),
    [],
  );

  const handleChangeInput = (value) => {
    setInputSearchValue(value);
    debouncedGetResponse(value);
  };

  return (
    <>
      <h1 className="header__text">Search</h1>

      <UiInput
        value={inputSearchValue}
        handleChangeInput={handleChangeInput}
        placeholder="Input characters name"
        classes={styles.input__search}
      />

      <SearchPageInfo people={people} />
    </>
  );
};

SearchPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPage);
