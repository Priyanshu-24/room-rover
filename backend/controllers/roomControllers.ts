import { NextRequest, NextResponse } from "next/server";

import ErrorHandler from "../utils/errorHandler";
import Room from "../models/room";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors";

export const allRooms = catchAsyncErrors(async (req: NextRequest) => {
  const rooms = await Room.find();

  const resPerPage: number = 8;

  return NextResponse.json({
    success: true,
    resPerPage,
    rooms,
  });
});

export const newRoom = catchAsyncErrors(async (req: NextRequest) => {
  const body = await req.json();

  const room = await Room.create(body);

  return NextResponse.json({
    success: true,
    room,
  });
});

export const getRoomDetails = catchAsyncErrors(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    const room = await Room.findById(params.id);

    if (!room) {
      throw new ErrorHandler("Room not found", 400);
    }

    return NextResponse.json({ success: true, room });
  }
);

export const updateRoomDetails = catchAsyncErrors(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    let room = await Room.findById(params.id);
    const body = await req.json();

    if (!room) {
      throw new ErrorHandler("Room not found", 400);
    }

    room = await Room.findByIdAndUpdate(params.id, body, { new: true });

    return NextResponse.json({ success: true, room });
  }
);

export const deleteRoom = catchAsyncErrors(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    let room = await Room.findById(params.id);

    if (!room) {
      throw new ErrorHandler("Room not found", 400);
    }

    await room.deleteOne();

    return NextResponse.json({ success: true });
  }
);
