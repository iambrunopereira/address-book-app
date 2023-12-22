import UserCard from '@/components/UserCard/component';


import { Users } from '@/types';
import Box from '../common/Box';
import { Grid } from '../common/Grid';
import GridItem from '../common/GridItem/component';
import { Typography } from '../common/Typography';
import { useTranslation } from 'react-i18next';

interface UserFavoritesProps {
    favorites: Users[];
    favoritesHandler: (isFavorite: boolean, repositoryInfo: Users) => void;
}

const UsersFavoritesComponent: React.FC<UserFavoritesProps> = ({ favorites, favoritesHandler}) => {
    const { t } = useTranslation();
    return (
        <>  
            <h1>{t('favorites_page__title')}</h1>
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
                    {favorites.length === 0 && <Typography style={{marginTop: "0.5rem"}}>{t('favorites_page__no_data')}</Typography>}
            </Box>
        </>
    );
};

export default UsersFavoritesComponent;
