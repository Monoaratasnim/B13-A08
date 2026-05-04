import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, image } = await req.json();

    if (!name || !image) {
      return NextResponse.json(
        { error: "Name and image are required" },
        { status: 400 }
      );
    }

    // ✅ FIX: headers required for authentication context
    const updatedUser = await auth.api.updateUser({
      body: {
        name,
        image,
      },
      headers: req.headers,
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("Update user error:", error);

    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}