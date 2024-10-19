"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [session, setSession] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    const loadData = async () => {
      await fetchUser();
    };

    if (!session) {
      fetchSession();
    } else if (window.location.pathname !== "/signup" && window.location.pathname !== "/signin") {
      if (session.data.session) {
        if (!dataLoaded) {
          setDataLoaded(true);
          loadData();
        }
      }
    }
  }, [session]);

  const fetchUser = async () => {
    const userId = session.data.session?.user.id;
    if (!userId) return;
    try {
      const response = await fetch(`/api/user/${userId}`, {
        method: "GET",
      });
      if (response.status === 200) {
        const { user } = await response.json();
        setUser(user);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSession = async () => {
    const session = await supabase.auth.getSession();
    setSession(session);
  };

  return <UserContext.Provider value={{ session, user }}>{children}</UserContext.Provider>;
};
