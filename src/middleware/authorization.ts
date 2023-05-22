import { Request, Response, NextFunction } from "express";
import { UserDocument} from "../models/User"

export const checkAuthorization = (req: any, res: Response, next: NextFunction) => {
  const user = req.user as UserDocument; // Assuming the user's role is stored in the "role" property of the authenticated user object
  const userRole = user.role
  if (userRole === "admin" || userRole === "employer") {
    // User is authorized, proceed to the next middleware or route handler
    next();
  } else {
    // User is not authorized, return a 403 Forbidden response
    return res.status(403).json({ message: "You are not authorized to perform this action." });
  }
};
