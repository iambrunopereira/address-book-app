"use client";
import { Users } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Divisor } from "..";
import Box from "../common/Box";
import Button from "../common/Button";
import { Modal } from "../common/Modal";
import { Typography } from "../common/Typography";
import styles from "./component.module.scss";

interface User extends Users {
  isFavorite: boolean;
}

type UserCardProps = {
  user: User;
  handler: (isFavorite: boolean, user: Users) => void;
};

const UserCard = ({ user, handler }: UserCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  
  return (
    <>
      <div className={styles.userCard} onClick={() => setIsModalOpen(true)} data-testid="user-card">
        <div className={`${styles.favoriteIcon} ${true && styles.active}`}>
          {user.isFavorite ? <FaStar /> : <FaRegStar />}
        </div>
        <Image
          width="50"
          height="50"
          src={user.picture}
          alt={`${user.firstName} ${user.lastName}`}
          className={styles.userPicture}
        />
        
        <h3>{`${user.firstName} ${user.lastName}`}</h3>
        <p>@{user.username}</p>
        <p>{user.email}</p>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      
        <Typography variant="h3" style={{marginBottom: "0.5rem"}}>{`${user.firstName} ${user.lastName}`}</Typography>
        <Typography variant="h4">{t(`modal__labels__address`)}</Typography>
        <Typography variant="body1">{t(`modal__labels__street`)}: {user.address.street}</Typography>
        <Typography variant="body1">{t(`modal__labels__city`)}: {user.address.city}</Typography>
        <Typography variant="body1">{t(`modal__labels__state`)}: {user.address.state}</Typography>
        <Typography variant="body1">{t(`modal__labels__postcode`)}: {user.address.postcode}</Typography>
        <Typography variant="h4" style={{marginTop: "1rem"}}>{t(`modal__labels__contact`)}</Typography>
        <Typography variant="body1">{t(`modal__labels__phone`)}: {user.phone}</Typography>
        <Typography variant="body1">{t(`modal__labels__cell`)}: {user.cell}</Typography>
        <Divisor />
        <Box flex justifyContent="end" >
          <Button  variant={user.isFavorite ? "menu" : "secondary"} onClick={() => handler(user.isFavorite, user)}>
          {user.isFavorite ? t(`modal__buttons__remove_from_favorites`):t(`modal__buttons__add_to_favorites`)}
          </Button> 
        </Box>
      </Modal>
    </>
  );
};

export default UserCard;
