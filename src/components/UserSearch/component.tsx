import UserCard from "@/components/UserCard/component";
import { useFetchUsersQuery } from "@/store/services/usersApi";
import { useSelector } from "@/store/store";

import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";

import Box from "../common/Box";
import { Grid } from "../common/Grid";
import GridItem from "../common/GridItem/component";
import { InfiniteScroll } from "../common/InfiniteScroll";
import { TextField } from "../common/TextField";
import styles from "./component.module.scss";

const UsersSearchComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchTermDirty, setSearchTermDirty] = useState<boolean>(false);
  const [listUsers, setListUsers] = useState<any[]>([]);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const [nextPage, setNextPage] = useState(1);
  const { data, isLoading, isFetching } = useFetchUsersQuery(
    { name: debouncedSearchTerm, filter: {nextPage} }
  );

    const { menuOpened } = useSelector((state) => state.settings);
    useEffect(() => {
      if (data?.data ) {
        setListUsers((prevRepos) => [...prevRepos, ...data.data]);
      }
      
    }, [data]);

  const debounceSearchTermUpdate = useCallback(
    
    debounce((searchValue) => {
      setListUsers([]);
      setDebouncedSearchTerm(searchValue);
      
      setNextPage(1);
    }, 500),
    []
  );

  useEffect(() => {
    if(searchTermDirty) {
      debounceSearchTermUpdate(searchTerm);
      return () => {
        debounceSearchTermUpdate.cancel();
      };
    }
  }, [searchTerm, debounceSearchTermUpdate, searchTermDirty]);

  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> =
    useCallback((event) => {
      setSearchTerm(event.target.value);
      !searchTermDirty && setSearchTermDirty(true);
    }, [searchTermDirty]);

  const loadMoreItems = () => {
    if (!isLoading && !isFetching && data?.moreData) {
        setNextPage(data?.nextPage);
    }
  };

  return (
    <>
      <Box
        className={`${styles.userSearchWrapper} ${menuOpened ? styles.menuOpened : '' }`}
        
      >
        <TextField
          label={"Search Users"}
          placeholder="Search Users"
          name="searchTerm"
          value={searchTerm}
          onChange={(e) => {handleSearchChange(e)}}
        />
      </Box>
      <Box flex justifyContent="center" style={{ marginTop: "6rem" }}>
        <InfiniteScroll
          hasMore={data?.moreData}
          loadMore={loadMoreItems}
          isLoading={isLoading || isFetching}
        >
          <Grid
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            gap="10px"
            flexWrap="wrap"
            style={{
              maxWidth: "88rem",
            }}
          >

            {listUsers.map((user, idx) => {
              return (
                <GridItem key={`user-card-${idx}`}flexGrow={1}>
                  <UserCard user={user} />
                </GridItem>
              );
            })}
            
          </Grid>
          {listUsers.length === 0 && !data?.moreData && (
                <p>No data available...</p>
            )}
            {listUsers.length !== 0 && !data?.moreData && (
                <p>you reach the end of the data...</p>
            )}
        </InfiniteScroll>
      </Box>
    </>
  );
};

export default UsersSearchComponent;
