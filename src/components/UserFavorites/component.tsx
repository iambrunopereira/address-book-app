import UserCard from '@/components/UserCard/component';
import { useFetchUserSearchQuery } from '@/store/services/usersApi';

import { debounce } from 'lodash';
import { useCallback, useEffect, useState } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';
import Box from '../common/Box';
import { Button } from '../common/Button';
import { Grid } from '../common/Grid';
import GridItem from '../common/GridItem/component';
import { InfiniteScroll } from '../common/InfiniteScroll';
import { TextField } from '../common/TextField';
import { Typography } from '../common/Typography';
import styles from './component.module.scss';
import { Users } from '@/types';

interface UserFavoritesProps {
    favorites: Users[];
    favoritesHandler: (isFavorite: boolean, repositoryInfo: Users) => void;
}

const UsersFavoritesComponent: React.FC<UserFavoritesProps> = ({ favorites, favoritesHandler}) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    /* const [nationalities, setNationalities] = useState<string[]>([]);
    const [gender, setGender] = useState<string>('all'); */
    const [searchTermDirty, setSearchTermDirty] = useState<boolean>(false);
    const [listUsers, setListUsers] = useState<any[]>([]);
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);


    return (
        <>
            <Box flex justifyContent="center" style={{ marginTop: '8rem' }}>
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
                        {favorites.map((user, idx) => {
                            return (
                                <GridItem key={`user-card-${idx}`} flexGrow={1}>
                                    <UserCard user={{...user, isFavorite: true}} handler={favoritesHandler} />
                                </GridItem>
                            );
                        })}
                    </Grid>
                    {favorites.length === 0 && <Typography style={{marginTop: "0.5rem"}}>No data available...</Typography>}
            </Box>
        </>
    );
};

export default UsersFavoritesComponent;
