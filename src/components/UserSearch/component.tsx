import UserCard from '@/components/UserCard/component';
import { useFetchUserSearchQuery } from '@/store/services/usersApi';

import { debounce } from 'lodash';
import { useCallback, useEffect, useState } from 'react';

import { Users } from '@/types';
import { useRouter, useSearchParams } from 'next/navigation';
import Box from '../common/Box';
import { Button } from '../common/Button';
import { Grid } from '../common/Grid';
import GridItem from '../common/GridItem/component';
import { InfiniteScroll } from '../common/InfiniteScroll';
import { TextField } from '../common/TextField';
import { Typography } from '../common/Typography';
import styles from './component.module.scss';

interface UserSearchProps {
    settings: any;
    clearHandler: () => void;
    nationalities: string[];
    gender: string;
    favorites: Users[];
    favoritesHandler: (isFavorite: boolean, user: Users) => void;
}

const UsersSearchComponent: React.FC<UserSearchProps> = ({ settings, clearHandler, nationalities, gender, favorites, favoritesHandler}) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    /* const [nationalities, setNationalities] = useState<string[]>([]);
    const [gender, setGender] = useState<string>('all'); */
    const [searchTermDirty, setSearchTermDirty] = useState<boolean>(false);
    const [listUsers, setListUsers] = useState<any[]>([]);
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

    const [nextPage, setNextPage] = useState(1);
    const router = useRouter();
    const searchParams = useSearchParams()
    const { menuOpened } = settings;

    const { data, isLoading, isFetching, refetch } = useFetchUserSearchQuery({
        name: debouncedSearchTerm,
        filter: { nextPage, nationalities, gender }
    }, {refetchOnMountOrArgChange: true});

    useEffect(() => {
      const queryValue = searchParams.get('q') as string;
      if (queryValue) {
        setSearchTerm(queryValue);
        setDebouncedSearchTerm(queryValue);
      }
  }, [searchParams]);
    useEffect(() => {

        if (data?.data) {
            setListUsers(prevRepos => [...prevRepos, ...data.data]);
        }
    }, [data]);
    const clearFilterAndRefetchData = () => {
      setListUsers([]);
      clearHandler();
    }
    const debounceSearchTermUpdate = useCallback(
        debounce(searchValue => {
            setListUsers([]);
            setDebouncedSearchTerm(searchValue);
            let urlParams = searchValue !== '' ? `/?q=${encodeURIComponent(searchValue)}` : `/`
            router.push(urlParams);
            setNextPage(1);
        }, 500),
        []
    );

    useEffect(() => {
        if (searchTermDirty) {
            debounceSearchTermUpdate(searchTerm);
            return () => {
                debounceSearchTermUpdate.cancel();
            };
        }
    }, [searchTerm, debounceSearchTermUpdate, searchTermDirty]);

    const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
        event => {
            setSearchTerm(event.target.value);
            !searchTermDirty && setSearchTermDirty(true);
        },
        [searchTermDirty]
    );

    const loadMoreItems = () => {
        if (!isLoading && !isFetching && data?.moreData) {
            setNextPage(data?.nextPage);
        }
    };

    return (
        <>
            <Box className={`${styles.userSearchWrapper} ${menuOpened ? styles.menuOpened : ''}`}>
                <TextField
                    label={'Search Users'}
                    placeholder="Search Users"
                    name="searchTerm"
                    value={searchTerm}
                    onChange={e => {
                        handleSearchChange(e);
                    }}
                />
                <Box flex justifyContent="space-between">
                    {(nationalities.length > 0 || gender !== 'all') ? (
                        <>
                            <Box flex>
                              {nationalities.length > 0 && <Typography style={{marginRight: '1rem'}}><strong>Nationalities:</strong> {nationalities.toString()}</Typography>}
                              {gender != 'all' && <Typography><strong>Gender:</strong> {gender}</Typography>}
                            </Box>
                            <Box>
                                <Button variant="link" onClick={clearFilterAndRefetchData} style={{marginRight: '0.5rem'}}>
                                    Clear
                                </Button>
                                <Button variant="link" onClick={() => router.push('/settings')}>
                                    Manage
                                </Button>
                            </Box>
                        </>
                    ) : (
                        <>
                            <Typography>No filters selected...</Typography>
                            <Box>
                                <Button variant="link" onClick={() => router.push('/settings')}>
                                    Add Filters
                                </Button>
                            </Box>
                        </>
                    )}
                </Box>
            </Box>
            <Box flex justifyContent="center" style={{ marginTop: '8rem' }}>
                <InfiniteScroll hasMore={data?.moreData} loadMore={loadMoreItems} isLoading={isLoading || isFetching}>
                    <Grid
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                        gap="10px"
                        flexWrap="wrap"
                        style={{
                            maxWidth: '88rem',
                        }}
                    >
                        {listUsers.map((user, idx) => {
                            const favoriteUser = favorites.find((favUser: Users) => favUser.id === user.id);
                            return (
                                <GridItem key={`user-card-${idx}`} flexGrow={1}>
                                    <UserCard user={{...user, isFavorite: !!favoriteUser}} handler={favoritesHandler}  />
                                </GridItem>
                            );
                        })}
                    </Grid>
                    {(!isLoading && !isFetching) && data?.data.length === 0 && !data?.moreData && <Typography style={{marginTop: "0.5rem"}}>No data available...</Typography>}
                    {(!isLoading && !isFetching) && data?.data.length !== 0 && !data?.moreData && <Typography style={{marginTop: "0.5rem"}}>you reach the end of the data...</Typography>}
                </InfiniteScroll>
            </Box>
        </>
    );
};

export default UsersSearchComponent;
