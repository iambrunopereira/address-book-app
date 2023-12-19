"use client";
import { Users } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Button } from "../common/Button";
import { Modal } from "../common/Modal";
import styles from "./component.module.scss";

interface User extends Users {
  isFavorite: boolean;
}

type UserCardProps = {
  user: User;
  handler: (isFavorite: boolean, repositoryInfo: Users) => void;
};

const UserCard = ({ user, handler }: UserCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  return (
    <>
      <div className={styles.userCard} onClick={() => setIsModalOpen(true)}>
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
        <h3>{`${user.firstName} ${user.lastName}`}</h3>
        <p>Username: {user.fullName}</p>
        <p>Email: {user.email}</p>
        <p>Street: {user.address.street}</p>
        <p>City: {user.address.city}</p>
        <p>State: {user.address.state}</p>
        <p>Postcode: {user.address.postcode}</p>
        <p>Phone: {user.phone}</p>
        <p>Cell: {user.cell}</p>
        <Button  onClick={() => handler(user.isFavorite, user)}>
              {user.isFavorite ? 'Remove' : 'Add'}
            </Button> 
      </Modal>
    </>
  );
};

export default UserCard;
