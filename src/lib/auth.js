import { getSession } from "next-auth/react";

const authenticate = async (req, res) => {
  const session = await getSession({ req });

  if (!session) {
    return false;
  }

  return true;
};

export default authenticate; 
