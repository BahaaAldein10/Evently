"use server";

import { CreateEventParams } from "@/types";
import { connectToDatabase } from "../database/connectDB";
import User from "../database/models/user.model";
import { handleError } from "../utils";

export const createEvent = async ({
  event,
  userId,
  path,
}: CreateEventParams) => {
  try {
    await connectToDatabase();

    const organizer = await User.findById(userId);

    if (!organizer) {
      throw new Error("Orgainzer not found!");
    }

    const newEvent = await User.create({
      ...event,
      organizer: userId,
      category: event.categoryId,
    });

    return JSON.parse(JSON.stringify(newEvent));
  } catch (error) {
    handleError(error);
  }
};
