import { allRooms, newRoom } from "@/backend/controllers/roomControllers";

import { NextRequest } from "next/server";
import { createEdgeRouter } from "next-connect";
import dbConnect from "@/config/dbConnect";

interface RequestContext {}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.get(allRooms);
router.post(newRoom);

export async function GET(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}

export async function POST(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}
