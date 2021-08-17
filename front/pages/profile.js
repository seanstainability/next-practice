import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followingList = [
    { id: 1, nickname: "david", email: "david@david.com" },
    { id: 2, nickname: "jessica", email: "jessica@jessica.com" },
    { id: 3, nickname: "kim", email: "kim@kim.com" },
  ];
  const followerList = [
    { id: 1, nickname: "david", email: "david@david.com" },
    { id: 2, nickname: "jessica", email: "jessica@jessica.com" },
    { id: 3, nickname: "kim", email: "kim@kim.com" },
  ];
  return (
    <>
      <Head>
        <title>프로필 | 트위터</title>
      </Head>
      <AppLayout>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <NicknameEditForm />
          <div style={{ display: "flex" }}>
            <FollowList header="팔로잉목록" list={followingList} />
            <FollowList header="팔로워목록" list={followerList} />
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export default Profile;
