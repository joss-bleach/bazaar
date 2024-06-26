import { getAuth } from "@clerk/nextjs/server";
import ImageKit from "imagekit";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { userId } = await getAuth(req);
  if (!userId) {
    return Response.json(false);
  }

  const imageKit = new ImageKit({
    urlEndpoint: process.env.NEXT_PUBLIC_IK_ENDPOINT as string,
    publicKey: process.env.NEXT_PUBLIC_IK_PUBLIC_KEY as string,
    privateKey: process.env.IK_PRIVATE_KEY as string,
  });

  return Response.json(imageKit.getAuthenticationParameters());
}
